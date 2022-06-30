import { useEffect, useState } from "react";
import AdminPosts from "../../components/AdminPosts";
import "./styles.scss";

function Admin() {
  const [editMode, toggleEditMode] = useState<boolean>(false);
  const handleEditModeClick = () => toggleEditMode(!editMode);
  return (
    <div className="App">
      <header className="admin__header">
        <article>
          <span>Go Back</span>
        </article>
        <article>
          <button className="">Create Posts</button>
        </article>
        <article>
          <button className="" onClick={handleEditModeClick}>
            Manage Posts
          </button>
        </article>
      </header>
      <main>
        <AdminPosts editMode={editMode} />
      </main>
    </div>
  );
}

export default Admin;
