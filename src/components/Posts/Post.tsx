import { POST } from "../../common/types";

interface PostProps {
  data: POST;
}

function Post({ data }: PostProps) {
  return <div>{data.title}</div>;
}

export default Post;
