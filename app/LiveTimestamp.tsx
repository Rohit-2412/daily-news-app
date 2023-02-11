type Props = {
    time: string;
};
function timeAgo(timeString: string): string {
    let givenTime = new Date(timeString);
    let currentTime = new Date();
    let timeDifference = currentTime.getTime() - givenTime.getTime();

    let seconds = Math.floor(timeDifference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    if (days > 0) {
        return days + " days ago";
    } else if (hours > 0) {
        return hours + " hours ago";
    } else if (minutes > 0) {
        return minutes + " minutes ago";
    } else {
        return "Just now";
    }
}

function LiveTimestamp({ time }: Props) {
    return <span>{timeAgo(time)}</span>;
}

export default LiveTimestamp;
