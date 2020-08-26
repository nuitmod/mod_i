$(function(){

  $('#hdr').on('click', function(){
    $('.mobile').addClass('open')
  })
  $('.mobile').on('click', function(){
    $('.mobile').removeClass('open')
  })

  $('.big_i').hide();
  $('.show').on('click', e=>{
    console.log(e.target.id);
    $('.big_i').show()
  })

  $('.mobile__items a').on('click', e=>{
    var id=e.target.id
    var this_id= this.id
    console.log(id); console.log(this_id);
    alert(id)
  })

})
