import { notFound } from 'next/navigation';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc'; // RSC version
import remarkGfm from 'remark-gfm';
import { AnimationCard } from '@/components/animation-card';
import { CardContainer } from '@/components/card-container';

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), '/content/docs');
  const files = fs.readdirSync(contentDir);

  const file = files.map((file) => ({
    slug: [file.replace('.mdx', '')],
  }));

  return file;
}
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
          <div className=" items-center">
            <h1 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight dark:text-neutral-200 text-neutral-900">
              {frontmatter.name}
            </h1>
            <div>
              <p className="font-sans dark:text-neutral-400 text-neutral-700 text-[14px]  tracking-wide leading-normal">
                {frontmatter.description}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4">
          <MDXRemote
            source={content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
            components={{
              h2: ({ children }) => (
                <h2 className="border-b dark:border-neutral-800  font-semibold  text-neutral-800 dark:text-neutral-300 font-sans tracking-tight border-slate-200 pt-4 mt-6">
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
                <th className="text-left px-4 py-2 font-semibold font-mono text-[12px] text-neutral-600 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-800">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-4 py-2 font-medium text-[13px] text-neutral-700 dark:text-neutral-300 font-sans">
                  {children}
                </td>
              ),
              CardContainer,
              AnimationCard,
            }}
          />
        </div>
      </div>
    </div>
  );
}
