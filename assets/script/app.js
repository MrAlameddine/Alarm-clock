'use strict';

import {select, getElement, onEvent} from "./utils.js"; 
let curntlyTIme;

function updateCurrentTime() {
  const now = new Date();
  document.getElementById('curntly-time').textContent = curntlyTIme;
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
 
  curntlyTIme=(`${hours}:${minutes}`)
  if(minutes===getElement('minute').value && hours===getElement('hour').value){
    playAlarm()
  }
}

// Update the time every second
setInterval(updateCurrentTime, 1000);

// Function to validate and set alarm
function setAlarm() {
  const hour = getElement('hour').value;
  const minute = getElement('minute').value;
  const button = document.getElementById('button');
  const feedbackElement = document.querySelector('.setting-analarm');

  // Check if hour and minute are numbers and within range
  if (!isNaN(hour) && hour >= 0 && hour < 24 && !isNaN(minute) && minute >= 0 && minute < 60) {
      feedbackElement.textContent = `Alarm set for ${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;
      button.classList.remove('error');
     
      
  } 
   else {
      feedbackElement.textContent = 'Please add a correct value';
      button.classList.add('error');
      getElement('hour').value = '';
      getElement('minute').value = '';
  }
}
setAlarm()
document.getElementById('button').addEventListener('click', setAlarm);

setInterval(updateClock, 1000);
updateClock(); 

function playAlarm() {
  const sound = new Audio('./assets/sound/alarm.mp3')
  sound.type='audio/mp3';
  sound.loop = true;
  sound.play();
  alarmTime = null;
}