import React from "react";

const CreatePost = () => {
  return (
    <form className="form">
      <h2 className="text-center">Create Post</h2>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Title
        </label>
        <input
          type="Text"
          className="form-control input"
        />
        {/* <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div> */}
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Decpction
        </label>
        <input
          type="text"
          className="form-control input"
        />
      </div>
      <button type="submit" className="btn btn-sm btn-primary">
        Add
      </button>
    </form>
  );
};

export default CreatePost;
