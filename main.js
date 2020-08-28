$(function(){

  $('#hdr').on('click', function(){
    $('.mobile').addClass('open')
  })
  $('.mobile').on('click', function(){
    $('.mobile').removeClass('open')
  })
/*
  $('.mobile_items a').on('click', ()=>{
  //  console.log(e.target.id);
    $('.big_i').hide();
  })

  $('.mobile__items a').on('click', e=>{
    var id=e.target.id
  //  var this_id= this.id
    console.log(id);
  //  alert(id)
})*/
})
