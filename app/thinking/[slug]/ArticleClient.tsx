'use client';

import Link from 'next/link';
import { GlobalNav, Footer } from '@/components/navigation';
import { PageContainer, SectionContainer } from '@/components/layouts';
import { getArticleBySlug, articles } from '@/lib/thinking-data';

interface ArticleClientProps {
  slug: string;
}

export function ArticleClient({ slug }: ArticleClientProps) {
  const article = getArticleBySlug(slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  const footerLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ryanmorrow' },
    { label: 'Email', href: 'mailto:office@ryanmorrow.com' },
    { label: 'Resume', href: '/resume.pdf' },
  ];

  // Find next article (for navigation)
  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const nextArticle = articles[(currentIndex + 1) % articles.length];

  return (
    <PageContainer>
      <GlobalNav />

      {/* Scene 1: Article Hero */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-white">
        <SectionContainer>
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Category & Reading Time */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono tracking-widest uppercase text-gray-600">
                {article.category}
              </span>
              <span className="text-xs text-gray-500">{article.readingTime} min read</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-black leading-tight">
              {article.title}
            </h1>

            {/* Dek */}
            <p className="text-xl md:text-2xl leading-relaxed text-gray-700 max-w-2xl">
              {article.dek}
            </p>

            {/* Metadata */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-gray-600 border-t border-gray-200 pt-6">
              <span>Published: {article.date}</span>
              <span className="hidden sm:inline">{'/'}</span>
              <span>By Ryan Morrow</span>
            </div>

            {/* Hero Image */}
            {article.heroImageUrl && (
              <div className="w-full aspect-video md:aspect-auto md:h-96 lg:h-full bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center mt-12">
                <p className="text-gray-500 text-sm text-center px-4">{article.heroImageUrl}</p>
              </div>
            )}
          </div>
        </SectionContainer>
      </section>

      {/* Scene 2: Article Content */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white border-t border-gray-200">
        <SectionContainer>
          <div className="max-w-3xl mx-auto">
            {/* Main Content */}
            <article className="prose prose-lg prose-slate max-w-none">
              <div className="space-y-8 text-base md:text-lg leading-relaxed text-gray-800">
                {article.content && (
                  <p>
                    {article.content}
                  </p>
                )}

                {/* Figures Section */}
                {article.figures && article.figures.length > 0 && (
                  <div className="space-y-8 my-12 border-t border-gray-200 pt-8">
                    <h3 className="text-xl font-serif text-black">Figures & Diagrams</h3>
                    {article.figures.map((figure) => (
                      <figure key={figure.id} className="space-y-4">
                        <div className="w-full aspect-video bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center">
                          <p className="text-gray-500 text-sm text-center px-4">{figure.title}</p>
                        </div>
                        <figcaption className="text-sm text-gray-600 italic">{figure.caption}</figcaption>
                        {figure.source && (
                          <p className="text-xs text-gray-500">
                            {'Source: '}
                            {figure.source}
                          </p>
                        )}
                      </figure>
                    ))}
                  </div>
                )}

                {/* Pull Quotes Section */}
                {article.pullQuotes && article.pullQuotes.length > 0 && (
                  <div className="space-y-6 my-12 border-l-4 border-gray-300 pl-6 py-4 bg-gray-50">
                    <h3 className="text-lg font-serif text-black">Key Insights</h3>
                    {article.pullQuotes.map((quote) => (
                      <blockquote
                        key={quote.id}
                        className="space-y-2"
                      >
                        <p className="text-base italic text-gray-800">{'"' + quote.text + '"'}</p>
                        {quote.attribution && (
                          <p className="text-sm text-gray-600">
                            {'— '}
                            {quote.attribution}
                          </p>
                        )}
                      </blockquote>
                    ))}
                  </div>
                )}

                {/* Marginalia Section */}
                {article.marginalia && article.marginalia.length > 0 && (
                  <div className="space-y-4 my-12 border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-serif text-black">Side Notes</h3>
                    {article.marginalia.map((note) => (
                      <div key={note.id} className="flex gap-4">
                        <div className="text-xs text-gray-500 font-mono min-w-fit">
                          {note.placement || 'note'}
                        </div>
                        <p className="text-sm text-gray-700">{note.content}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Citations Section */}
                {article.citations && article.citations.length > 0 && (
                  <div className="space-y-4 my-12 border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-serif text-black">References</h3>
                    <ol className="space-y-3 list-decimal list-inside">
                      {article.citations.map((citation) => (
                        <li key={citation.id} className="text-sm text-gray-700">
                          <span className="font-semibold">{citation.text}</span>
                          {' — '}
                          {citation.author}
                          {', '}
                          <em>{citation.source}</em>
                          {citation.url && (
                            <>
                              {' '}
                              <a
                                href={citation.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                              >
                                Link
                              </a>
                            </>
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </article>
          </div>
        </SectionContainer>
      </section>

      {/* Scene 3: Article Navigation */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white border-t border-gray-200">
        <SectionContainer>
          <div className="space-y-8">
            {/* Divider */}
            <div className="border-t border-gray-200" />

            {/* Next Article Link */}
            <div className="max-w-2xl mx-auto">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Next Article</p>
              <Link
                href={`/thinking/${nextArticle.slug}`}
                className="group block hover:opacity-75 transition-opacity"
              >
                <h3 className="text-2xl md:text-3xl font-serif tracking-tight text-black group-hover:underline">
                  {nextArticle.title}
                </h3>
                <p className="text-base text-gray-700 mt-2">{nextArticle.dek}</p>
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
              <Link
                href="/thinking"
                className="px-6 py-3 border border-black text-black font-mono text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors flex-1 text-center"
              >
                Back to Articles
              </Link>
              <a
                href="mailto:office@ryanmorrow.com"
                className="px-6 py-3 border border-gray-300 text-black font-mono text-xs uppercase tracking-widest hover:border-black transition-colors flex-1 text-center"
              >
                Share Feedback
              </a>
            </div>
          </div>
        </SectionContainer>
      </section>

      <Footer links={footerLinks} />
    </PageContainer>
  );
}
