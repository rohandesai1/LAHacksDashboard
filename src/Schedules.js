import Event from "./Event";

const scheduleDay1 = [
    {
        name: "Check-in",
        time: "9:00 AM",
        id:0
    },
    {
        name: "Intro Ceremony",
        time: "10:30 AM",
        id:1
    },
    {
        name: "Hacking starts!",
        time: "11:00 AM",
        id:2
    },
    {
        name: "Team mixer!",
        time: "11:05 AM",
        id:3
    },
    {
        name: "Lunch",
        time: "12:30 PM",
        id:4
    },
    {
        name: "Dinner",
        time: "7:00 PM",
        id:5
    },
    {
        name: "Cup Stacking",
        time: "8:00 PM",
        id:6
    },
    {
        name: "Capture the Flag",
        time: "11:00 PM",
        id:7
    }

]

const scheduleDay2 = [
    {
        name: "Surprise!",
        time: "12:00 AM",
        id:0
    },
    {
        name: "Tournament ($$$)",
        time: "1:00 AM",
        id:1
    },
    {
        name: "Hacking Ends",
        time: "7:30 AM",
        id: 2
    },
    {
        name: "Breakfast",
        time: "8:00 AM",
        id: 3
    },

    {
        name: "Judging",
        time: "9 AM",
        id: 4
    },
    {
        name: "Award Ceremony",
        time: "10:30 AM",
        id: 5
    },
    {
        name: "Hackathon Ends",
        time: "11:00 AM",
        id: 6
    }

]

export default function Schedule() {
    return (
        <div className="scheduleWrapper">
            <div className="scheduleTitle">Schedule</div>

            <div className="dayTag">Day 1</div>
            <div className="schedule">
                
                
                {scheduleDay1.map((event) => (
                    <Event
                        {...event} 
                        key={event.id} 
                    ></Event>
                ))}

            </div>

            <div className="dayTag">Day 2</div>
            <div className="schedule">

                {scheduleDay2.map((event) => (
                        <Event
                            {...event} 
                            key={event.id} 
                        ></Event>
                    ))}

            </div>

            
        </div>
    );
}
