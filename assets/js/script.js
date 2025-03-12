$(".openbtn1").click(function () {
  $(this).toggleClass('active')
  $('.nav-sp').toggleClass('open')
})

$(".nav-sp a").click(function () {
  $(this).parent().parent().parent().parent().toggleClass('open')
  $(".openbtn1").toggleClass('active')
})