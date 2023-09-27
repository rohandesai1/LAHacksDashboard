import React, { useState, useEffect } from 'react';
import Project from "./Project.js";
import { Link } from 'react-router-dom';
export default function Projects () {
    // set state for when request is recieved
    const [allData, setData] = useState(null);
    const postData = async (hackNum, samples) => {
        // async function, allows other proceses to be run laterally 

        try {
            // pause until response recieved
            const response = await fetch('http://127.0.0.1:4000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({ 1: hackNum, 2 : samples })  
            });
            
            // jsonify -> list
            const data = await response.json();

            let data2 = [];

            // converts into proper format for .map
            for (let i = 0; i<data[0].length; i++) {
                data2.push({
                    title: data[0][i],
                    description: data[1][i] ,
                    image: data[2][i],
                    externalLink: data[3][i] 
                })
            }
            // map onto project components
            const mapped = data2.map((project, index) => (
                
                <Project
                    {...project} 
                    key={index} 
                ></Project>
            ));
            // set state -> project data recieved and stored
            if (!allData){
                console.log("hi");
                setData(mapped);
            } else{
                console.log(allData);
            }

        } catch (error) { // prevents website crash from request fail
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        
        postData([7,6,4],[3,3,3]); // [years of hackathon (la hacks 7, 6 etc), number of projects sampled] 




    } , [])

    // if project data not yet recieved
    if (!allData) return <div>Loading . . .</div>;

    // if project data recieved


    return (
        <div>
        <div className='homeIcon'>
            <Link to="/home"><img src="./lahacksicon.png" alt="icon" width="150"height="150"/> </Link>
        </div>
        <div className='projectsWrapper'>
            <div className='projectsTitle'>Top Projects</div>
            {allData}
        </div>
        </div>
    )
}

