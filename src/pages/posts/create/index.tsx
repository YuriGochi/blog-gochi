import React, { useReducer, useState } from "react";
import { Button, Form, Input, InputNumber } from "antd";
import Main from "../../../components/Main";
import { Post } from "@/utils/types";
import { useMutation, useQueryClient } from "react-query";
import { useAddPost } from "@/lib/helpers";

const CreatePost: React.FC = () => {
  const [form] = Form.useForm();

  const {mutate} = useAddPost()

  const onFinish = (values: Post) => {
    const post = {
      ...values
    };
    mutate(post)
    console.log(post)
  };


  return (
    <>
    {/* @ts-ignore */}
    <Main>
      <Form
        name="userForm"
        form={form}
        colon={false}
        requiredMark="optional"
        labelAlign="left"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
      >
        <Form.Item label="title" name="title">
          <Input
            onChange={(e) => {
              const value = e.target.value;
            }}
          />
        </Form.Item>
        <Form.Item label="author" name="author">
          <Input
            onChange={(e) => {
              const value = e.target.value;
            }}
          />
        </Form.Item>
        <Form.Item label="cover_img" name="cover_img">
          <Input
            onChange={(e) => {
              const value = e.target.value;
            }}
          />
        </Form.Item>
        <Form.Item label="author_img" name="author_img">
          <Input
            onChange={(e) => {
              const value = e.target.value;
            }}
          />
        </Form.Item>
        <Form.Item label="date" name="date">
          <Input
            onChange={(e) => {
              const value = e.target.value;
            }}
          />
        </Form.Item>
        <Form.Item label="sub_title" name="sub_title">
          <Input
            onChange={(e) => {
              const value = e.target.value;
            }}
          />
        </Form.Item>
        <Form.Item label="tags" name="tags">
          <Input
            onChange={(e) => {
              const value = e.target.value;
            }}
          />
        </Form.Item>
        <Form.Item label="description" name="description">
          <Input
            onChange={(e) => {
              const value = e.target.value;
            }}
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 16,
          }}
        >
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </Main>
    </>
    
  );
};

export default CreatePost;
