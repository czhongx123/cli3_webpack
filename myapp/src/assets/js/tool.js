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
