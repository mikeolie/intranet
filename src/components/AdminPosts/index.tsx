import { useEffect, useState } from "react";

import AdminPost from "./AdminPost";

import { getPosts } from "../../actions/posts";
import { POST } from "../../common/types";
import { useAppDispatch, useAppSelector } from "../../config/hooks";

interface AdminPostsProps {
  editMode: boolean;
}

function AdminPosts({ editMode }: AdminPostsProps) {
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
      ? savedPosts.map((p: POST) => <AdminPost data={p} key={p.id} />)
      : [];

  return <ul>{postsToRender}</ul>;
}

export default AdminPosts;
