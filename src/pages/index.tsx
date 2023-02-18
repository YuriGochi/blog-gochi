import React from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

const Home: NextPage = () => {
  const { replace, isReady } = useRouter();
  if (isReady) replace("/posts");

  return <></>
};

export default Home;
