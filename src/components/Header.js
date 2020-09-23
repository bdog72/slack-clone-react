//
//

import React from 'react';

import { AccessTime, HelpOutline, Search } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

import '../styles/Header.scss';

function Header({ user }) {
  return (
    <div className='header'>
      <div className='header__left'>
        <Avatar
          className='header__avatar'
          // alt={user?.displayName}
          alt='Brian Bycynski'
          // src={user?.photoURL}
          src='https://cdn.shopify.com/s/files/1/0012/5114/7851/products/2020-presidential-items-biden-harris-2020-presidential-campaign-pinback-button-jb-317-14726521651275_720x.png?v=1585157336'
        />
        <AccessTime />
      </div>

      <div className='header__search'>
        <Search />
        <input type='text' placeholder='search...' />
      </div>

      <div className='header__right'>
        <HelpOutline />
      </div>
    </div>
  );
}

export default Header;
