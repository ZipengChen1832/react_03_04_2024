import React, { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Post({ id }: { id: number }) {
  const [post, setPost] = useState<Post | undefined>();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div>
      <h1>Post {id}</h1>
      <div>
        <div>Title: {post?.title}</div>
        <div>Body: {post?.body}</div>
      </div>
    </div>
  );
}
