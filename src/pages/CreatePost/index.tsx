import { useState } from "react";

import Button from "@mui/material/Button";

import PostForm from "../../components/PostForm";
import PreviewPost from "../../components/Posts/PreviewPost";

import { createPosts } from "../../actions/posts";

import { ImageState, IPostForm, POST_REQUEST } from "../../common/types";
import { INITIAL_POST_FORM } from "../../common/constants";
import uploadFilesToAws from "../../modules/uploadFilesToAws";
import { useAppDispatch } from "../../config/hooks";

function CreatePost() {
  const [formData, setFormData] = useState<IPostForm>(INITIAL_POST_FORM);
  const [previewMode, togglePreviewMode] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const updateState = (value: string | Date, key: string) => {
    const copyOfState = JSON.parse(JSON.stringify(formData));
    copyOfState[key] = value;
    setFormData(copyOfState);
  };
  const toggleText = previewMode ? "Edit Post" : "Preview Post";
  const handleConfirm = async () => {
    // get form data
    // upload image
    const rawImages = (await uploadFilesToAws([
      formData.headerImg as ImageState,
    ])) as any;
    // get image location
    const [headerImg] = await Promise.all(rawImages);
    const copyOfFormData = JSON.parse(JSON.stringify(formData));
    const postData: POST_REQUEST = {
      title: copyOfFormData.title,
      subtitle: copyOfFormData.subTitle,
      department: copyOfFormData.department,
      header_img: headerImg,
      body: copyOfFormData.body,
      is_archived: false,
      date_modified: new Date().toDateString(),
      date_created: new Date().toDateString(),
      publish_date: new Date(copyOfFormData.publishedDate).toDateString(),
    };
    // submit to axios
    const res = await dispatch(createPosts(postData));
    // get response
    if (res.meta.requestStatus === "rejected") {
      // set error
    }
    // show success
    // redirect to home page
  };
  const showPreviewButton = formData.body.length > 20;
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
