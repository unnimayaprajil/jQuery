// const fadeOutFun=()=>{
//     $('h2').fadeOut()
// }

$(document).ready(() => {
    $('#btn1').click(() => {
        $('.myDiv>p').text("Text changed")
    })
    $('#btn2').click(() => {
        let a = $('.myDiv>p').text()
        alert(a)
    })
    $('#btn3').click(() => {
        let a = $('.myDiv').html()
        alert(a)
    })
    $('#btn4').click(() => {
        let a = $('.myDiv').attr('class')
        alert(a)
    })
    $('#btn5').click(() => {
        let a = $('.myDiv>p').css('padding')
        alert(a)
    })
    $('#btn6').click(() => {
        $('.myDiv').append('<p>Hellooo 3</p>')

    })
    $('#btn7').click(() => {
        $('.myDiv').prepend('<p>Hellooo 4</p>')

    })
    $('#btn8').click(() => {
        $('.myDiv').after('<p>Hellooo 5</p>')

    })
    $('#btn9').click(() => {
        $('.myDiv').before('<p>Hellooo 6</p>')

    })
    $('#btn10').click(() => {
        $('.myDiv').remove()

    })
    $('#btn11').click(() => {
        $('.myDiv').empty()

    })
    $('#btn12').click(() => {
        $('.myDiv').addClass('bg-primary')

    })
    $('#btn13').click(() => {
        $('.myDiv').removeClass('bg-primary')

    })
    $('#btn14').click(() => {
        $('.myDiv').toggleClass('bg-primary')

    })
})
