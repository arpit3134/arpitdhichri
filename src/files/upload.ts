import { FileService } from './fileService'

export async function uploadFile(file: File): Promise<string> {
  const service = new FileService()
  return service.uploadFile(file)
}

export function validateFile(file: File, allowedTypes: string[]): boolean {
  const extension = file.name.split('.').pop()?.toLowerCase()
  return allowedTypes.includes(extension || '')
}