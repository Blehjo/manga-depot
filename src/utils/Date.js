import moment from "moment";

export default function unixConverter(timestamp) {
    let convertedTime = moment.unix(timestamp).format('ll');
    return `Released: ${convertedTime}`;
}