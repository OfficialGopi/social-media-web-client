import { api } from "../utils/ApiConfig";

const createPost = async ({
  caption,
  files,
}: {
  caption: string;
  files: File[];
}) => {
  try {
    const formData = new FormData();
    formData.append("caption", caption);
    for (const file of files) {
      formData.append("attachments", file);
    }
    const res = await api.postFormData("/post", formData);
    return res;
  } catch (error) {
    return error;
  }
};

const getMyPosts = async () => {
  try {
    const res = await api.get("/post");
    return res;
  } catch (error) {
    return error;
  }
};

export { createPost, getMyPosts };
