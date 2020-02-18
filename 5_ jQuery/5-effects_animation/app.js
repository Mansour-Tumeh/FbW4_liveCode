$(document).ready(()=>{
    $('#btnFadeOut').click(()=>{
        $('#box').fadeOut(3000, ()=>{
            $('#btnFadeOut').text("It's Gone")
        })
    })

    $('#btnFadeIn').click(()=>{
        $('#box').fadeIn(2000)
    })

    $('#btnFadeTog').click(()=>{
        $('#box').fadeToggle(1000)
    })

    $('#btnSlideUp').click(()=>{
        $('#box').slideUp(1000)
    })

    $('#btnSlideDown').click(()=>{
        $('#box').slideDown(1000)
    })

    $('#btnSlideTog').click(()=>{
        $('#box').slideToggle(3000)
    })

    $('#btnStop').click(()=>{
        $('#box').stop()
    })

    $('#moveRight').click(()=>{
        $('#box2').animate({
            left:200,
            height:'300px',
            width:'300px',
            opacity:'0.5'
        })
    })
     $('#moveLeft').click(()=>{
        $('#box2').animate({
            left:0,
            height:'100px',
            width:'100px',
            opacity:'1'
        })
    })

    $('#moveAround').click(()=>{
       let box =  $('#box2')
       box.animate({
           left:300
       })
       box.animate({
        top:300
    })
    box.animate({
        left:0
    })
    box.animate({
        left:0,
        top:0
    })
    })
})