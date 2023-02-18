import React, { useEffect, useState } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Col, Row } from "antd";
import { Data, Post } from "@/utils/types";
import Link from "next/link";
import Image from "next/image";

const { Meta } = Card;

type Props = {
  posts: Post[]; //👈 children prop typr
};

const CardPost: React.FC<Props> = (posts: Props) => {
  return (
    <>
      {posts?.posts?.map((post: Post, index: number) => (
        <Link key={index} href={`/posts/view/${post._id}`}>
          <Card
            key={index}
            style={{ width: 300, margin: "10px 10px" }}
            type="inner"
            cover={<img alt="example" src={post.cover_img || ''} style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }} />}
          // actions={[
          //   <SettingOutlined key="setting" />,
          //   <EditOutlined key="edit" />,
          //   <EllipsisOutlined key="ellipsis" />,
          // ]}
          >
            <Meta
              key={index}
              avatar={<Avatar src={post.author_img} />}
              title={post?.title}
              description={post?.sub_title}
              style={{
                width: "100%",
                height: "100px",
                objectFit: "cover",
              }}
            />
          </Card>
        </Link>

      ))}
    </>
  );
};

export default CardPost;
