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
    console.log(formData);
    const res = await api.postFormData("/post", formData);
    console.log(res);
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
