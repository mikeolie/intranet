import ReactHTMLParser from "react-html-parser";
import { IPostForm } from "../../common/types";

import "./styles.scss";

interface PreviewPostProps {
  post: IPostForm;
}

export default function PreviewPost({ post }: PreviewPostProps) {
  const { headerImg, title, subTitle, department, body, publishedDate } = post;
  let imgSrc = ''
  if (headerImg) {
    imgSrc = headerImg.src
  }
  const formattedDate = new Date(publishedDate).toDateString();
  return (
    <div className="story__container">
      <section className="story__title">
        <header>{title}</header>
        <h6>{subTitle}</h6>
        <figure className="story__image">
          <img src={imgSrc} alt={imgSrc} />
        </figure>
      </section>
      <article className="story-misc__container">
        <sup>{department}</sup>
        <sub>{formattedDate}</sub>
      </article>
      <section className="story__body">{ReactHTMLParser(body)}</section>
    </div>
  );
}
