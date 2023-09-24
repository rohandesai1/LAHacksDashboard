import Info from "./Info"
import { Link } from "react-router-dom"
import Announcements from "./Announcements"
import Partition from "./Partition"
import Schedule from "./Schedules"

export default function Content(){
    return(
        <div>
            <Info></Info>
            <Link to="/projects" target="_blank" rel="noreferrer"><h3 class="info linkToProjects">See Past Projects</h3></Link>
            <Announcements></Announcements>
            <Partition></Partition>
            <Schedule></Schedule> 
            <Partition></Partition>
        </div>
    )
}