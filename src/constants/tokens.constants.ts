const getAccessToken = (): string | null => {
  return localStorage.getItem("access-token");
};

const getRefreshToken = (): string | null => {
  return localStorage.getItem("refresh-token");
};

const setAccessToken = (accessToken: string): void => {
  localStorage.setItem("access-token", "Bearer " + accessToken);
};

const setRefreshToken = (refreshToken: string): void => {
  localStorage.setItem("refresh-token", "Bearer " + refreshToken);
};

const resetTokens = (): void => {
  localStorage.removeItem("access-token");
  localStorage.removeItem("refresh-token");
};

const tokens = {
  "access-token": getAccessToken(),
  "refresh-token": getRefreshToken(),
};

export {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
  resetTokens,
  tokens,
};
