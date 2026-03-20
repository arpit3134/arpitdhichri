import { Tool } from '@/types'

class ToolService {
  private tools: Tool[] = []
  
  async loadTools() {
    // In production, this would fetch from an API
    const response = await fetch('/api/tools')
    this.tools = await response.json()
    return this.tools
  }
  
  getTools(): Tool[] {
    return this.tools
  }
  
  getToolById(id: string): Tool | undefined {
    return this.tools.find(tool => tool.id === id)
  }
  
  getToolsByCategory(category: string): Tool[] {
    return this.tools.filter(tool => tool.category === category)
  }
  
  searchTools(query: string): Tool[] {
    const lowerQuery = query.toLowerCase()
    return this.tools.filter(tool =>
      tool.name.toLowerCase().includes(lowerQuery) ||
      tool.description.toLowerCase().includes(lowerQuery) ||
      tool.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    )
  }
}

export const toolService = new ToolService()