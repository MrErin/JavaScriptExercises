//1. On page load, hide the unordered list with class "item-list".
$('.item-list').hide()
  
//2. When a user hovers over the h3 element with id "toggle-header", use the toggle jQuery method to show/hide the list with class "item-list".

$('#toggle-header').hover(function (){
    $('.item-list').toggle()
})

  
//3. Add a event listener to the input field with id "keypress-input" so that on keypress, the value in the input field is displayed in the div with id "output-target".

$('#keypress-input').keypress(function(){
    $('#output-target').html($('#keypress-input').val())
})

  
//4. When the mouse moves anywhere on the article with class "main-article", log to the console "The mouse is moving!".

$('.main-article').mouseover(function(){
    console.log('The mouse is moving!')
})