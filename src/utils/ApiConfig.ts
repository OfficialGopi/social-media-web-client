import { CustomFetchApi } from "fetch-api-gopi";
import { SERVER_BASE_URL } from "../constants/env.constants";

const api = new CustomFetchApi(SERVER_BASE_URL);

export { api };
