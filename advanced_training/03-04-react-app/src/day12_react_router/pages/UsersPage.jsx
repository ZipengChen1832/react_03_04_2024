import React, { useEffect, useState } from "react";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

export default function UserPage() {
  const match = useRouteMatch();

  return (
    <div>
      <h2>Users Page</h2>
      <ul>
        <li>
          <Link to={`${match.url}/info`}>info</Link>
        </li>
        <li>
          <Link to={`${match.url}/setting`}>setting</Link>
        </li>
        <li>
          <Link to={`${match.url}/posts`}>posts</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/info`}>
          <UserInfoPage />
        </Route>
        <Route path={`${match.path}/setting`}>
          <UserSettingPage />
        </Route>
        <Route path={`${match.path}/posts`} exact>
          <UserPostsPage />
        </Route>
        <Route path={`${match.path}/posts/:postId`}>
          <UserPostPage />
        </Route>
      </Switch>
    </div>
  );
}

function UserPostsPage() {
  const [postIds, setPostIds] = useState([1, 2, 3, 4, 5, 6, 7]);
  const match = useRouteMatch();
  return (
    <div>
      <h3>Posts</h3>
      <ul>
        {postIds.map((id) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>post #{id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UserPostPage() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  return (
    <div>
      <h3>User Post #{postId}</h3>
      <div>
        <div>Title: {post.title}</div>
      </div>
      <Link to={"/users/posts"}>Go to posts</Link>
    </div>
  );
}

function UserInfoPage() {
  return (
    <div>
      <div>User info</div>
    </div>
  );
}

function UserSettingPage() {
  return (
    <div>
      <div>User Settings</div>
    </div>
  );
}
