import { getPostBySlug } from '../../../lib/api';
import markdownToHtml from '../../../lib/markdown-to-html';
import { PostBody } from '../../components/post-body';
import { PostHeader } from '../../components/post-header';
import { PostFooter } from '../../components/post-footer';
import { Navbar } from '../../components/navbar';

type Params = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content);

  return (
    <>
      <Navbar />
      <PostHeader {...post} />
      <PostBody content={content} />
      <PostFooter author={post.author} />
    </>
  );
}
