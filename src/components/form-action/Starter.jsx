import React, { useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const addPosts = (newPosts) => {
    setPosts((prevPosts) => [...prevPosts, newPosts]);
  };
  return (
    <div>
      <PostForm addPosts={addPosts} />

      {posts.map((post, idx) => (
        <div key={idx} className="bg-blue-500 mt-10 w-1/2 text-white">
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

const PostForm = ({ addPosts }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    await new Promise((resolve) => {
      resolve();
    }, 1000);

    addPosts({ title, body });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="ml-5 flex flex-col justify-center"
      >
        <input
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          type="text"
          name="title"
          placeholder="title"
          className="border border-gray-400 w-2/5"
        />
        <input
          className="border border-gray-400 w-2/5 mt-3"
          onChange={(e) => setBody(e.target.value)}
          id="body"
          type="text"
          name="body"
          placeholder="body"
        />
        <button
          className="bg-blue-500 w-1/4 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-400"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Posts;
