// get number of days since last visit and display to screen
function getNumberOfDays() {
    const date1 = localStorage.lastDate;
    const date2 = new Date();
  
    const oneDay = 1000 * 60 * 60 * 24;
  
    const diffInTime = date2.getTime() - date1.getTime();
  
    const diffInDays = Math.round(diffInTime / oneDay);
  
    document.querySelector("#daysSinceLastVisit").textContent = diffInDays;
  }
  
  // save current date in local storage
  function saveDate() {
    let lastDate = new Date();
    localStorage.lastDate = lastDate;
  }