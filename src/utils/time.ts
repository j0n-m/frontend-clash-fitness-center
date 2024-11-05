import moment from "moment";

const startWeek = moment().locale("en-us").weekday(0).format("ll");
const endWeek = moment().locale("en-us").weekday(6).format("ll");

function getNextDateFromWeekDay(day: number) {
  const specificDay = moment()
    .locale("en-us")
    .weekday(day + 7)
    .format("ll");

  return specificDay;
}

export { startWeek, endWeek, getNextDateFromWeekDay };
