import React from 'react'
import './Categories.css'

 const Categories = ({handleCategoryClick}) => {
    const categories = [
        'Trending', 'Nature', "Technology", "People", "Animals",
        "Architecture", "Travel", "Food", "Indian", "Russian"
    ]

    return (
        <>
          <div className='categories'>
           {categories.map((items,index)=>(
            <button onClick={()=>handleCategoryClick(items)} key={index}>{items}</button>
           ))}
          </div>
        </>
    )
}

export default Categories