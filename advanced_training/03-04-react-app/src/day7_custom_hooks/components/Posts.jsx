import React from "react";
import useFetch from "../hooks/useFetch";

const POSTS_API = "https://jsonplaceholder.typicode.com/posts";

export default function Posts() {
  const { data: posts, isLoading, error } = useFetch(POSTS_API);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error...</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {posts?.map((post) => {
          const { id, title, body } = post;
          return (
            <React.Fragment key={id}>
              <h3>
                {id}. {title}
              </h3>
              <p>{body}</p>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
