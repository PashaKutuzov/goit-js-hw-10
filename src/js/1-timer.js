



import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


let userSelectedDate = null; // Змінна для збереження обраної дати
let countdownInterval = null;

const startButton = document.querySelector("[data-start]");
const dateTimePicker = document.querySelector("#datetime-picker");
const daysValue = document.querySelector("[data-days]");
const hoursValue = document.querySelector("[data-hours]");
const minutesValue = document.querySelector("[data-minutes]");
const secondsValue = document.querySelector("[data-seconds]");


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0]; 

        if (selectedDate <= new Date()) {
            iziToast.error({
              title: "Error",
              message: "Please choose a date in the future",
            });
            startButton.disabled = true; // Блокуємо кнопку
          } else {
            userSelectedDate = selectedDate;
            startButton.disabled = false; // Робимо кнопку активною
          }
        },
      };
      
    flatpickr("#datetime-picker", options);

    window.addEventListener("load", () => {
        startButton.disabled = true; // Кнопка завжди неактивна після оновлення
      });

startButton.addEventListener("click", () => {
    
        if (!userSelectedDate) return;
        
        if (countdownInterval) {
            clearInterval(countdownInterval);
          }
        startButton.disabled = true; 
        dateTimePicker.disabled = true;
        startCountdown(userSelectedDate);
      
      });





    
      
      function startCountdown(targetDate){
        countdownInterval = setInterval(() => {
            const now = new Date();
            const timeDifference = targetDate - now;


            if (timeDifference <= 0){
clearInterval(countdownInterval)
updateTimerDisplay(0, 0, 0, 0);
iziToast.success({
    title: "Finished",
    message: "Time's up!",
      });

      dateTimePicker.disabled = false;
startButton.disabled = true;
return;
     }    
        
     const { days, hours, minutes, seconds } = convertMs(timeDifference);
     updateTimerDisplay(days, hours, minutes, seconds);

        }, 1000);
      }








      function updateTimerDisplay(days, hours, minutes, seconds) {
        daysValue.textContent = String(days);
        hoursValue.textContent = addLeadingZero(hours);
        minutesValue.textContent = addLeadingZero(minutes);
        secondsValue.textContent = addLeadingZero(seconds);
      }







function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}



      function convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
      
        // Remaining days
        const days = Math.floor(ms / day);
        // Remaining hours
        const hours = Math.floor((ms % day) / hour);
        // Remaining minutes
        const minutes = Math.floor(((ms % day) % hour) / minute);
        // Remaining seconds
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
      
        return { days, hours, minutes, seconds };
      }
      
      console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
      console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
      console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
      