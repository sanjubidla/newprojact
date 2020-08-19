import React from 'react'
import Slider from './Slider'
import {FaDesktop} from "react-icons/fa";
import {RiCodeSSlashLine} from 'react-icons/ri';
import {FaShoppingCart} from 'react-icons/fa';
import {FaWordpress} from 'react-icons/fa'
class Web extends React.Component{
                  
     constructor(props) { 
    super(props);
    this.state = {
      brand: "WE DO IT WELL",
      Website :"Website Design",
      model: "A good quality website helps clients to effectively pick, choose and order your products online…",
     Web:"Web Development",
     develop:"Web development has to have an objective of improving your business effectiveness and profitability…",
     Ecommerce:"Ecommerce Website",
     weather:"Whether you’re starting a new e-commerce website or looking for an e-commerce re-design…",
     wordpress:"WordPress Development",
        best:"The Best WordPress Websites & Blogs have a professionally customized look, superb functionality…",
        
    };
  }
  render() {
    return (
      <div>
        <Slider/>

        <div className="brand">
      <h2> <span className="we">WHAT WE DO & </span>{this.state.brand}</h2> 
       
        </div>

        <div className="row">
       
        <div className="col-3 padding">
            <FaDesktop className="desk"/>
        <h6>{this.state.Website}</h6>
        <p> {this.state.model} </p>
        <a href="#" className="Read">Read More</a>

        </div>
         
        <div className="col-3 color">
            <RiCodeSSlashLine className="desk"/>
        <h6>{this.state.Web}</h6>
        <p> {this.state.develop} </p>
        <a href="#" className="Read">Read More</a>

        </div>
        <div className="col-3 padding">
            <FaShoppingCart className="desk"/>
        <h6>{this.state.Ecommerce}</h6>
        <p> {this.state.weather} </p>
        <a href="#" className="Read">Read More</a>

        </div>
        <div className="col-3 color">
            <FaWordpress className="desk"/>
        <h6>{this.state.wordpress}</h6>
        <p> {this.state.best} </p>
        <a href="#" className="Read">Read More</a>

        </div>

        </div>



      </div>
    );
  }

                    
                  
              }
                

export default Web