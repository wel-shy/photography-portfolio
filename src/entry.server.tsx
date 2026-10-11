import React from 'react';
import { PassThrough } from 'node:stream';
import { text } from 'node:stream/consumers';
import { renderToPipeableStream } from 'react-dom/server';
import { ServerRouter } from 'react-router';
import type { EntryContext } from 'react-router';
import { ServerStyleSheet } from 'styled-components';

/**
 * Renders a page to a complete HTML document. Pages are only rendered at build
 * time (or by the dev server), so the whole document is buffered rather than streamed.
 */
const handleRequest = async (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext
) => {
  const sheet = new ServerStyleSheet();

  try {
    const markup = await new Promise<string>((resolve, reject) => {
      const { pipe } = renderToPipeableStream(
        sheet.collectStyles(
          <ServerRouter context={routerContext} url={request.url} />
        ),
        {
          onAllReady() {
            const body = new PassThrough();
            resolve(text(body));
            pipe(body);
          },
          onShellError: reject,
          onError: reject,
        }
      );
    });

    // styled-components only knows which styles a page uses once it has rendered
    const html = markup.replace('</head>', `${sheet.getStyleTags()}</head>`);

    responseHeaders.set('Content-Type', 'text/html; charset=utf-8');

    return new Response(html, {
      status: responseStatusCode,
      headers: responseHeaders,
    });
  } finally {
    sheet.seal();
  }
};

export default handleRequest;
