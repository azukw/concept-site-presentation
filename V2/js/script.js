$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:false,
      pager: false,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  });  
});