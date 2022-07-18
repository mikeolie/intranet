import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";

import PostForm from "../../components/PostForm";
import PreviewPost from "../../components/Posts/PreviewPost";

import { createPosts } from "../../actions/posts";

import RCTVSnackbar from "../../components/Snackbar";

import {
  Departments,
  ImageState,
  IPostForm,
  POST_REQUEST,
  SNACKBAR_STATUSES,
} from "../../common/types";
import uploadFilesToAws from "../../modules/uploadFilesToAws";
import formatDate from "../../modules/formatDate";
import { useAppDispatch } from "../../config/hooks";

import "./styles.scss";

function CreatePost() {
  const [title, setTitle] = useState<string>("");
  const [subtitle, setSubtitle] = useState<string>("");
  const [department, setDepartment] = useState<Departments>("All");
  const [body, setBody] = useState<string>("");
  const [publishedDate, setPublishedDate] = useState<any>(new Date());
  const [headerImg, setHeaderImg] = useState<ImageState | null>(null);
  const [previewMode, togglePreviewMode] = useState<boolean>(false);
  const [snackbarOpen, setSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<SNACKBAR_STATUSES>(
    SNACKBAR_STATUSES.SUCCESS
  );
  const resetState = () => {
    setTitle("");
    setSubtitle("");
    setDepartment("All");
    setBody("");
    setPublishedDate(new Date());
    setHeaderImg(null);
    togglePreviewMode(false);
  };
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
      date_modified: formatDate(new Date()),
      date_created: formatDate(new Date()),
      publish_date: formatDate(new Date(publishedDate)),
    };
    // submit to axios
    const res = await dispatch(createPosts(dataToSend));
    // get response
    let msg: string = "";
    if (res.meta.requestStatus === "rejected") {
      // set error
      msg += "Unable to create new post! Please contact Mike for assistance";
      setSnackbarMessage(msg);
      setSnackbarSeverity(SNACKBAR_STATUSES.ERROR);
      return setSnackbar(true);
    }
    // show success
    msg += "Created new Post!";
    setSnackbarMessage(msg);
    setSnackbarSeverity(SNACKBAR_STATUSES.SUCCESS);
    setSnackbar(true);
    resetState();
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
        <Link to="/admin">
          <article className="go-back">
            <HomeIcon />
            <h6>Go to home screen</h6>
          </article>
        </Link>
      </nav>
      <main>
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
        <RCTVSnackbar
          isOpen={snackbarOpen}
          severity={snackbarSeverity}
          setSnackbar={setSnackbar}
          snackbarMessage={snackbarMessage}
        />
      </main>
    </div>
  );
}

export default CreatePost;
