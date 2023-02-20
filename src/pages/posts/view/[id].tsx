import React from "react";
import Main from "../../../components/Main";
import { getPost } from "@/lib/helpers";
import { Col, Row, Space, theme } from "antd";
import styles from "./styles.module.scss"


const ViewPost: React.FC = (post:any) => {
  const postUnique = post?.post
  return (
    <Main>
      <div style={{ background: "#001529",}}>
      <Row>
        <Col span={20} offset={2}>
          <div className={styles.headerPost}>
            <img
              src={postUnique.author_img}
              alt="Imagem de perfil"
              className={styles.headerImg}
            />
              <h1 className={styles.headerTitle}>{postUnique.author}</h1>
              {/* <h1 className={styles.headerSubitle}>{postUnique.date}</h1> */}
            </div>
        </Col>
      </Row>
      <Row justify="space-around">
      <Col span={22} className={styles.bodyPost}>
          <h1 className={styles.bodyPost__title}>{postUnique.title}</h1>
          <h1 className={styles.bodyPost__subTitle}>{postUnique.sub_title}</h1>
          <img
              src={postUnique.cover_img}
              alt="Imagem do post"
              className={styles.bodyPost__img}
            />
          <p className={styles.bodyPost__description}>{postUnique.description}</p>
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
    props: {post:post},
  }
}

export default ViewPost;
