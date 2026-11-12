// Blog post loader shared by /blog and /blog/[slug].
// Blog posts live as Markdown in src/content/blog. Add a .md file with the same frontmatter to publish a post.
export interface PostFrontmatter {
  title: string;
  slug: string;
  date: string;
  image: string;
  thumb: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  description: string;
  author?: string;
}

const modules = import.meta.glob<{ frontmatter: PostFrontmatter; Content: any }>('./blog/*.md', { eager: true });

export const posts = Object.values(modules)
  .map((m) => ({ ...m.frontmatter, Content: m.Content }))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const formatDate = (d: string) =>
  new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
