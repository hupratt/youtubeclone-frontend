import React from "react";
import LikedVideos from "./LikedVideos";
import History from "./History";
import { useSelector } from "react-redux";
import NoResults from "../components/NoResults";

const Library = () => {
  const { token } = useSelector((state) => state.user.data);
  if (token) {
    return (
      <>
        <History nopad={true} />
        <LikedVideos />
      </>
    );
  } else {
    return (
      <NoResults
        title="Page not found"
        text="The page you are looking for is not found or it may have been removed"
      />
    );
  }
};

export default Library;
