const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const selectedMonthYearElem = document.querySelector('.selectedMonthYear');
const calendarElem = document.getElementById('calendar');
const nextElem = document.getElementById('next');
const prevElem = document.getElementById('prev');
// months display
// selected date
// next year and prev year
// render calender 
// 
let myName = 'shahbaz';
class Calendar {
    constructor() {
        this.month = new Date().getMonth();
        this.year = new Date().getFullYear();
        this.currentMonthYear = `${this.month}${this.year}`
        this.date = new Date().getDate();
        this.selectedDate = this.date;
        this.day = new Date(this.year, this.month).getDay();
    }
    renderMonthsYear() {
        selectedMonthYearElem.innerHTML = `${MONTHS[this.month]} ${this.year}`
        this.renderCalendar()
    }
    updateSideDate() {
        const currentDayElem = document.querySelector('.currentDay');
        const currentDateElem = document.querySelector('.currentDate');
        currentDayElem.innerHTML = DAYS[this.day] || '';
        currentDateElem.innerHTML = this.selectedDate;
    }
    renderCalendar() {
        const firstDay = new Date(this.year, this.month).getDay();
        const monthDays = 32 - (new Date(this.year, this.month, 32)).getDate();
        const lastMonthTotalDays = 32 - (new Date(this.year, this.month-1, 32)).getDate();
        const nextMonth_6_days = (new Date(this.year, this.month+1)).getDate();
        calendarElem.innerHTML = ''
        let date = 1;
        let lastMonthDate = lastMonthTotalDays - firstDay + 1;
        for (let i = 0; i < 7; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < 7; j++) {
                const td = document.createElement('td');
                if (i == 0) {
                    if (j < firstDay && lastMonthDate < lastMonthTotalDays) {
                        td.innerHTML = lastMonthDate;
                        lastMonthDate++
                        row.appendChild(td);
                    } else {
                        td.innerHTML = date;
                        td.id = date;
                        td.day = j;
                        date++;
                        row.appendChild(td);
                    }
                } else {
                    if (date <= monthDays) {
                        td.innerHTML = date;
                        td.id = date;
                        td.day = j
                        row.appendChild(td);
                        date++;
                    }
                }
            }
            calendarElem.appendChild(row);
        }
        if (this.currentMonthYear === `${this.month}${this.year}`) {
            document.getElementById(new Date().getDate()).classList.add('selectedDate')
        }
    }
    selectDate(e) {
        const elem = document.getElementById(e.target.id);
        if (elem) {
            this.selectedDate = e.target.id;
            this.day = e.target.day;
            const selectedDateElem = document.querySelector('.selectedDate');
            if (selectedDateElem) {
                selectedDateElem.classList.remove('selectedDate');
            }
            elem.classList.add('selectedDate');
            this.updateSideDate();
        }
        myName = 'farhaz';
        setTimeout(() => { console.log('name ', myName) }, 2000)
    }
    updateCalendar(flag) {
        const newDate = new Date(this.year, this.month + (flag > 0 ? 1 : -1));
        this.month = newDate.getMonth();
        this.year = newDate.getFullYear();
        this.renderMonthsYear();
        // if (flag > 0) {
        //  this.month = new Date(this.year, this.month + 1).getMonth();
        //  this.year = new Date(this.year, this.month + 1).getFullYear()
        // } else {

        // }
    }
}
var cal = new Calendar();
cal.renderMonthsYear();
cal.updateSideDate();
calendarElem.addEventListener('click', cal.selectDate.bind(cal));
nextElem.addEventListener('click', cal.updateCalendar.bind(cal, 1))
prevElem.addEventListener('click', cal.updateCalendar.bind(cal, -1))
console.log('my name is ', myName);
setTimeout(() => {
    console.log('name after change', myName);
}, 5000)





// display  num 
// for calculator


// renderMonths() {
//   MONTHS.forEach((item, index) => {
//       const month = document.createElement('td');
//       month.id = index;
//       month.addEventListener('click', (e) => {
//           const month = MONTHS[e.target.id];
//           const prevSel = document.querySelector('.selected');
//           prevSel.classList.remove('selected');
//           document.getElementById(e.target.id).classList.add('selected');
//           this.renderSelectedMonthYear(month);
//       })
//       month.innerHTML = item;
//       if (MONTHS[this.month] === item) {
//           month.classList.add('selected');
//       }
//       monthElem.appendChild(month);
//   });
//   this.renderSelectedMonthYear();
// }
// renderSelectedMonthYear(month, year) {

//   if (!month) {
//       month = MONTHS[this.month];
//   }
//   if (!year) {
//       year = this.year;
//   }
//   this.month = MONTHS.indexOf(month);
//   this.year = year;
//   document.getElementById('monthAndYear').innerHTML = `${month} ${year}`
//   this.renderCalendar();
// }
// renderCalendar() {
//   const daysInMonth = 32 - (new Date(this.year, this.month, 32)).getDate();
//   const firstDayOfMonth = new Date(this.year, this.month).getDay();
//   calendarElem.innerHTML = ''
//   let date = 1;
//   for (let i = 0; i < 7; i++) {
//       const dayRow = document.createElement('tr');
//       for (let j = 0; j < 7; j++) {
//           if (date > daysInMonth) {
//               break;
//           }
//           if (i == 0) {
//               if (j < firstDayOfMonth) {
//                   const day = document.createElement('td');
//                   dayRow.appendChild(day);
//               } else {
//                   const day = document.createElement('td');
//                   day.innerHTML = date;
//                   day.id = date;
//                   if (date === this.date) {
//                       day.classList.add('active')
//                   }
//                   date++;
//                   dayRow.appendChild(day);
//               }
//           } else {
//               const day = document.createElement('td');
//               day.innerHTML = date;
//               day.id = date;
//               console.log('this data', date === this.date)
//               if (date === this.date) {
//                   day.classList.add('active')
//               }
//               date++;
//               dayRow.appendChild(day);
//           }
//       }
//       calendarElem.appendChild(dayRow);
//   }
// }
// nextYear = (e) => {
//   console.log('value of this in nexs', this);
//   this.month = this.month;
//   this.year = this.year + 1;
//   this.renderCalendar();
//   this.renderSelectedMonthYear()
// }