//1. When the button with id "btn-two-para" is clicked, animate the paragraph with id "paragraph-one" so that the font size changes to 5em and there is a padding of 25px.

$('#btn-two-para').click(function(){
    $('#paragraph-one').animate(
        {
            fontSize: '5em',
            padding: '25px'
        }
    )
})

//2. When the button with id "btn-one-painting" is clicked, animate the image with id "painting-one" so that the opacity becomes 0.5 and the width increases by 100px.

$('#btn-one-painting').click(function(){
    $('#painting-one').animate(
        {
            opacity: 0.5,
            width: '100%'
        }
    )
})



//3. When the button with id "btn-two-painting" is clicked, animate the image with id "painting-two" so that the image fades out over 1000 milliseconds and then fades in at a "slow" speed.

$('#btn-two-painting').click(function(){
    $('#painting-two').fadeOut(1000)
    $('#painting-two').fadeIn('slow')
})