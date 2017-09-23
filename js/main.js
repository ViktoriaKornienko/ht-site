$('[data-box]').click(function () {
  console.log($(this).attr('data-box'));
  $('[data-item]').removeClass('active');
  $('[data-item='+$(this).attr('data-box')+']').addClass('active');
})
