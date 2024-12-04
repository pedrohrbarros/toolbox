import { api } from "@/config/axios"
import { SecretRequest } from "@/models/secret"
import { create } from "zustand"

interface SecretState {
  getSecret: (request: SecretRequest) => Promise<string>
}

export const useSecretStore = create<SecretState>(() => ({
  getSecret: async (request: SecretRequest) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await api.post("/secret-generator", request)
        resolve(response.data)
      } catch (error) {
        console.error(error)
        reject(new Error("Failed to generate secret"))
      }
    })
  }
}))