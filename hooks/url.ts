import { create } from "zustand";

import { api } from "@/config/axios";

interface URLState {
  shortened_url?: string;
  shortenURL(url: string): Promise<string>;
  setShortenedURL: (url: string) => void;
}

export const useURLStore = create<URLState>((set) => ({
  shortenURL: async (url: string): Promise<string> => {
    return new Promise(async (resolve, reject) => {
      const response = await api.post("/shortener-url", { url });
      if (response.status !== 200) {
        reject(new Error("Failed to shorten URL"));
      } else {
        resolve(response.data)
      }
    })
  },
  setShortenedURL: (url: string) => {
    set({ shortened_url: url });
  },
}));
