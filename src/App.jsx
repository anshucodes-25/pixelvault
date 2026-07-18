import React, { useEffect, useState, useCallback } from "react";
import Navbar from "./components/Layout/Navbar";
import Categories from "./components/Layout/Categories";
import ImageGrid from "./components/Images/Imagegrid";
import { useImage } from "./hooks/useImage";
import LoadingSpinner from "./components/Ui/LoadingSpinner";

import InfiniteScroll from "react-infinite-scroll-component";

import { useFavorite } from "./hooks/useFavorite";
import EmptyState from "./components/Ui/Emptystate";

const App = () => {
  const [query, setQuery] = useState("London");
  const [pageNum, setPageNum] = useState(1);
  const [showFavorite, setShowFavorite] = useState(false);

  const { favorites, ToggleFavorite, isFavorite } = useFavorite();

  const {
    images,
    loading,
    loadingMore,
    moreImages,
    fetchImages,
    resetImages,
  } = useImage();


  const handleCategoryClick = (items) => {
    const searchTerm = items === "Trending" ? "Nature" : items;

    setQuery(searchTerm);
    setPageNum(1);
    resetImages();
    setShowFavorite(false);

    
    fetchImages(searchTerm, 1, false);
  };


  const handleSearch = () => {
    if (query.trim()) {

      
      setPageNum(1);

      resetImages();

     
      fetchImages(query, 1, false);
    }
  };


  useEffect(() => {

    
    fetchImages(query, 1, false);

  }, []);


  useEffect(() => {

    
    if (pageNum > 1) {
      fetchImages(query, pageNum, true);
    }

  }, [pageNum, query]); 


  const loadMoreImages = useCallback(() => {

    
    if (!loadingMore && moreImages) {
      setPageNum((prev) => prev + 1);
    }

  }, [loadingMore, moreImages]);


  return (
    <div>

      <Navbar
        onSearch={handleSearch}
        query={query}
        setQuery={setQuery}
        favorites={favorites}
        showFavorite={showFavorite}
        setShowFavorite={setShowFavorite}
      />

      <Categories handleCategoryClick={handleCategoryClick} />


      {
        
        loading && images.length === 0 ? (

          <LoadingSpinner />

        ) : showFavorite && favorites.length === 0 ? (

          <EmptyState
            onGoBack={() => setShowFavorite(false)}
          />

        ) : showFavorite ? (

          <ImageGrid
            images={favorites}
            onToggleFavorite={ToggleFavorite}
            isFavorite={isFavorite}
          />

        ) : (

          <InfiniteScroll

           
            key={query}

            dataLength={images.length}
            next={loadMoreImages}
            hasMore={moreImages}

            loader={<LoadingSpinner />}

            endMessage={
              <p
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  color: "white"
                }}
              >
                No more images
              </p>
            }
          >

            <ImageGrid
              images={images}
              onToggleFavorite={ToggleFavorite}
              isFavorite={isFavorite}
            />

          </InfiniteScroll>

        )
      }

    </div>
  );
};

export default App;