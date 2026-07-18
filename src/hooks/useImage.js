import { ENV } from "../config/env";
import { PixabayService } from "../services/pixabay.service";

import React, { useState } from 'react'

export const useImage = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, seterror] = useState(null)
  const [loadingMore, setLoadingMore] = useState(false)
  const [moreImages, setMoreImages] = useState(true)

  const fetchImages = async (searchQuery, pageNum, append = false) => {
    console.count("fetchImages called");
    if (append) {
      setLoadingMore(true)
      await new Promise(resolve =>
        setTimeout(resolve, ENV.LOAD_MORE_DELAY)
      );
    } else {
      setLoading(true)
    }
    seterror(null)

    try {
      const perPage = append ? ENV.PER_PAGE_LOAD_MORE : ENV.PER_PAGE_INITIAL

      const data = await PixabayService.fetchImages(searchQuery, pageNum, perPage)

      if (data.hits && data.hits.length > 0) {
        if (append) {
          setImages((prev) => [...prev, ...data.hits])
        }
        else {
          setImages(data.hits)
        }
        setMoreImages(data.hits.length == ENV.PER_PAGE_LOAD_MORE)
      }
      else {
        seterror("Images are not found!!!")
        setMoreImages(false)
      }
    }

    catch (error) {
      seterror(error.message)
      setMoreImages(false)
    }

    finally {
      setLoading(false)
      setLoadingMore(false)
    }

  }

  const resetImages = () => {
    setImages([])
    setMoreImages(true)
  }
  return ({ images, loading, error, loadingMore, moreImages, fetchImages, resetImages })
}




