import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Sample } from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";

const SampleContainers = ({
  users,
  post,
  getPost,
  getUsers,
  loadingUsers,
  loadingPost,
}) => {
  useEffect(() => {
    getPost(1);
    getUsers();
  }, [getPost, getUsers]);

  return (
    <Sample
      users={users}
      post={post}
      loadingUsers={loadingUsers}
      loadingPost={loadingPost}
    ></Sample>
  );
};

export default connect(
  // mapStateToProps
  ({ sample }) => ({
    users: sample.users,
    post: sample.post,
    loadingUsers: sample.loading.GET_USERS,
    loadingPost: sample.loading.GET_POST,
  }),
  // mapDispatchToProps
  {
    getPost,
    getUsers,
  }
)(SampleContainers);
