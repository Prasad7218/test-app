import React from "react";
import { useGetPostsQuery } from "../redux/apiSlice";

const About = () => {
  const { data, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching posts</p>;

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default About;
