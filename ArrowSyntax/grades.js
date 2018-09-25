/* 
Requirements
Loop over an array of student grades (values from 50-100) and keep track of how many students get each grade in an object named grades.

A score of 50-60 is an F
A score of 61-70 is a D
A score of 71-80 is a C
A score of 81-90 is a B
A score of 91-100 is an A
Start with array of random scores in your JavaScript

Use console.info() to output the following criteria to the browser console.

How many of each grade? Accomplish this with a for..in loop.
What is the lowest score? Sort the array and find out.
What is the highest score?
Which grade had the most students achieve it? Use an if statment, and a currentGradeCount variable, in your for..in loop to see if the current grade's value is higher than the last one.
Which grade had the fewest students achieve it?
*/


const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60, 85, 83]
const gradeA = score => score > 90
const gradeB = score => score <= 90 && score > 80
const gradeC = score => score <= 80 && score > 70
const gradeD = score => score <= 70 && score > 60
const gradeF = score => score <= 60
console.log('A grades: ' + scores.filter(gradeA))
console.log('B grades: ' + scores.filter(gradeB))
console.log('C grades: ' + scores.filter(gradeC))
console.log('D grades: ' + scores.filter(gradeD))
console.log('F grades: ' + scores.filter(gradeF))
console.log('A grades: ' + scores.filter(gradeA).length)
console.log('B grades: ' + scores.filter(gradeB).length)
console.log('C grades: ' + scores.filter(gradeC).length)
console.log('D grades: ' + scores.filter(gradeD).length)
console.log('F grades: ' + scores.filter(gradeF).length)
console.log('The lowest score is: ' + scores.sort(function(a,b){return a - b}).slice(0, 1))
console.log('The highest score is: ' + scores.sort(function(a,b){return b - a}).slice(0, 1))
