import { useState } from "react";

import Button from "@mui/material/Button";

import PostForm from "../../components/PostForm";
import PreviewPost from "../../components/Posts/PreviewPost";

import { createPosts } from "../../actions/posts";

import {
  Departments,
  ImageState,
  IPostForm,
  POST_REQUEST,
} from "../../common/types";
import uploadFilesToAws from "../../modules/uploadFilesToAws";
import { useAppDispatch } from "../../config/hooks";

function CreatePost() {
  const [title, setTitle] = useState<string>("");
  const [subtitle, setSubtitle] = useState<string>("");
  const [department, setDepartment] = useState<Departments>("All");
  const [body, setBody] = useState<string>("");
  const [publishedDate, setPublishedDate] = useState<any>(new Date());
  const [headerImg, setHeaderImg] = useState<ImageState | null>(null);
  const [previewMode, togglePreviewMode] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const toggleText = previewMode ? "Edit Post" : "Preview Post";
  const updateState = (value: string | Date | ImageState, key: string) => {
    let valToSet: string | Date | ImageState = value as string;
    if (key === "title") {
      return setTitle(valToSet);
    }
    if (key === "subTitle") {
      return setSubtitle(valToSet);
    }
    if (key === "department") {
      return setDepartment(valToSet as Departments);
    }
    if (key === "body") {
      return setBody(valToSet);
    }
    if (key === "publishedDate") {
      valToSet = value as Date;
      return setPublishedDate(valToSet);
    }
    if (key === "headerImg") {
      valToSet = value as ImageState;
      return setHeaderImg(valToSet);
    }
  };
  const handleConfirm = async () => {
    // get form data
    // upload image
    const rawImages = (await uploadFilesToAws([
      headerImg as ImageState,
    ])) as any;
    // get image location
    const [headerImgLink] = await Promise.all(rawImages);
    const dataToSend: POST_REQUEST = {
      title: title,
      subtitle,
      department,
      header_img: headerImgLink,
      body,
      is_archived: false,
      date_modified: new Date().toDateString(),
      date_created: new Date().toDateString(),
      publish_date: new Date(publishedDate).toDateString(),
    };
    // submit to axios
    const res = await dispatch(createPosts(dataToSend));
    // get response
    if (res.meta.requestStatus === "rejected") {
      // set error
    }
    // show success
    // redirect to home page
  };
  const showPreviewButton = body.length > 20;
  const formData: IPostForm = {
    title,
    subTitle: subtitle,
    department,
    body,
    publishedDate,
    headerImg,
  };
  const content = previewMode ? (
    <PreviewPost post={formData} />
  ) : (
    <PostForm updateState={updateState} formData={formData} />
  );
  return (
    <div id="post-page__container">
      <nav>
        <article>Go back to admin</article>
      </nav>
      <header>
        <h4>Create Post</h4>
      </header>
      {showPreviewButton && (
        <Button onClick={() => togglePreviewMode(!previewMode)}>
          {toggleText}
        </Button>
      )}
      {content}
      {previewMode && <Button onClick={handleConfirm}>Save Post</Button>}
    </div>
  );
}

export default CreatePost;
