import { useState } from "react";
import { Link } from "react-router-dom";

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
          <Link to="/create">Create Post</Link>
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
