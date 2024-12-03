const delayTime = 3700;
const myString = `Hello! I'm dalayed for ${delayTime / 1000} second(s) text!`;

function delayedMessage(msg, time) {
  setTimeout(function () {
    console.log(msg);
  }, time);
}

delayedMessage(myString, delayTime);
