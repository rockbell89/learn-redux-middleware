import React from "react";

export const Sample = ({ post, users, loadingUsers, loadingPost }) => {
  return (
    <div>
      <div>{String(loadingPost)}</div>
      {loadingPost && "로딩중..."}
      {!loadingPost && post && (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </>
      )}
      <ul>
        <div>{String(loadingUsers)}</div>
        {loadingUsers && "로딩중..."}
        {!loadingUsers &&
          users &&
          users.map((user) => (
            <li key={user.id}>
              <h3>{user.username}</h3>
              <p>{user.email}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
