export class AdService {
  private static instance: AdService
  
  static getInstance(): AdService {
    if (!AdService.instance) {
      AdService.instance = new AdService()
    }
    return AdService.instance
  }
  
  loadAds() {
    // Load ads implementation
  }
  
  showAd(position: string) {
    // Show ad implementation
  }
}