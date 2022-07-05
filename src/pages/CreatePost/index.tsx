import { useState } from "react";

import { INITIAL_POST_FORM } from "../../common/constants";
import { IPostForm } from "../../common/types";
import PostForm from "../../components/PostForm";

function CreatePost() {
  const [formData, setFormData] = useState<IPostForm>(INITIAL_POST_FORM);
  const updateState = (value: string | Date, key: string) => {
    const copyOfState = JSON.parse(JSON.stringify(formData));
    copyOfState[key] = value;
    setFormData(copyOfState);
  };
  const handleConfirm = () => {
    // get form data
    // submit to axios
    // get response
    // do error handling and show message
    // redirect to home page
  };
  return (
    <div id="post-page__container">
      <nav>
        <article>Go back to admin</article>
      </nav>
      <header>
        <h4>Create Post</h4>
      </header>
      <PostForm formData={formData} updateState={updateState} />
    </div>
  );
}

export default CreatePost;
