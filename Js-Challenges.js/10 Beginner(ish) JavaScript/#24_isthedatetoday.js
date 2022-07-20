function isToday(date) {
  const checkDay = date.getdate();  //day of month
  const checkMonth = date.getMonth();
  const checkYear = date.getFullYear();

  const today = new Date();

  const todayDay = today.getdate();  //day of month
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  return checkDay === todayDay && checkMonth === todayMonth && checkYear
}

//clever
function isToday(date){
  return new Date().toDateString() === date.toDateString()
}

console.log(isToday(new Date()) )