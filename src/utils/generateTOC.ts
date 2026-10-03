import GithubSlugger from 'github-slugger';

export interface TOCItem {
  id: string;
  title: string;
  level: number;
}

/**
 * Generates table of contents from markdown content matching rehype-slug algorithm
 * @param markdownContent - The markdown content string
 * @returns Array of TOC items with id, title, and level
 */
export const generateTOC = (markdownContent: string): TOCItem[] => {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const toc: TOCItem[] = [];
  const slugger = new GithubSlugger();
  let match;

  while ((match = headingRegex.exec(markdownContent)) !== null) {
    const level = match[1].length; // Number of # characters
    const title = match[2].trim();

    // Generate exact slug id using GithubSlugger (identical to rehype-slug)
    const id = slugger.slug(title);

    toc.push({
      id,
      title,
      level,
    });
  }

  return toc;
};

export default generateTOC;
