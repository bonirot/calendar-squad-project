import { Months } from "./enums.js";
import { domElements } from "./dom.js";
let date = new Date();
let currentDay = date.getDate();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();
const { currentMonthElement, currentDayElement, daysElement, prevBtn, nextBtn, currentYearElement, eventBtnElement, eventModalElement, modalOverlayElement, } = domElements;
function printCalendar() {
    const firstDayOfTheMonth = new Date(currentYear, currentMonth, 1).getDay();
    const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    daysElement.innerHTML = " ";
    for (let i = 0; i < firstDayOfTheMonth; i++) {
        const dayBox = document.createElement("div");
        dayBox.classList.add("main__container-days--dynamic-day");
        daysElement.appendChild(dayBox);
    }
    for (let i = 1; i <= totalDaysInMonth; i++) {
        const dayBox = document.createElement("div");
        dayBox.classList.add("main__container-days--dynamic-day");
        dayBox.innerText = i.toString();
        daysElement.appendChild(dayBox);
        if (i === currentDay) {
            dayBox.classList.add("active");
        }
    }
    currentMonthElement.innerText = `${Months[currentMonth]}`;
    currentYearElement.innerHTML = `${currentYear}`;
    const weekDay = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
    const dayNumber = date.getDate();
    currentDayElement.innerText = `${weekDay} ${dayNumber}`;
}
const prevMonthBtn = () => {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear -= 1;
    }
    else {
        currentMonth -= 1;
    }
};
const nextMonthBtn = () => {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear += 1;
    }
    else {
        currentMonth += 1;
    }
    console.log(currentMonth);
};
prevBtn.addEventListener("click", () => {
    prevMonthBtn();
    printCalendar();
});
nextBtn.addEventListener("click", () => {
    nextMonthBtn();
    printCalendar();
});
const showModal = () => {
    eventModalElement.classList.remove("hide");
    eventModalElement.classList.remove("");
};
eventBtnElement.addEventListener("click", () => {
    showModal();
});
printCalendar();
