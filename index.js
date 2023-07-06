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
const form = document.querySelector('form');
const submit= document.querySelector('.submit');

submit.addEventListener('click',(e)=>{
    if (!form.checkValidity()) { //checks the form validity using the checkValidity() method of the form element
        e.preventDefault(); // Prevent form submission
        alert('Please fill in all required fields.');
      } else {
        window.location.href = "result.html"; // Redirect to the result page
      } 
   
})
