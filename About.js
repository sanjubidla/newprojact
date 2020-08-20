import React from 'react'
import Work from '../src/images/work2.jpg';
import Common from './Common';
//import { NavLink } from 'react-router-dom';
import './Site.css';
const About = () =>{
        return(
                <>
                <Common name="Grow your bussiness with"
                imgsrc={Work}
                visit="/contact"
                btname="contact now"
                />
                </>
                
        )

}

export default About