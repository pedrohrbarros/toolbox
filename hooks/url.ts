import { create } from "zustand";

import { api } from "@/config/axios";

interface URLState {
  shortenURL(url: string): Promise<string>;
}

export const useURLStore = create<URLState>(() => ({
  shortenURL: async (url: string): Promise<string> => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await api.post("/shortener-url", { url });
        resolve(response.data)
      } catch (error) {
        reject(new Error("Failed to shorten URL"));
      }
    })
  },
}));
