import { Data, Post } from "@/utils/types";
import CardPost from "../../components/Card";
import Main from "../../components/Main";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { getPosts } from "@/lib/helpers";

type Props = {
  posts: Post[]; 
};

const Posts: NextPage<Props> = (props) => {
  console.log("props",props)
  return (
    <>
      <Main>
        <div
          style={{
            display: "inline-flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <CardPost posts={props.posts} />
        </div>
      </Main>
    </>
  )
};

export async function getServerSideProps({params}:any) {
  const posts = await getPosts()

  return {
    props: {posts},
  }
}

export default Posts;



