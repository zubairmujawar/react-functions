import React from "react";

const CreatePost = () => {
  return (
    <form className="form">
      <h2 className="text-center">Create Post</h2>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Title
        </label>
        <input
          type="Text"
          className="form-control input"
          placeholder="title..."
        />
        {/* <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div> */}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
        Deception
        </label>
        <input
          type="text"
          className="form-control input"
          placeholder="deception..."
        />
      </div>
      <button type="submit" className="btn btn-sm btn-primary">
        Add
      </button>
    </form>
  );
};

export default CreatePost;
