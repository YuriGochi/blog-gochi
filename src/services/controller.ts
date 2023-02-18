import Posts from "../services/model/post";

export async function getPosts(req: any, res: any) {
  try {
    const posts = await Posts.find({});
    if (!posts) return res.status(404).json({ error: "Data not Found" });
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
}

export async function getPost(req: any, res: any) {
  try {
    const { postId } = req.query;
    if (postId) {
      const post = await Posts.findById(postId);
      res.status(200).json(post);
    }
  } catch (error) {
    res.status(404).json({ error: "Cannot get the Post" });
  }
}

export async function postPosts(req: any, res: any) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form Data Not Provided" });
    Posts.create(formData, function (err: any, data: any) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

export async function putPost(req: any, res: any) {
  try {
    const { postId } = req.query;
    const formData = req.body;

    if (postId && formData) {
      await Posts.findByIdAndUpdate(postId, formData);
      res.status(200).json(formData);
    }
    res.status(404).json({ error: "Post was not Updated" });
  } catch (error) {
    res.status(404).json({ error: "Error While Updating the Data...!" });
  }
}

export async function deletePost(req: any, res: any) {
  try {
    const { postId } = req.query;
    if (postId) {
      const post = await Posts.findByIdAndDelete(postId);
      return res.status(200).json({ deleted: postId });
    }

    res.status(404).json({ error: "Post Not Deleted" });
  } catch (error) {
    res.status(404).json({ error: "Error While Deleting the Data...!" });
  }
}
