var guess;
var thinking;
guess = Math.ceil(Math.random()*1000);
thinking = window.prompt("Enter some number between 1 to 1000:");
while (guess != thinking) {
  if (guess < thinking) {
    thinking = window.prompt('Your guess is too high.Try again');
  }
    else {
      thinking = window.prompt('Your guess is too low.Try again');
    }
  }
window.alert('Success');
