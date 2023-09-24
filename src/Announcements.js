import Announcement from "./Announcement";
import "./App.css"

// Create toy announcement data
const announcements = [

    {
        title: "$25,000 in Prizes!",
        description: "Airpods, 3D Printers, $5000 in Cash and 20 other prizes!",
        id: 0,
    },
    {
        title: "Largest High School Hackathon in the World!",
        description: "With over 450 particpants, Los Altos Hacks is the largest high school hackathon, 8 years running!",
        id: 1,
    },
    {
        title: "Infinite Snacks and Soda",
        description: "Work through the night with free snacks and soda in this electric 24 hour overnight hackathon",
        id: 2,
    },
    {
        title: "Activities Through The Night!",
        description: "Challenges like capture the flag, video game tournaments, and presentations from high-ranking engineers will always keep you busy!",
        id: 3,
    },

    {
        title: "Internship and Job Opportunities!",
        description: "With 100s of sponsors and dozens of companies present on site, Los Altos Hacks is the perfect opportunity for you to find internships to expand your portfolio!",
        id: 4,
    }
];

export default function Announcements() {
    let mapped = announcements.map((announcement) => (
        <Announcement
            {...announcement} 
            key={announcement.id} 
        ></Announcement>
    ));
    console.log(mapped);
    return (
        <div className="announcementsWrapper"> 
           
            <div className="announcements">

                {announcements.map((announcement) => (
                    <Announcement
                        {...announcement} 
                        key={announcement.id} 
                    ></Announcement>
                ))}
            </div>
        </div>
    );
}
