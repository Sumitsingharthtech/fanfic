import React from "react";
import "./Library.css";
import { FiEdit } from "react-icons/fi";
import LibraryImage from "../../Assets/Images/libary.png";
function Library() {
  return (
    <>
      <div className="create-bg">
        <div className="container">
          <div className="three-div-library">
            <div className="lib-bold">
              <h1>Library</h1>
            </div>

          <div   className="lib-bold-header" >
          <div className="Lib-underline">
              <h3> Library </h3>
            </div>
            <div className="edit-image">
              <h1 className="edit-span-with-icon">
             
                <FiEdit /> <span>Edit </span>
              </h1>
            </div>
          </div>
          </div>

          <div className="library-image">
            <img className="lib-image-1" src={LibraryImage} alt="LibraryImage" />
            <h3> You have not purchased any Stories yet.</h3>
          </div>
        </div>
      </div>
    </>
  );
}
export default Library;
