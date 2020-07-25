// Make it so that the initialize function can only be called once!
let view;
function initialize() {
  let called = 0;
  return function () {
    if (called > 0) {
      return;
    } else {
      called++;
      view = '🏔';
      console.log('view has been set!');
    }
  };
}

const startOnce = initialize();
startOnce();
startOnce();

console.log(view);

const array = [1, 2, 3, 4];
console.log('With iife')
for (var i = 0; i < array.length; i++) {
  (function (closureI) {
    setTimeout(function () {
      console.log('I am at index ' + array[closureI]);
    }, 3000);
  })(i);
}

// OR
const array2 = [1, 2, 3, 4];
console.log('With block scoping')
for (let i = 0; i < array2.length; i++) {
  setTimeout(function () {
    console.log('I am at index ' + array2[i]);
  }, 3000);
}
