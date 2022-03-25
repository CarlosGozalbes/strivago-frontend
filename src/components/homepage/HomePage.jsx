import React from 'react'
import MyNavbar from '../mynavbar/MyNavbar'
import Header from '../header/Header'
import SearchMenu from '../searchmenu/SearchMenu'
import Destinations from '../destinations/Destinations'
function HomePage() {
  return (
    <>
      <MyNavbar />
      <Header />
      <SearchMenu />
      <Destinations />
    </>
  );
}

export default HomePage