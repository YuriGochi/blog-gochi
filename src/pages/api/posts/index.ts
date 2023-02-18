// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  deletePost,
  getPosts,
  postPosts,
  putPost,
} from "@/services/controller";
// import dbConnection from "@/services/dbConnection";
import connectMongo from "../../../services/dbConnection";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Erorr in the Connection" })
  );

  const { method } = req;

  switch (method) {
    case "GET":
      getPosts(req, res);
      break;
    case "POST":
      postPosts(req, res);
      break;
    case "PUT":
      putPost(req, res);
      break;
    case "DELETE":
      deletePost(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

//Vídeo Youtube https://www.youtube.com/watch?v=RKDfKbLJkZQ
