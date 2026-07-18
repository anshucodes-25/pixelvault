import { useState } from "react";

import { StorageService } from "../services/storage.service";
import { STORAGE_KEY } from "../config/env"

import React from 'react'

export const useFavorite = () => {
    const [favorites, setFavorites] = useState(() => {
        return StorageService.get(STORAGE_KEY) || [];
    });



    const ToggleFavorite = (img) => {

        // Check if image is already favorite

        const alreadyExists = favorites.find((item) => item.id == img.id);

        if (alreadyExists) {

            // Remove image from favorites
            const updatedFavorites = favorites.filter(
                (item) => item.id !== img.id
            );

            setFavorites(updatedFavorites);
            StorageService.set(STORAGE_KEY, updatedFavorites);

        }
        else {
            // Add image to favorites

            const updatedFavorites = [...favorites, img];

            setFavorites(updatedFavorites);
            StorageService.set(STORAGE_KEY, updatedFavorites);
        }
    }

    const isFavorite = (id) =>favorites.some((item)=>item.id === id)

    return ({favorites,ToggleFavorite,isFavorite})
}

