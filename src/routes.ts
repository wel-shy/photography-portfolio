import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('pages/Collection/Collection.tsx', { id: 'home' }),
  route('collections/:id', 'pages/Collection/Collection.tsx'),
  route('images/:imageId', 'pages/ImageDetail/ImageDetail.tsx'),
  route('contact', 'pages/ContactPage/ContactPage.tsx'),
  route('privacy', 'pages/PrivacyPage/PrivacyPage.tsx'),
  route('sitemap.xml', 'pages/sitemap.ts'),
] satisfies RouteConfig;
