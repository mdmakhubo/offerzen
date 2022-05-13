import React from 'react';
import { Search } from '@mui/icons-material';
import './topbar.scss';

const Topbar = () => {
  return (
      <>
        <div className='topbar'>
            <div className="logo"><span className='offer'>OFFER</span><span className='zen'>ZEN</span></div>
        </div>
        <div className="searchInputs">
            <div className="wrapper">
                <input type="text" placeholder='Search' />
                <Search className='searchIcon' />
            </div>
            <div className="items">
                Show Archive <input type="checkbox" />
            </div>
        </div>
      </>
  )
}

export default Topbar