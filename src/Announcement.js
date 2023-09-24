// Displays an individual Announcement
export default function Announcement({ title, description }) {
    return (
        <div className="individualAnnouncement">
            <div className="announcementSubHeading">{title}</div>
            <div>{description}</div>
        </div>
    );
}
