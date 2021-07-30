(function (){
const prevElem = document.querySelector('#prev');
const nextElem = document.querySelector('#next');
const monthYear = document.querySelector('#monthYear');
const dateElem = document.querySelector('#date');
const dayElem = document.querySelector('#day');
const calendarElem = document.querySelector('#calendar');
const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class calendar {
  constructor() {
    this.currentDate = new Date().getDate();
    this.currentMonth = new Date().getMonth();
    this.currentYear = new Date().getFullYear();
    this.day = new Date(this, this.currentYear, this.currentMonth, this.currentDate).getDay();
  }
  renderMonthYear(){
    monthYear.innerHTML = `${MONTH[this.currentMonth]}, ${this.currentYear}`;
    this.renderCalendar();
  }
  updateSideData(){
    dayElem.innerHTML = `${DAYS[this.currentDate.getDay()]}`;
    dateElem.innerHTML = this.currentDate;
  }
  // by currentMonth, current Year it will calculate days and populate in UI
  renderCalendar(){
    const firstDay = new Date(this.currentYear, this.currentMonth).getDay();
    const totalDays = 32 - new Date(this.currentYear, this.currentMonth, 32).getDate();
    const lastMonthTotalDays = 32 - new Date(this.currentYear, this.currentMonth-1, 32).getDate()
    console.log('firstdata ', firstDay, ' total days ', totalDays);
    calendarElem.innerHTML = ''
    let date = 1;
    let lastMonthDate = lastMonthTotalDays - firstDay + 1;
    for (let i=0;i<7;i++){
      let elem = document.createElement('tr');
      for (let j=0;j<7;j++){
        let td = document.createElement('td');
        if (i===0 && j<firstDay && lastMonthDate <= lastMonthTotalDays){
          td.innerHTML = lastMonthDate;
                        lastMonthDate++
          elem.appendChild(td);
        } else {
          if(date <totalDays){
            td.innerHTML = date;
            td.id = date;
            date++
            elem.appendChild(td);
          } else if(date === totalDays) {
            td.innerHTML = date;
            td.id = date;
            let nextMonthDate = 1;
            elem.appendChild(td);
            date++
            j++
            while(j<7){
              td = document.createElement('td');
              td.innerHTML = nextMonthDate;
              elem.appendChild(td);
              nextMonthDate++
              j++
            }
          }
        }
      }
      calendarElem.appendChild(elem);
    }
  }
  selectDate(e) {
    if (e.target.id){
      const elem = document.getElementById(e.target.id);
      console.log('target element is ',e.target.id);
      this.currentDate = new Date(this.currentYear, this.currentMonth, +e.target.id);
      this.updateSideData();
    }
  }
  updateDate(flag){
    console.log('updating date', this);
    const newDate = new Date(this.currentYear, this.currentMonth + (flag));
    this.currentMonth = newDate.getMonth();
    this.currentYear = newDate.getFullYear();
    this.renderMonthYear();
  }
}
const cal = new calendar();
cal.renderMonthYear();
calendarElem.addEventListener('click', cal.selectDate.bind(cal));
nextElem.addEventListener('click', cal.updateDate.bind(cal, 1));
prevElem.addEventListener('click', cal.updateDate.bind(cal, -1));
})()