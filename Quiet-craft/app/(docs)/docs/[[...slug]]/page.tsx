import { notFound } from 'next/navigation';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

import { CustomButton } from '@/components/ui/custom-button';
import { AnimationCard } from '@/components/ui/animation-card';
import type { Metadata } from 'next';
import { CardContainer } from '@/components/ui/card-container';
import { ButtonContainer } from '@/components/ui/button-conatiner';
import { VoiceCardContainer, VoiceChart } from '@/components/ui/voice-chat-card';

// Statics page
export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), '/content/docs');
  const files = fs.readdirSync(contentDir);

  const file = files.map((file) => ({
    slug: [file.replace('.mdx', '')],
  }));

  return file;
}
// Get project data from file path
function getProjectData(name: string) {
  const filePath = path.join(process.cwd(), 'content/docs', `${name}.mdx`);

  // If file does't exits show 404
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContent);

  return { frontmatter: data, content };
}

//  generate meta data from file path data
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const name = slug?.join('/') ?? 'index';
  const project = getProjectData(name);

  if (!project) return {};

  const { frontmatter } = project;

  return {
    title: `${frontmatter.name} – Quiet Craft`,
    description: frontmatter.description,
    authors: [{ name: 'Uzwal', url: 'https://github.com/isuzwal' }],
    keywords: frontmatter.tags ?? [],
    icons: [
      { rel: 'icon', url: '/favicon.ico' },
      { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
    ],
  };
}

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;

  const name = slug?.join('/') ?? 'index';
  const project = getProjectData(name!);
  if (!project) notFound();
  const { frontmatter, content } = project;

  return (
    <div className="w-full">
      <div className="flex flex-col   max-w-5xl mx-auto  w-full  p-2 gap-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-start justify-between gap-2">
            <div className="items-center">
              <h1 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight dark:text-neutral-200 text-neutral-900">
                {frontmatter.name}
              </h1>
              <p className="font-sans dark:text-neutral-400 text-neutral-700 text-[14px] tracking-wide leading-normal">
                {frontmatter.description}
              </p>

              {/* Metadata row */}
              <div className="flex items-center gap-3 mt-2 flex-wrap">
                {/* Author */}
                {frontmatter.author && (
                  <span className="text-[12px] font-mono text-neutral-500 dark:text-neutral-400">
                    By {frontmatter.author}
                  </span>
                )}

                {/* Date */}
                {frontmatter.date && (
                  <span className="text-[12px] font-mono text-neutral-400 dark:text-neutral-500">
                    {new Date(frontmatter.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                )}

                {/* Tags */}
                {frontmatter.tags && (
                  <div className="flex gap-1 flex-wrap">
                    {frontmatter.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-900"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-2">
          <MDXRemote
            source={content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
            components={{
              h2: ({ children }) => (
                <h2 className="border-b dark:border-neutral-800  font-semibold  text-neutral-800/90 dark:text-neutral-300 font-sans tracking-tight border-slate-200 pt-4 ">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h2 className=" dark:border-neutral-800  font-semibold text-sm  text-neutral-800/90 dark:text-neutral-300 font-sans tracking-tight border-slate-200 pt-2 ">
                  {children}
                </h2>
              ),
              p: ({ children }) => (
                <p className="font-medium  font-sans dark:text-neutral-400 text-neutral-700 text-[14px]  tracking-wide leading-normal">
                  {children}
                </p>
              ),
              // Example: styled inline code
              code: ({ children }) => (
                <code className="dark:bg-zinc-900 border border-slate-200 bg-slate-100 text-neutral-700 dark:text-neutral-300  dark:border-neutral-800 shadow-xs  italic px-1 rounded text-[10px] tracking-tight font-medium font-mono">
                  {children}
                </code>
              ),

              table: ({ children }) => (
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm border-collapse border border-neutral-200 dark:border-neutral-800">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-neutral-100 dark:bg-neutral-900">{children}</thead>
              ),
              tbody: ({ children }) => (
                <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                  {children}
                </tbody>
              ),
              tr: ({ children }) => (
                <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors">
                  {children}
                </tr>
              ),
              th: ({ children }) => (
                <th className="text-left px-4 py-2 font-semibold font-sans text-[12px] text-neutral-600 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-800">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-4 py-2 font-medium text-[13px] text-neutral-700 dark:text-neutral-300 font-sans">
                  {children}
                </td>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-neutral-900 dark:text-neutral-200">
                  {children}
                </strong>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-5 space-y-1 text-neutral-800 font-medium dark:text-neutral-300">
                  {children}
                </ol>
              ),

              li: ({ children }) => (
                <li className="font-sans text-[14px] tracking-wide dark:text-neutral-400 text-neutral-700">
                  {children}
                </li>
              ),
              CardContainer, // card container
              ButtonContainer, // button conatiner
              AnimationCard,
              CustomButton,
              VoiceCardContainer, // voice  container card
              VoiceChart,
            }}
          />
        </div>
      </div>
    </div>
  );
}
