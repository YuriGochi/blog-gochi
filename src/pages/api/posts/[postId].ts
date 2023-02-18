import { getPost } from "@/services/controller";
import connectMongo from "@/services/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Erorr in the Connection" })
  );

  const { method } = req;

  switch (method) {
    case "GET":
      getPost(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
