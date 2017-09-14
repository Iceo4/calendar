
//返回年月日
export function getYMD(date) {
  var year = date.getFullYear();
  var month = parseInt(date.getMonth()) + 1;
  var day = date.getDate();
  month = formatNumber(month);
  day = formatNumber(day);
  return year + '/' + month + '/' + day;
}
//返回明天的年月日
export function getTomorrowYMD(date) {
  var year = date.getFullYear();
  var month = parseInt(date.getMonth());
  var day = date.getDate() + 1;
  var tday = new Date(year, month, day);
  return getYMD(tday);
}
export  function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
