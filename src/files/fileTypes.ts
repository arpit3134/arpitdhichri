export interface UploadedFile {
  id: string
  name: string
  size: number
  type: string
  url: string
  uploadedAt: Date
}

export type AllowedFileType = 'image' | 'document' | 'video'

export const ALLOWED_FILE_TYPES: Record<AllowedFileType, string[]> = {
  image: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
  document: ['pdf', 'doc', 'docx', 'txt', 'md'],
  video: ['mp4', 'webm', 'mov'],
}