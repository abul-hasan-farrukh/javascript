# Projects related to DOM.

## Links of Projects

[1st Project -> Click Here](https://dom-project-chaiaurcode-nlcxg1wx.stackblitz.io/1-colorChanger/index.html)

## Project 1 Solution:

``` javascript
const buttons = document.querySelectorAll('.button');
console.log(buttons);

const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    //when the event happens, we have to carry it with a name like "e" or "event" etc.
    console.log();
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
  });
});

```

## Project 2 Solution:

``` javascript 

const form = document.querySelector('form');

//extracting the value here will give us empty value.
//const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(1);

    // showing the result below with BMI category
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi}</span><br>Under Weight`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>${bmi}</span><br>Normal Range`;
    } else {
      results.innerHTML = `<span>${bmi}</span><br>Overweight`;
    }
  }
});


```

## Project 3 Solution:

``` 
const clock = document.querySelector('#clock');

//setInterval() is used to control events in JS, it accepts two parameters, a method and an interval or time to make that method run till specified time.
setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

