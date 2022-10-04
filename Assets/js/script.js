

$(".saveBtn").on("click", function (){
var time = $(this).attr('data-hr')
var description = $(this).parent().siblings('td').children().val()



console.log(time);
console.log(description);

localStorage.setItem(time, description);
});

$('#nineAm').val(localStorage.getItem('9'));
$('#tenAm').val(localStorage.getItem('10'));
$('#elevenAm').val(localStorage.getItem('11'));
$('#twelvePm').val(localStorage.getItem('12'));
$('#onePm').val(localStorage.getItem('1'));
$('#twoPm').val(localStorage.getItem('2'));
$('#threePm').val(localStorage.getItem('3'));
$('#fourPm').val(localStorage.getItem('4'));
$('#fivePm').val(localStorage.getItem('5'));