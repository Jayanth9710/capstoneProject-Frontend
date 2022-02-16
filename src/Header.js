import React, { useContext, useEffect, useState } from 'react'
import './Header.css'
import { FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import {useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';
import dataContext from './ContextData'

function Header() {
  const myStorage = window.localStorage;
  const history = useHistory();
  const [location, setLocation] = useState('');
  const data = useContext(dataContext)



  const handleChange = (event) => {
     setLocation(event.target.value);
  };

  const handleLogout = async (e) =>{
    myStorage.removeItem("user");
    myStorage.removeItem("app_token");
    data.setcurrentUser();
    history.push("/")
  }
  data.setLoc(location);

  useEffect(()=>{

  },[myStorage.getItem('user')])
    return (
      <>
        <div className='header'>
            <Link to="/">
            <img className='header_icon' src='logo.png' alt='logo'></img>
            </Link>
            
            {/* <FormControl margin='normal' >
  <InputLabel id="demo-simple-select-label">Select Location</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={location}
    label="Select Location"
    onChange={handleChange}
  >
    <MenuItem value="Chennai" >Chennai</MenuItem>
    <MenuItem value="Pondicherry" >Pondicherry</MenuItem>
    <MenuItem value="Kodaikanal" >Kodaikanal</MenuItem>
    <MenuItem  value="Ooty">Ooty</MenuItem>
  </Select>
</FormControl> */}
                {/* <SearchIcon/> */}
            
            <div className='header_right'>
            <Link to="/host" className='host'>
                <p>Become a host</p>
                </Link>
                
                {myStorage.getItem('user') ? (
                  <div>
                  <button className="button logout" onClick={handleLogout}>Log out</button>
                  <Link to="/roomsbooked">
                    <button className="button login" >Your Bookings</button>
                    </Link>
                  </div>
               
          ) : (
            <div className="buttons">
            <Link to="/login">
            <button className="button_login" >Login</button>
            </Link>
            <Link to="/register">
            <button className="button_register" >Register</button>
            </Link>
          </div>
           
        )}

        
                
            </div>
        </div>
        </> 
    )
    
}

export default Header
