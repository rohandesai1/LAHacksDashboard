// Displays an individual event
export default function Event({ name, time}) {
    return (
        <div className="event">
            <div className="eventTitle">{name}</div>
            <div className="eventTime">
                {time}
            </div>
        </div>
    );
}
