import { MdxContent } from '@/app/mdx-content';

import { type MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { promises as fs } from 'fs';
import { PageTypes } from '@/@types/page-types';

type Frontmatter = {
  title: string;
  date: string;
};

type Post<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: TFrontmatter;
};

async function getMdxContent(filepath: string): Promise<Post<Frontmatter>> {
  // Read the file from the filesystem
  const raw = await fs.readFile(filepath, 'utf-8');

  // Serialize the MDX content and parse the frontmatter
  const serialized = await serialize(raw, {
    parseFrontmatter: true,
  });

  // Typecast the frontmatter to the correct type
  const frontmatter = serialized.frontmatter as Frontmatter;

  // Return the serialized content and frontmatter
  return {
    frontmatter,
    serialized,
  };
}

export default async function PrivacyPolicyPage(
  props: Omit<PageTypes, 'children'>,
) {
  const {
    params: { lng },
  } = props;

  const { serialized, frontmatter } = await getMdxContent(
    `content/${lng}/privacy-policy.mdx`,
  );

  return (
    <div
      style={{ maxWidth: 900, width: 'auto', margin: 'auto' }}
      className="p-8 pt-32 pb-32"
    >
      <MdxContent source={serialized} />
    </div>
  );
}
