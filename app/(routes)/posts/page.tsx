"use client";

import React, { useEffect, useState } from "react";

interface Post {
  id: string;
  type_content: string;
  title: string;
  content: string;
  author: string;
  year: string;
}

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.jsondataai.com/api/xZIRRCj");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Ada masalah saat mengambil data:", error);
      }
    };
    fetchData();
  }, []); // Menambahkan array dependensi kosong untuk menjalankan ini sekali saja

  if (!posts) {
    return <div>Loading...</div>;
  }

  // Disini sengaja menggunakan css murni
  return (
    <div className="card-post">
      {posts.map((post) => (
        <ul key={post.id}>
          <li>{post.author}</li>
        </ul>
      ))}
    </div>
  );
};

export default PostsPage;
