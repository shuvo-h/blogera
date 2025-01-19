export type TBlog = {
    id: number;
    title: { rendered: string };
    excerpt: { rendered: string };
    content: { rendered: string }; // We'll pass the full content here
};