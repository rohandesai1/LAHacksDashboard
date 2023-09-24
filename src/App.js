import "./App.css"

/* Website content */
import Content from "./Content"
import Projects from "./Projects";
import Video from "./Video";

/* necessary modules*/

import BlockScroll from "./scroll"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ProjectPage(){

    return <Projects></Projects>
}

// When website is first opened 
function Home(){
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
      
    let blockScroll = true;

    BlockScroll(blockScroll, 5900)

    
    
   return( <div className="App">
            
            <Video></Video> {/* intro videos */}
            
            <div className="content"> 
                <Content></Content>
            </div>
            
        </div>)
}

// when website is referred to from an external page (to prevent the intro animation from playing everytime the website is referred)

function Home2(){
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
    
    
   return( 
        <div className="App">
                
                <div className='homeIcon'>
                <Link to="/home"><img src="./lahacksicon.png" alt="icon" width="200"height="200"/> </Link>
                </div>
                
                <Content></Content>

                    
                    {/*<Judges></Judges>*/}



                
        </div>
    )

}
export default function App() {
    
    return(
        <Router>
            <div>
                <Routes>
                <Route path = "/" exact Component={Home}></Route>
                <Route path = "/home" exact Component={Home2}></Route>
                <Route path = "/projects" exact Component={ProjectPage}></Route>

                </Routes>
            </div>
        </Router>
    );
 

}
