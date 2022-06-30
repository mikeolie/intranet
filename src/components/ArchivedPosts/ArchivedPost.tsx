import { POST } from "../../common/types";

interface ArchivedPostProps {
  data: POST;
}

function ArchivedPost({ data }: ArchivedPostProps) {
  const { title, body } = data;
  return (
    <li className="post__container">
      <article className="post__content">
        <sup>{title}</sup>
        <span>{body}</span>
      </article>
    </li>
  );
}

export default ArchivedPost;
