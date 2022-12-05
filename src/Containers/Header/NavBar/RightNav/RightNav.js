import React from 'react'
import './RightNav.css'
import SearchIcon from '@mui/icons-material/Search';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
function RightNav() {
  return (
    <div className='rightNavContainer' >
      <div style={{ width : "325px", height : "40px", position : "relative"}} >
        <input className='navSearchBar' type="text" placeholder='Search for Products, brands and more ' />
        <div className='searchIcon' >
          <SearchIcon />
        </div>
      </div>
      <div className='navIcons' >
        <div className='iconsBlock' >
          <PeopleOutlinedIcon />
          <span>Profile</span>
        </div>
        <div className='iconsBlock' >
          <FavoriteBorderOutlinedIcon />
          <span>Wishlist</span>
        </div>
        <div className='iconsBlock' >
          <ShoppingBagOutlinedIcon />
          <span>Bag</span>
        </div>
      </div>
    </div>
  )
}

export default RightNav