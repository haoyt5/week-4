//(1)function declaration
function showSurprise() {
   surpriseSection.textContent = '🎉 Surprise! 🎉';
}
// (2)function expression
const showSurprise= function() {
   surpriseSection.textContent = '🎉 Surprise! 🎉';
}
// (3) anonymous function -1
function() {
   surpriseSection.textContent = '🎉 Surprise! 🎉';
}

//(4)make anonymous function-2
setTimeout(function() {
   surpriseSection.textContent = '🎉 Surprise! 🎉';
},randomTime);
//(5) make anonymous function-3
setTimeout(()=> {
   surpriseSection.textContent = '🎉 Surprise! 🎉';
},randomTime);
//(6) make anonymous function-4
setTimeout(()=>surpriseSection.textContent = '🎉 Surprise! 🎉',randomTime);