import moment from "moment";

export default function unixConverter(timestamp) {
    var t = new Date();
    t.setSeconds(timestamp);
    var formatted = moment(t).format("dd.mm.yyyy hh:MM:ss");
    return formatted;
}