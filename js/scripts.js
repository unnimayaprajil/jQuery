// const fadeOutFun=()=>{
//     $('h2').fadeOut()
// }

$(document).ready(()=>{
    $('#btn1').click(()=>{
        $('h2').fadeIn(3000)
    })
    $('#btn2').click(()=>{
        $('h2').fadeOut(3000)
    })
    $('#btn3').click(()=>{
        $('h2').fadeToggle(3000)
    })
    $('#btn4').click(()=>{
        $('h2').hide(3000)
    })
    $('#btn5').click(()=>{
        $('h2').show(3000)
    })
    $('#btn6').click(()=>{
        $('h2').toggle(3000)
    })
    $('#btn7').click(()=>{
        $('h2').slideUp(3000)
    })
    $('#btn8').click(()=>{
        $('h2').slideDown(3000)
    })
    $('#btn9').click(()=>{
        $('h2').slideToggle(3000)
    })
        
    
})
