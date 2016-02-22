//Project Euler problem #1 - Derek Lo
/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

var counter = 1;
var sum = 0;
while (counter < 1000) {
	if(counter % 3 == 0 || counter % 5 == 0) {
	sum += counter;
	}
	counter++;
}
document.write(sum);