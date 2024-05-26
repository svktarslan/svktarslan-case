import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const instance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: "/api",
    timeout: 60000,
  });

  instance.interceptors.request.use(
    async function (config: InternalAxiosRequestConfig<unknown>) {
      config.headers = {
        Accept: "application/json",
        "Content-type": "application/json; charset=UTF-8",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      } as never;

      config.params = {
        ...config.params,
        apiKey: import.meta.env.VITE_NEWS_API_KEY,
      };
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    async function (response): Promise<AxiosResponse> {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return instance;
};

export const api = instance();
