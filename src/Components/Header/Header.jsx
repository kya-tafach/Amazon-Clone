import React from 'react'
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5"

import classes from "./Header.module.css"
// import { Link } from 'react-router-dom';
import { BiCartDownload } from "react-icons/bi";
function Header() {
  return (
   
      <section>  
        <section className={classes.fixed}>
            <div className={classes.header__container}>
                {/* log */}
                <div className={classes.logo__container}>
                <a to="/">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                </a>
               
                {/* delivery */}
                {/* <span>icon</span> */}
                <div className={classes.delivery__container}>
                    <span>
                        <IoLocationOutline />
                    </span>
                    <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
                    </div>
                </div>
                </div>
          
            {/* search */}
           
            <div className={classes.search__container}>
                
                <select name="" id="">
                    <option value="">All</option>
                </select>
                <input type="text" name="" id="" placeholder='search product'/>
                {/* {search icon} */}
                <IoSearch size={26} />
            </div>
            {/* right side a */}
            <div className={classes.order__container}>
                    <a className={classes.language}>
                <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt=""
              />
                    <select>

                        <option value="">EN</option>
                        <option value="">Amharic</option>
                        <option value="">JP</option>
                        <option value="">Ch</option>
                        <option value="">It</option>
                    </select>
                    </a>    
                    {/* three components */}
                     <a  href="" >
                     <div>
                        <p>sign in</p>
                        <span>account & list</span>
                     </div>
                     </a>
                     {/* order */}
                     <a href="">
                     <div >
                        <p>Returns</p>
                        <span>& orders</span>
                     </div>
                     </a>
                     {/* cart */}
                    
                     <a href="" className={classes.cart}>
                     <div>
                      
                        <BiCartDownload  size = {35}/>
                        <span>0</span>
                     </div>
                     </a>
                </div>

                </div>
      </section>
    </section>
  
  )
}

export default Header
