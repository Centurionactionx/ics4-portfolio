"use client";
import { useEffect, useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
}

export default function Blogposts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState(""); 
  const [description, setDescription] = useState(""); 

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/blog")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  const addSamplePost = async () => {
    if (!title || !description) {
      setMessage("Please enter both title and description");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:5000/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          content: description,
          author: "Joseph", // maybe change later
        }),
      });

      if (!res.ok) throw new Error("Failed to create post");

      const newPost = await res.json();
      setPosts([...posts, newPost]); 
      setTitle(""); 
      setDescription("");
      setMessage(`Post added`);
    } catch (err) {
      console.error(err);
      setMessage("Error adding post");
    }
  };

  return (
    <main className="min-h-screen bg-black pt-16 text-white flex flex-col items-center">
      <h1 className="text-[50px] font-bold pt-3 pb-3">Blog</h1>

      {/* maybe edit the css later */}
      <div className="mb-4 flex flex-col items-center w-full max-w-md">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-2 p-2 rounded w-full text-white placeholder-white border border-white focus:outline-white focus:border-white caret-white"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mb-2 p-2 rounded w-full text-white placeholder-white border border-white focus:outline-white focus:border-white caret-white resize-none h-36"
        />
        <button
          onClick={addSamplePost}
          className="bg-gray-600 px-4 py-2 rounded border border-gray-700 hover:bg-gray-700 transition cursor-pointer"
        >
          Add Post
        </button>
        {message && <p className="mt-2 text-white">{message}</p>}
      </div>

      <div className="w-full max-w-3xl space-y-6 p-4">
        {posts.length === 0 ? (
          <p>No posts yet</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="border border-gray-700 rounded-2xl p-6 hover:bg-gray-900 transition"
            >
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-gray-300 mt-2">{post.content}</p>
              <p className="text-sm text-gray-500 mt-3">By {post.author}</p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
