/*Walking:

2.0 MET: Slow pace (<2 mph)
2.8 MET: Average pace (2-3 mph)
3.5 MET: Brisk pace (3-4 mph)
4.3 MET: Very brisk pace (4-5 mph)
5.0 MET: Racewalking (>5 mph)
Running:

6.0 MET: Running (6 mph)
8.3 MET: Running (8 mph)
9.8 MET: Running (10 mph)

Calories Burned = (MET x Body Weight in kg x Duration in hours)
*/

//redirecting to a page if sumbit button is clicked

const form = document.querySelector('.form');

console.log(form);
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

 if (!form.checkValidity()) {
    // Check form validity using the checkValidity() method of the form element
    alert('Please fill in all required fields.');
  } else {

    //getting and storing the values of the input fields

    const nameInput = form.elements.name.value;
    const ageInput = form.elements.age.value;
    const genderInput = form.elements.gender.value;
    const weightInput = form.elements.weight.value;
    const activityInput = form.elements.activity.value;
    const timeInput = form.elements.time.value;


     localStorage.setItem('nameInput', nameInput);
      localStorage.setItem('ageInput', ageInput);
      localStorage.setItem('genderInput', genderInput);
      localStorage.setItem('weightInput', weightInput);
      localStorage.setItem('activityInput', activityInput);
      localStorage.setItem('timeInput', timeInput);


    window.location.href = "result.html"; // Redirect to the result page
  }
});
