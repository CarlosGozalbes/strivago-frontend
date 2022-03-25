import React from 'react'
import { Dropdown } from 'react-bootstrap';
import "./style.css";
import { BsSearch, BsFillPeopleFill } from "react-icons/bs";
import logo1 from "../../assets/14.png";
import logo2 from "../../assets/54.png";
import logo3 from "../../assets/406.png";
import logo4 from "../../assets/452.png";
import logo5 from "../../assets/626.png";
import logo6 from "../../assets/634.png";
import logo7 from "../../assets/2564.png";
import { Image } from 'react-bootstrap';

function SearchMenu() {
  return (
    <section className="search-menu">
      <form action="" className="form mr-auto">
        <div className="d-flex hotelhouseoptions ">
          <div className=" px-3 mr-2 optionssssss">
            <a href="" className="text-black">
              All stays
            </a>
          </div>
          <div className="mr-2  px-3 optionssssss">
            <a href="" className="text-black">
              Hotel
            </a>
          </div>
          <div className=" px-3 optionssssss">
            <a href="" className="text-black">
              House / Apartment
            </a>
          </div>
          <div>{""}</div>
        </div>
        <div className="input-search-container">
          <BsSearch />
          <input
            type="text"
            placeholder="Enter a hotel name"
            className="input-text ml-2"
          />
          <input type="date" className="input-date" />
          <input type="date" className="input-date mr-3" />
          {/* <div className=" d-flex ">
              <span>
                <BsFillPeopleFill />
              </span>
              <div >
                <span>1 Room</span>
                <span>2 Guest</span>
              </div>
            </div> */}
          <input type="submit" value={"Search"} className="searchDealsbutton" />
        </div>
      </form>
      <div className="mt-4">
        <p className="logoTitle">We compare multiple booking sites at once</p>
        <Image src={logo1} height={30} className="mr-3"></Image>
        <Image src={logo3} height={30} className="mr-3"></Image>
        <Image src={logo4} height={30} className="mr-3"></Image>
        <Image src={logo5} height={30} className="mr-3"></Image>
        <Image src={logo6} height={30} className="mr-3"></Image>
        <Image src={logo7} height={30} className="mr-3"></Image>
        <Image src={logo2} height={30} className="mr-3"></Image>
        <span className="link100more ml-4">+100 more</span>
      </div>
    </section>
  );
}

export default SearchMenu