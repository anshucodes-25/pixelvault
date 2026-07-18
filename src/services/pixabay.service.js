import { ENV } from "../config/env";

export class PixabayService {
  static async fetchImages(
    searchQuery,
    pageNum = 1,
    perPage = ENV.PER_PAGE_INITIAL
  ) {
    const url = `${ENV.PIXABAY_BASE_URL}?key=${ENV.PIXABAY_API_KEY}&q=${encodeURIComponent(
      searchQuery
    )}&image_type=photo&per_page=${perPage}&page=${pageNum}&safesearch=true`;

    const response = await fetch(url);

    if(!response.ok){
      throw new Error("Failed to Fetch Images") 
    }
    return await response.json()
  }
}