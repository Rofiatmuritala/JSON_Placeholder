// how to statically generate

import Link from "next/link";
import React from "react";

export default function PostLists({ posts }) {
  return (
    <>
      <h1 className="text-center text-4xl capitalize font-bold mt-2">posts</h1>
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center"
          >
            <div className=" flex flex-col border-1 rounded-lg p-2 m-4 justify-center items-center md:m-12 bg-gray-100">
              {/* when we have a child that is not an anchor tag we need to pass passHref*/}
              <Link href={`posts/${post.id}`} passHref>
                <h1 className="mb-4 font-bold text-sky-500">
                  <span className="font-bold">Title:</span> {post.title}
                </h1>
                <p>{post.body}</p>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
