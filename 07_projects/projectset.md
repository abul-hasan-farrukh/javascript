# Projects related to DOM.

## Links of Projects

[1st Project -> Click Here](https://dom-project-chaiaurcode-nlcxg1wx.stackblitz.io/1-colorChanger/index.html)

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