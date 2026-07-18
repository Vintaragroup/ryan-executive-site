import { getArticleBySlug, articles } from '@/lib/thinking-data';
import { ArticleClient } from './ArticleClient';

/**
 * Server Component - generates static params and metadata
 */
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'This article could not be found.',
    };
  }

  return {
    title: `${article.title} — Ryan Morrow`,
    description: article.dek,
    openGraph: {
      title: article.title,
      description: article.dek,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ArticleClient slug={slug} />;
}
