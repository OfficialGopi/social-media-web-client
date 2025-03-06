import {
  setAccessToken,
  setRefreshToken,
  tokens,
} from "../constants/tokens.constants";
import { api } from "../utils/ApiConfig";

const autoLogin = async () => {
  try {
    const res = await api.post<{
      tokens: {
        accessToken: string;
        refreshToken: string;
      };
      info: any;
    }>("/user/auto-login", {}, tokens as HeadersInit);
    if (res.success) {
      setAccessToken(res.data.tokens.accessToken);
      setRefreshToken(res.data.tokens.refreshToken);
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
    const res = await api.post<{
      tokens: {
        accessToken: string;
        refreshToken: string;
      };
      info: any;
    }>("/user/login", {
      userAccessDetails,
      password,
    });
    setAccessToken(res.data.tokens.accessToken);
    setRefreshToken(res.data.tokens.refreshToken);

    return res;
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
