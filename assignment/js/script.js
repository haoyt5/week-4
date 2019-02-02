/*  Assignment 1:Callback Function
	Hint:​ You should use ​window.setTimeout()​ for time scheduling.
*/

function delayedResult(n1, n2, delayTime, callback){
// your code here
 	let result = n1 + n2
 	window.setTimeout(() => {callback(result)}, delayTime);
}
delayedResult(4, 5, 3000, function(result){
console.log(result);
});
delayedResult(-5,10, 2000, function(result){
window.alert(result);
});


// let threesecond = ('3 seconds');
// let delayTime = 3000; 
// window.setTimeout(() => {console.log(threesecond);}, delayTime);
// let twosecond = ('2 seconds');
// let delayTime2 = 2000; 
// window.setTimeout(() => {window.alert(twosecond);}, delayTime2);
