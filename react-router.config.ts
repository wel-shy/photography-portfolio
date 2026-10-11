import type { Config } from '@react-router/dev/config';
import { loadEnv } from 'vite';
import fetchManifest from './src/lib/fetchManifest';

export default {
  appDirectory: 'src',
  // Every page is rendered to a static file at build time, there is no server
  ssr: false,
  async prerender({ getStaticPaths }) {
    const env = loadEnv('production', process.cwd());
    const { collections } = await fetchManifest(
      env.VITE_CDN_BASE_URL,
      env.VITE_SITE_URL
    );

    return [
      ...getStaticPaths(),
      ...collections.map(({ id }) => `/collections/${id}`),
      ...collections.flatMap(({ images }) =>
        images.map(({ id }) => `/images/${id}`)
      ),
    ];
  },
} satisfies Config;
