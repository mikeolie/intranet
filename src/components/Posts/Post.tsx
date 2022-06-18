import { POST } from "../../common/types";
import DefaultImg from "../../assets/images/No_Image_Available.jpg";

interface PostProps {
  data: POST;
}

function Post({ data }: PostProps) {
  const { title, department, body, header_img: headerImg } = data;
  const imgToUse = headerImg !== "" ? headerImg : DefaultImg;
  return (
    <li className="post__container">
      <img className="post__image" src={imgToUse} alt={title} />
      <article className="post__content">
        <sup>{title}</sup>
        <sub>{department}</sub>
        <span>{body}</span>
      </article>
    </li>
  );
}

export default Post;
