// API service for tools
export const toolAPI = {
  getAll: async () => {
    // Mock API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Cursor AI', category: 'Development' },
          { id: 2, name: 'Vercel', category: 'Hosting' }
        ])
      }, 500)
    })
  },
  
  getById: async (id: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id, name: 'Tool Name', category: 'Development' })
      }, 500)
    })
  },
  
  search: async (query: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([])
      }, 500)
    })
  }
}