const nameInput = localStorage.getItem('nameInput');
const ageInput = localStorage.getItem('ageInput');
const genderInput = localStorage.getItem('genderInput');
const weightInput = parseFloat(localStorage.getItem('weightInput'));
const activityInput = localStorage.getItem('activityInput');
const timeInput = parseFloat(localStorage.getItem('timeInput'));


function calculateCaloriesBurnt(MET){
  const caloriesBurntTotal=(MET*weightInput*timeInput);
  console.log(caloriesBurntTotal);
  return caloriesBurntTotal;
}

document.querySelector('.name').innerHTML=nameInput;

let caloriesBurnt;
switch( activityInput ) {
  case 'Slow_pace':
    caloriesBurnt=calculateCaloriesBurnt(2.0);
    document.querySelector('.calories').innerHTML=caloriesBurnt.toFixed(2);
    
    break;
  case 'Average_pace':
    caloriesBurnt=calculateCaloriesBurnt(2.8);
    document.querySelector('.calories').innerHTML=caloriesBurnt.toFixed(2);
    break;
  case 'Brisk_pace':
     caloriesBurnt=calculateCaloriesBurnt(3.5);
    document.querySelector('.calories').innerHTML=caloriesBurnt.toFixed(2);
    break;
  case 'Race_walking':
    caloriesBurnt=calculateCaloriesBurnt(5.0);
    document.querySelector('.calories').innerHTML=caloriesBurnt.toFixed(2);
    break;
  case 'Running6':
    caloriesBurnt=calculateCaloriesBurnt(6.0);
    document.querySelector('.calories').innerHTML=caloriesBurnt.toFixed(2);
    break;
  case 'Running8':
    caloriesBurnt=calculateCaloriesBurnt(8.3);
    document.querySelector('.calories').innerHTML=caloriesBurnt.toFixed(2);
    break;
  case 'Running10':
    caloriesBurnt=calculateCaloriesBurnt(9.8);
    document.querySelector('.calories').innerHTML=caloriesBurnt.toFixed(2);
    break;
  default:
      document.querySelector('.Result-js').innerHTML='No activity selected'

}

//Removing all the local storage items
localStorage.removeItem('nameInput');
localStorage.removeItem('ageInput');
localStorage.removeItem('genderInput');
localStorage.removeItem('weightInput');
localStorage.removeItem('activityInput');
localStorage.removeItem('timeInput');