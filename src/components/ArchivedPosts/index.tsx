import { useAppSelector } from "../../config/hooks";
import ArchivedPost from "./ArchivedPost";

function ArchivedPosts() {
  const archivedPosts = useAppSelector((state) =>
    state.posts.posts.filter((p) => p && p.is_archived)
  ).map((ap) => <ArchivedPost data={ap} key={ap.id} />);
  return (
    <section>
      <header className="home-section__header">
        <div />
        <h4>Archives</h4>
      </header>
      <ul>{archivedPosts}</ul>
    </section>
  );
}

export default ArchivedPosts;
