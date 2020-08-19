import React from 'react';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
//import Homes from './Homes';
//import Abouts from './Abouts';
//import Serviseses from './Serviseses';
//import Contactss from './Contactss';
import Menu from './Menu';


//import './Site.css';
import { Switch, Route ,Redirect} from 'react-router-dom';

const Myweb = () =>{
           
        return(
                <>
              
                <Menu/>
                <Switch>
              
             
                        
            
              </Switch>
            
              </>
                 
        )
        }


export default Myweb