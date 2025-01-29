import { create } from 'zustand'

import { api } from '@/config/axios'
import { DocumentConverterRequest, ImageResizeRequest } from '@/models/file'

interface FileState {
  convertFile(request: DocumentConverterRequest): Promise<File>
  resizeImage(request: ImageResizeRequest): Promise<File>
}

export const useFileStore = create<FileState>(() => ({
  convertFile: async (request: DocumentConverterRequest): Promise<File> => {
    return new Promise(async (resolve, reject) => {
      try {
        const form_data = new FormData()
        const query_params = new URLSearchParams()
        query_params.append('expected_type', request.expected_type)
        form_data.append('file', request.file[0])
        const response = await api.post('/file/converter', form_data, {
          responseType: 'blob',
          params: query_params
        })
        const blob = new Blob([response.data], { type: `application/${request.expected_type}` })
        const file = new File([blob], request.file[0].name.replace(/\.[^/.]+$/, "") + `.${request.expected_type}`, { type: `application/${request.expected_type}` })
        resolve(file)
      } catch (error) {
        reject(new Error("Failed to convert file"))
      }
    })
  },

  resizeImage: async (request: ImageResizeRequest): Promise<File> => {
    return new Promise(async (resolve, reject) => {
      try {
        const form_data = new FormData()
        const query_params = new URLSearchParams()
        query_params.append('width', request.width.toString())
        query_params.append('height', request.height.toString())
        form_data.append('image', request.image[0])
        const response = await api.post('/file/image/resizer', form_data, {
          responseType: 'blob',
          params: query_params
        })
        const blob = new Blob([response.data], { type: `application/jpeg` })
        const file = new File([blob], request.image[0].name.replace(/\.[^/.]+$/, "") + `.jpeg`, { type: `application/jpeg` })
        resolve(file)
      } catch (error) {
        reject(new Error("Failed to download file"))
      }
    })
  }
}))