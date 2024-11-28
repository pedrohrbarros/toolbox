import { create } from 'zustand'

import { api } from '@/config/axios'

interface DocumentState {
  convertWordToPDF(file: File): Promise<any>
}

export const useDocumentStore = create<DocumentState>(() => ({
  convertWordToPDF: async (file: File): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        const form_data = new FormData()
        form_data.append('file', file)
        const response = await api.post('/convert/', form_data, {
          responseType: 'blob'
        })
        const pdf_blob = new Blob([response.data], { type: 'application/pdf' })
        const pdf = new File([pdf_blob], file.name.replace(/\.[^/.]+$/, "") + '.pdf', { type: 'application/pdf' })
        resolve(pdf)
      } catch (error) {
        reject(new Error("Failed to convert file"))
      }
    })
  }
}))