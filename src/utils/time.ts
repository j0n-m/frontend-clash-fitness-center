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
function getCurrentWeek() {
  return moment().week();
}
function getWeekDatesFromWeekDay(weekNum: number) {
  const startWeek = moment().week(weekNum).startOf("week").format("ll");
  const endWeek = moment().week(weekNum).endOf("week").format("ll");
  return { startWeek, endWeek };
}

function isClassAvailable(weekNum: number, day: string, classD: Date) {
  const currentDay = moment().day();
  const currentDate = moment().day(currentDay + 1);
  const classDate = moment(classD).week(weekNum);

  // console.log(currentWeekofYear, classDate);
  if (classDate.isBefore(currentDate)) {
    return true;
  }

  return false;
}

function getAvailableDateFromClassDate(date: Date) {
  const currentWeekofYear = moment().week();
  //classDate's week is up to date with current date
  const classDate = moment(date).week(currentWeekofYear).toDate();
  const now = moment().locale("en-us").add(1, "day").toDate();

  if (now < classDate) {
    // console.log(moment(classDate).format("ll"));
    return moment(classDate).format("dddd, MMM DD, YYYY");
    // return classDate;
  } else {
    // console.log(moment(classDate).add(1, "week").toDate());

    return moment(classDate).add(1, "week").format("dddd, MMM DD, YYYY");
  }
}

export {
  startWeek,
  endWeek,
  getNextDateFromWeekDay,
  getAvailableDateFromClassDate,
  getCurrentWeek,
  getWeekDatesFromWeekDay,
  isClassAvailable,
};
