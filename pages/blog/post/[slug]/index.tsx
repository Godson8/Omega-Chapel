type Props = {
  params: {
    slug?: string;
  };
};

const Post = ({ params }: Props) => {
  const slug = params?.slug;

  console.log("first");
  return <div>Post: {slug}</div>;
};

export default Post;
