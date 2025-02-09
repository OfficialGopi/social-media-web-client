import { api } from "../utils/ApiConfig";

const autoLogin = async () => {
  try {
    const res = await api.post("/user/auto-login", "application/json");
    if (res.success) {
      localStorage.setItem(
        "access-token",
        "Bearer " + res.data.tokens.accessToken
      );
      localStorage.setItem(
        "refresh-token",
        "Bearer " + res.data.tokens.refreshToken
      );
    }
    return res;
  } catch (error) {
    return error;
  }
};

const loginWithUserDetailsAndPassword = async ({
  userAccessDetails,
  password,
}: {
  userAccessDetails: string;
  password: string;
}) => {
  try {
    const res = await api.post("/user/login", "application/json", {
      userAccessDetails,
      password,
    });
    localStorage.setItem(
      "access-token",
      "Bearer " + res.data.tokens.accessToken
    );
    localStorage.setItem(
      "refresh-token",
      "Bearer " + res.data.tokens.refreshToken
    );
  } catch (error) {
    return error;
  }
};

const getUserDataByUsername = async (username: string | undefined) => {
  try {
    if (!username) {
      throw new Error("Username must be provided");
    }
    const res = await api.post(`/user/get-user-data/${username}`);
    return res;
  } catch (error) {
    return error;
  }
};

export { loginWithUserDetailsAndPassword, autoLogin, getUserDataByUsername };
