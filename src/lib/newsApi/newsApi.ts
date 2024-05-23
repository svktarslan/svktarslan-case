import { api } from "../base";

export default {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async getSource(category?: string) {
    return api.get("sources", { params: { language: "en", category } });
  },
  async getNews(params: { sources: string; sortBy: string }) {
    return api.get("top-headlines", { params });
  },
};
