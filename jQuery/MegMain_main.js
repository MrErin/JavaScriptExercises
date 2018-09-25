//the $ is showing that you are accessing the jQuery library, otherwise the javascript engine will not know how to interpret that line of code

//objects are variables, but can contain many values. Objects have PROPERTIES and VALUES and the values can be any type of data, including a function. When an object has a property with the value of a function, the function is called a METHOD

//what is the difference between a function and a method? Why do we keep calling these things methods in jQuery?


function biography(firstName, lastName, favoriteDrink) {
  console.log(
    firstName + ' ' + lastName + "'s "+ 'favorite drink is ' + favoriteDrink
  );
}
biography('Meg', 'Ducharme', 'coffee or peppermint tea');



let person = {
  firstName: 'Meg',
  lastName: 'Ducharme',
  favoriteDrink: 'coffee or peppermint tea'
};

function biography(person) {
  console.log(
    person.firstName + ' ' + person.lastName + "'s " + 'favorite drink is ' + person.favoriteDrink
  );
}
biography(person);


// let person2 = {
//   firstName: 'Meg',
//   lastName: 'Ducharme',
//   age: 30,
//   speak: function(message) {
//     console.log(message);
//   },
//   favoriteDrink: 'coffee'
// };


//how would you call the method?


/////////ATTRIBUTES///////////
//attributes are very important to us as developers, they allow us to target an element on the DOM (html) and change it's styling, or listen for an event on an element. You can also create custom attributes, but we are not going to cover that tonight.


///////one argument to css
// $('#wrapper').css('margin', 100)
// $('#wrapper').css('width', '50%')


///////append
// $('#para_2').append(' Hello from the end of paragraph two!');


///////how to append another list element to the unordered list?
// $('.lesson').append('<li class='topic'>How to append things!</li>');
// $('.topic').css('color', 'purple');


//////target the :nth-child
// $('.lesson li:nth-child(4)').css('color', 'pink');


//////two arguments to css/why you need quotes
// $('.bacon').children().css('color', 'red')
// $('.bacon').children().css('background-color', 'brown')

// $('.bacon').children().css(
//   {
//     color: 'red',
//     'background-color': 'brown',
//     'text-shadow': 'white 2px 2px'
//   }
// );


//////another way to query - more complex css selector
// $('.bacon a').css(
//   {
//   color: 'blue',
//   'background-color': 'white'
//   }
// );


//////more of what you've been doing - create an element and give it text
// let para2 = document.getElementById('para_2');
// let buttonEl = document.createElement('button');
// buttonEl.textContent = 'I am a button!';
// para2.appendChild(buttonEl);


// let $button1 = $('<button></button>').text('I am a button!');
// $('#para_2').append($button1);


// $('#para_2').append('<button>I am a button!</button>');


//////how to get the text of a specific element
// let topics = $('.topic').text();
// if (topics.includes('Event')) {
//   $('#output').text('Write less, do more!');
//   $('#output').css('font-size', '75');
// }

// $('.topic').each(function(){
  //   $(this).css('color', 'blue');
  // });
  
// $('.topic').addClass('blue');


//////getting the value of an input element
// $('#coffee').click(function() {
//   let coffeeShop = $('#bestCoffee').val();
//   $('#output').text(coffeeShop);
// });




////////////////////////////////////////
////////////////////////////////////////
////////////Lightening Challenge////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////


  
  

////////////EVENT LISTENERS/////////////
// $('#fun').change(function() {
//   $('#output2').html('<h1>Great!</h1>');
// });


// $('#color').dblclick(function() {
//   $('#color').css('backgroundColor', 'red');
// });


// $('#clickMe').click(function() {
//   $('#output3').html('<h1>Time for a Lightening Challenge!</h1>');
// });

  
// $(window).scroll(function(){
  //   $('body').css('background-color', 'red').fadeOut('slow')
  //   $('body').css('background-color', 'white').fadeIn('slow')
  // })
  


///////////Event Delegation////////////
// $('#para_2').append('<button class="submit">Submit</button>');

// $('#para_2').on('click', 'button', function(){
//   alert('I just clicked on the submit button!');
// });
  


////////////////////////////////////////
////////////////////////////////////////
///////////Lightening Challenge/////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////



//////////////Animations///////////////

// $('#sleepy').click(function() {
//   $('#sleepy').fadeOut('fast');
// });

  
// $('#wakeUp').click(function() {
//   $('#wakeUp').animate(
//     {
//       fontSize: '+=50'
//     },
//     2000
//   );
// });
  

// $('#bee').click(function() {
//   animate();
// });
  

// function animate() {
//   $('#bee').animate(
//     {
//       marginLeft: '100%',
//       width: '+=300',
//       opacity: 0
//     },
//     100,
//     function() {
//       $('#bee').animate(
//         {
//           marginLeft: 0,
//           width: '-=300',
//           opacity: 1
//         },
//         3000,
//         animate
//       );
//     }
//   );
// }


///////AJX and the jQuery CDN///////