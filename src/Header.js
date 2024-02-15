import React from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Header.css'


function Header() {
  return (
    <div>
        <div className="logo_container">
            <div className="logo">
                <StorefrontIcon fontSize='large'/>
                <span className='logo_name'>shop@ron</span>
            </div>
            <div className="search">
              <input type="text" className='search_box'/>
              <SearchIcon className='search_icon' fontSize='large'/>
            </div>
            <div className="navigation">
              <div className="sign_in_nav">
                <span className='Hello'>Hello Guest</span>
                <span className="signin">Sign In</span>
              </div>
              <div className="shop_nav">
                <span className='Hello'>Your</span>
                <span className="signin">Shop</span>
              </div>
              <div className="basket_nav">
                <ShoppingCartOutlinedIcon fontSize='large'/>
                <span className='num_of_items_in_cart'>0</span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header