import React , {Component} from "react";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SideShow from './components/SideShow/SideShow';
import './App.css'

import DeanWord from "./components/DeanWord/DeanWord";
import Ads from  "./components/Ads/Ads";
import  Navbar  from "./components/Navbar/Navbar";



class Main extends Component
{

  
  render(){

    


    return(
      <body>
         

        <div className="side">
          <SideShow />
        </div>
        <div className="parent">
            <div className="child-2">
              <Ads />
            </div>
            <div className="child-1">
              <h1>كلمة العمداء والوكلاء</h1>
              <DeanWord  />
            </div>

          

        </div>
        

        

      </body>   
    )
  }
}

export default Main;