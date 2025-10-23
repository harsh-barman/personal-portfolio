// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { routes } from './src/routes.js';

const siteUrl = 'https://harsh-barman2.vercel.app'; // ← your live site URL

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: siteUrl });
  const writeStream = createWriteStream('./public/sitemap.xml');

  routes.forEach((route) => {
    stream.write({
      url: route,
      changefreq: 'monthly',
      priority: route === '/' ? 1.0 : 0.8
    });
  });

  stream.end();
  await streamToPromise(stream);
  stream.pipe(writeStream);
  console.log('✅ Sitemap generated successfully!');
}

generateSitemap().catch(console.error);
