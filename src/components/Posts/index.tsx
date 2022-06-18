import { useEffect, useState } from "react";

import Post from "./Post";

import { getPosts } from "../../actions/posts";
import { POST } from "../../common/types";
import { useAppDispatch, useAppSelector } from "../../config/hooks";

function Posts() {
  const dispatch = useAppDispatch();
  const postsStatus = useAppSelector((state) => state.posts.status);
  const posts = useAppSelector((state) => state.posts.posts);
  const [savedPosts, setPosts] = useState<Array<POST>>([]);
  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(getPosts());
    }
    if (postsStatus === "succeeded") {
      setPosts(posts);
    }
  }, [posts, postsStatus, dispatch]);

  const postsToRender =
    savedPosts && savedPosts.length > 0
      ? savedPosts.map((p: POST) => <Post data={p} key={p.id} />)
      : [];

  return <ul>{postsToRender}</ul>;
}

export default Posts;
