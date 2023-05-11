import React from "react";

import { Avatar, Card} from "antd";
import Link from "next/link";
import { Post } from "@/utils/types";

const { Meta } = Card;

type Props = {
  posts: Post[]; //👈 children prop typr
};

const CardPost: React.FC<Props> = (posts: Props) => {
  return (
    <>
      {posts?.posts?.map((post: Post, index: number) => (
        <Link key={index} href={`/posts/view/${post.id}`}>
          <Card
            key={index}
            style={{ width: 300, margin: "10px 10px" }}
            type="inner"
            cover={<img alt="example" src={post.coverImg || ''} style={{
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
              avatar={<Avatar src={post.author.userImg} />}
              title={post?.title}
              description={post?.subTitle}
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
