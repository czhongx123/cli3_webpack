/**
 * 将时间戳转换为时间
 * @param {*} time
 */
export const timeStamp2String = function(time) {
  var datetime = new Date();
  datetime.setTime(time);
  var year = datetime.getFullYear();
  var month =
    datetime.getMonth() + 1 < 10
      ? "0" + (datetime.getMonth() + 1)
      : datetime.getMonth() + 1;
  var date =
    datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
  var hour =
    datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
  var minute =
    datetime.getMinutes() < 10
      ? "0" + datetime.getMinutes()
      : datetime.getMinutes();
  var second =
    datetime.getSeconds() < 10
      ? "0" + datetime.getSeconds()
      : datetime.getSeconds();
  return (
    year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second
  );
};
/**获取一段时间内的所有日期
 * start/end---格式"2019-02-27"
 */
export const getDiffDate = function(start, end) {
  var startTime = getDate(start);
  var endTime = getDate(end);
  var dateArr = [];
  function getDate(datestr) {
    var temp = datestr.split("-");
    if (temp[1] === "01") {
      temp[0] = parseInt(temp[0], 10) - 1;
      temp[1] = "12";
    } else {
      temp[1] = parseInt(temp[1], 10) - 1;
    }
    var date = new Date(temp[0], temp[1], temp[2]);
    return date;
  }
  while (endTime.getTime() - startTime.getTime() > 0) {
    var year = startTime.getFullYear();
    var month = startTime.getMonth() + 1;
    month = month > 9 ? month : "0" + month;
    var day =
      startTime.getDate().toString().length === 1
        ? "0" + startTime.getDate()
        : startTime.getDate();

    dateArr.push(year + "-" + month + "-" + day);
    startTime.setDate(startTime.getDate() + 1);
  }
  return dateArr;
};
