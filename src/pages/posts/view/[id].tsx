import React from "react";
import Main from "../../../components/Main";
import { useRouter } from 'next/router'
import { getPost } from "@/lib/helpers";
import { useQuery } from "react-query";
import { Col, Row, Image, Space } from "antd";

const ViewPost: React.FC = () => {

  const { query } = useRouter()

  const { isLoading, isError, data, error } = useQuery(['post', query.id], () => getPost(query.id))

  if (isLoading) return <div>Employee is Loading...</div>
  // if (isError) return <div>Got Error {error}</div>

  return (
    <Main>
      <Row justify="space-around" >
        <Col span={4}>
          <Space direction="vertical">
            <img
              src={data?.author_img}
              alt="Imagem do post"
              style={{ borderRadius: "100%" }}
              />
            <h1>{data?.author}</h1>
            <h1>{data?.date}</h1>
          </Space>
        </Col>
        <Col span={14}>
          <h2>{data?.title}</h2>
          <h1>{data?.sub_title}</h1>
          <p>{data?.description}</p>
        </Col>
      </Row>
    </Main>
  );
};

export default ViewPost;
