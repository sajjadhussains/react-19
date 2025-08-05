import React, { useRef, useState } from "react";

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
  const formRef = useRef();
  const formAction = async (formData) => {
    await new Promise((resolve) => {
      resolve();
    }, 1000);

    addPosts({ title: formData.get("title"), body: formData.get("body") });
    formRef.current.reset();
  };
  return (
    <div>
      <form
        ref={formRef}
        action={formAction}
        className="ml-5 flex flex-col justify-center"
      >
        <input
          id="title"
          type="text"
          name="title"
          placeholder="title"
          className="border border-gray-400 w-2/5"
        />
        <input
          className="border border-gray-400 w-2/5 mt-3"
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
