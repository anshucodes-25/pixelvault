import React from 'react'
import { IoMdCamera } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import "./Navbar.css"
import { RxComponentPlaceholder } from 'react-icons/rx';

const Navbar = ({onSearch,query,setQuery , favorites,showFavorite,setShowFavorite}) => {

  // let query;
  // let setQuery = (a,b) =>a+b;
  // let onSearch = (a,b)=>a-b;
  // let favorite = [1,2,3];
  // let showFavorite;
  // let setshowFavorite = (a) =>a
  return (
    <>
      <nav>
        <div className="logo">
          <IoMdCamera size={35} />
          <span>PixelVault</span>
        </div>

        <div className="input-box">
          <input type="text"
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
          onKeyDown={(e)=>e.key === "Enter" && onSearch()}   
          placeholder='Search Images...'
           />
          <CiSearch size={20} color='white' onClick={onSearch} />
        </div>

        <div className='favorite-button' onClick={() => setShowFavorite(!showFavorite)}>
          <CiHeart size={22} />
          Favorite
          {favorites.length>0 && (<>
          <span>{favorites.length}</span>
          </>)}
        </div>
      </nav>
    </>
  )
}

export default Navbar