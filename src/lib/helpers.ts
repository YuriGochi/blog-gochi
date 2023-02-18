import { Post } from "@/utils/types";
import { useMutation } from "react-query";

const BASE_URL = "http://localhost:3000"

export const getPosts = async() => {
    const response = await fetch(`${BASE_URL}/api/posts`)
    const json = await response.json()
    return json;
}
export const getPost = async(id:any) => {
    const response = await fetch(`${BASE_URL}/api/posts/${id}`)
    const json = await response.json()
    return json;
}

export const addPost = async (post:Post) => {
    const Options = {
        method:'POST',
        headers: {'Content-type':"application/json"},
        body:JSON.stringify(post)
    }
    const response = await fetch(`${BASE_URL}/api/posts`, Options)
    const json = await response.json()

    return json;
}

export const useAddPost = () => {
    return useMutation(addPost)
}