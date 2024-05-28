import Image from "next/image";
import React from "react";

// Component to display a single post based on the slug
function Post({ post }) {
  return (
    <>
      <h1 className="text-center text-4xl pt-8 capitalize font-bold">post</h1>
      <div className=" container flex flex-col p-5 lg:px-48">
        <div className=" border-1 md:rounded-lg p-8 md:m-12 bg-gray-100">
          <h1 className="font-bold mb-8 md:text-2xl">
            Title:
            {post.id}.{post.title}
          </h1>
          <Image
            src="https://images.unsplash.com/photo-1506157786151-b8491531f063"
            alt="image"
            className="mb-8"
          ></Image>

          <p>{post.body}</p>
        </div>
      </div>
    </>
  );
}
export default Post;

// Generate static paths based on the slugs
export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  const paths = data.map((post) => {
    return {
      // created an array of 100 object where each object contains are params key and the post ed ranges from 1 to 100
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    // using eslint shorthand
    paths,
    fallback: false, // All paths are pre-rendered
  };
}

// Fetch post data based on the context contains a key call parama
export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    // use string interpolation to add the post id
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  const data = await response.json();

  // Return an object which must contain a props key and in turn return an object
  return {
    props: {
      post: data,
    },
  };
}
