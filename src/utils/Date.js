import moment from "moment";

export default function unixConverter(timestamp) {
    let convertedTime = moment.unix(timestamp).format('ll');
    return `Released: ${convertedTime}`;
}

// export default function utcConverter(timestamp) {
//     let convertedTime = timestamp.toLocaleDateString();
// }