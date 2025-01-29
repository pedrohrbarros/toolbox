export interface DocumentConverterRequest {
  file: FileList
  expected_type: 'pdf' | 'docx' | 'jpeg'
}

export interface ImageResizeRequest {
  image: FileList
  width: number
  height: number
}