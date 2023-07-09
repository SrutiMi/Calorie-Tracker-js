# Calorie-Tracker-js
This repository contains a simple web application that calculates the calories burnt based on user input. Users can enter their personal information such as name, age, gender, and weight, and select an activity and duration. The application then calculates the calories burnt for the chosen activity and displays the result on the screen.

## Explanation of code
- ### Retrieving User Input
We use the `localStorage.getItem(key)` function to retrieve previously stored user input values from the browser's local storage. The values are stored in variables such as nameInput, ageInput, genderInput, weightInput, activityInput, and timeInput.

- ### Calculate Calories Burnt
The `calculateCaloriesBurnt(MET)` function takes a MET value as input and calculates the calories burnt based on the user's weight and duration. The result is logged to the console and returned.

- ### Displaying Results
We use a switch statement to determine the selected activity (activityInput) and call the calculateCaloriesBurnt function with the corresponding MET value. The calculated calories burnt are displayed on the web page using the `innerHTML` property.

- ### Local Storage Cleanup
After displaying the results, we remove all the stored input values from the local storage using the `localStorage.removeItem(key)` function. This clears the local storage for future calculations.

The usage of localStorage allows the application to remember and retrieve user input data even if the page is refreshed or reopened.
