import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const url = "https://newsapi.org/v2/";
const instance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: url,
    timeout: 60000,
  });

  instance.interceptors.request.use(
    async function (config: InternalAxiosRequestConfig<unknown>) {
      config.headers = {
        Accept: "application/json",
        "content-type": "application/json",
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
