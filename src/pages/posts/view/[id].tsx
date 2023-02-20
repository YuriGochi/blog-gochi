import React from "react";
import Main from "../../../components/Main";
import { getPost } from "@/lib/helpers";
import { Col, Row, Space } from "antd";

const ViewPost: React.FC = (post:any) => {
  const postUnique = post?.post
  return (
    <Main>
      <Row justify="space-around" >
        <Col span={4}>
          <Space direction="vertical">
            <img
              src={postUnique.author_img}
              alt="Imagem do post"
              style={{ borderRadius: "100%" }}
              />
            <h1>{postUnique.author}</h1>
            <h1>{postUnique.date}</h1>
          </Space>
        </Col>
        <Col span={14}>
          <h2>{postUnique.title}</h2>
          <h1>{postUnique.sub_title}</h1>
          <p>{postUnique.description}</p>
        </Col>
      </Row>
    </Main>
  );
};

export async function getServerSideProps({ params }:any) {

  const { id } = params

  const post = await getPost(id)

  return {
    props: {post:post},
  }
}

export default ViewPost;
