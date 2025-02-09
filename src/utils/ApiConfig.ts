import { SERVER_BASE_URL } from "../constants/env.constants";

type ContentType = "application/json" | "multipart/form-data";

class ApiConfig {
  private baseUrl: string;
  private version: string;

  constructor(baseUrl: string, version: "v1") {
    this.baseUrl = baseUrl;
    this.version = version;
  }

  async get(
    url: string,
    ContentType: ContentType = "application/json",
    body?:
      | {
          [key: string]: any;
        }
      | null
      | undefined,
    headers?: HeadersInit | undefined
  ) {
    try {
      const res = await fetch(`${this.baseUrl}/api/${this.version}${url}`, {
        method: "GET",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": ContentType,
          ...headers,
          "access-token": localStorage.getItem("access-token")!,
          "refresh-token": localStorage.getItem("refresh-token")!,
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async post(
    url: string,
    ContentType: ContentType = "application/json",
    body?:
      | {
          [key: string]: any;
        }
      | null
      | undefined,
    headers?: HeadersInit | undefined
  ) {
    try {
      const res = await fetch(`${this.baseUrl}/api/${this.version}${url}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": ContentType,
          ...headers,
          "access-token": localStorage.getItem("access-token")!,
          "refresh-token": localStorage.getItem("refresh-token")!,
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async put(
    url: string,
    ContentType: ContentType = "application/json",
    body?:
      | {
          [key: string]: any;
        }
      | null
      | undefined,
    headers?: HeadersInit | undefined
  ) {
    try {
      const res = await fetch(`${this.baseUrl}/api/${this.version}${url}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": ContentType,
          ...headers,
          "access-token": localStorage.getItem("access-token")!,
          "refresh-token": localStorage.getItem("refresh-token")!,
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async patch(
    url: string,
    ContentType: ContentType = "application/json",
    body?:
      | {
          [key: string]: any;
        }
      | null
      | undefined,
    headers?: HeadersInit | undefined
  ) {
    try {
      const res = await fetch(`${this.baseUrl}/api/${this.version}${url}`, {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": ContentType,
          ...headers,
          "access-token": localStorage.getItem("access-token")!,
          "refresh-token": localStorage.getItem("refresh-token")!,
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async delete(
    url: string,
    ContentType: ContentType = "application/json",
    body?:
      | {
          [key: string]: any;
        }
      | null
      | undefined,
    headers?: HeadersInit | undefined
  ) {
    try {
      const res = await fetch(`${this.baseUrl}/api/${this.version}${url}`, {
        method: "DELETE",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": ContentType,
          ...headers,
          "access-token": localStorage.getItem("access-token")!,
          "refresh-token": localStorage.getItem("refresh-token")!,
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async postFormData(
    url: string,
    body?: FormData,
    headers?: HeadersInit | undefined
  ) {
    try {
      const res = await fetch(`${this.baseUrl}/api/${this.version}${url}`, {
        method: "POST",
        body: body,
        headers: {
          ...headers,
          "access-token": localStorage.getItem("access-token")!,
          "refresh-token": localStorage.getItem("refresh-token")!,
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
}

const api = new ApiConfig(SERVER_BASE_URL, "v1");

export { api };
