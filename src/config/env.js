export const ENV = {
  PIXABAY_API_KEY:import.meta.env.VITE_PIXABAY_API_KEY,
  PIXABAY_BASE_URL:import.meta.env.VITE_PIXABAY_BASE_URL,
  PER_PAGE_INITIAL:parseInt(import.meta.env.VITE_PER_PAGE_INITIAL),
  PER_PAGE_LOAD_MORE:parseInt(import.meta.env.VITE_PER_PAGE_LOAD_MORE),
  SCROLL_THRESHOLD:parseInt(import.meta.env.VITE_SCROLL_THRESHOLD),
  LOAD_MORE_DELAY :parseInt(import.meta.env.VITE_LOAD_MORE_DELAY)
};

export const CATEGORIES = [
  'Trending', 'Nature', "Technology", "People", "Animals",
        "Architecture", "Travel", "Food", "Indian", "Russian"
]


export const STORAGE_KEY = 'PIXABAY_FAVORITE'