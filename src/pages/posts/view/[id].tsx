import React from "react";
import Main from "../../../components/Main";
import { getPost } from "@/lib/helpers";
import { Col, Row} from "antd";
import styles from "./styles.module.scss"
import { Post } from "@/utils/types";

const ViewPost: React.FC<Post> = (post) => {
  const createdAtDate = new Date(post.createdAt);
  if (isNaN(createdAtDate.getTime())) {
    return <div>Invalid date</div>;
  }
  const formattedDate = createdAtDate.toLocaleDateString();
  console.log(post)

  return (
    <Main>
      <div style={{ background: "#001529",}}>
      <Row>
        <Col span={20} offset={2}>
          <div className={styles.headerPost}>
            <img
              src={post.author.userImg}
              alt="Imagem de perfil"
              className={styles.headerImg}
            />
              <h1 className={styles.headerTitle}>{post.author.name}</h1>
              <h1 className={styles.headerSubtitle}>{formattedDate}</h1>
            </div>
        </Col>
      </Row>
      <Row justify="space-around">
      <Col span={22} className={styles.bodyPost}>
          <h1 className={styles.bodyPost__title}>{post.title}</h1>
          <h1 className={styles.bodyPost__subTitle}>{post.subTitle}</h1>
          <img
              src={post.coverImg}
              alt="Imagem do post"
              className={styles.bodyPost__img}
            />
          <p className={styles.bodyPost__description}>{post.body}</p>
        </Col>
      </Row>
      </div>
    </Main>
      
  );
};

export async function getServerSideProps({ params }:any) {

  const { id } = params

  const post = await getPost(id)

  return {
    props: {
       ...post,
    }
  }
}

export default ViewPost;
