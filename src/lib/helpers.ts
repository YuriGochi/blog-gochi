import { Post } from "@/utils/types";
import { useMutation } from "react-query";

const BASE_URL = process.env.REACT_APP_API_URL

export const getPosts = async() => {
    const response = await fetch(`${BASE_URL}/posts`)
    const json = await response.json()
    return json;
}
export const getPost = async(id:string) => {
    const response = await fetch(`${BASE_URL}/post/${id}`);
    const json = response.json();
    return json;
}

export const addPost = async (post:Post) => {
    const Options = {
        method:'POST',
        headers: {'Content-type':"application/json"},
        body:JSON.stringify(post)
    }
    const response = await fetch(`${BASE_URL}/posts`, Options)
    const json = await response.json()

    return json;
}

export const useAddPost = () => {
    return useMutation(addPost)
}