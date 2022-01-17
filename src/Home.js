import { React, useEffect, useState, useContext } from "react";
import './home.css'
import Banner from './Banner'
import Card from './Card'
import {useHistory,Link} from 'react-router-dom';


function Home() {
    const history = useHistory();
    return (
        <div className='home'>
            
            <Banner/>
            <h2>Inspiration for your next trip</h2>
            <div className='home_section'>
                <Link to="/s/pondy" >
                <Card  src="https://gumlet.assettype.com/freepressjournal/2019-07/2110d031-ab56-4f20-b29b-3268e265df93/pondicherry.jpg?format=webp&w=400&dpr=2.6"
                title="Pondicherry"
                desc="Stay and experience the French Connection in India."/>
               </Link>
               <Link to="/s/ooty">
                <Card src="http://www.ootyindia.com/pictures/package/packagethumb/home_ooty-coonoor-tour-13.jpeg"
                title="Ooty"
                desc="Get close to nature this vacation."/>
                </Link>
                <Link to ="/s/chennai">
                <Card src="https://www.outlookindia.com/outlooktraveller//public/uploads/filemanager/images/Chennai-Central,-formerly-Madras-Central,-is-the-main-railway-terminus-in-the-city-of-Chennai,-India.-It-is-one-of-the-most-important-hubs-in-the-South..jpg"
                title="Chennai"
                desc="Business or pleasure trip we got you covered for a comfortable stay."/>
                </Link>
            </div>
            <div className='home_section'>
                <Card src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                desc="Unique activities we can do together, led by a world of hosts."/>
                <Card  src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Unique stays"
                desc="Spaces that are more than just a place to sleep."/>
                <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                desc="Comfortable private places, with room for friends or family."/>
            </div>
        </div>
    )
}

export default Home
