import { api } from "@/config/axios"
import { GenerateSecretRequest } from "@/models/secret"
import { create } from "zustand"

interface SecretState {
  getRandomSecret: (request: GenerateSecretRequest) => Promise<string>
}

export const useSecretStore = create<SecretState>(() => ({
  getRandomSecret: async (request: GenerateSecretRequest) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await api.post("/secret/generator", request)
        resolve(response.data)
      } catch (error) {
        console.error(error)
        reject(new Error("Failed to generate secret"))
      }
    })
  }
}))