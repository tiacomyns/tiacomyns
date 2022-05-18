// Bubble hide on click. 
$(document).ready(function() {
  let bubble = $('.bubble')
  bubble.each(function() {
    bubble.click(function() {
      $(this).addClass('hide')
    })
  })
})