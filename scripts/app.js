$(function() {
    var index = 1;
    $('.nav a').each(function() {
        if (jQuery(this).attr('href')  ===  window.location.pathname) {
          index = $(this).attr('index');
          $(this).attr('style', 'color: #333');
        }
    });    
    
    $('.navbar').hoverline({
      'start': index,
      'height': '3px',
      'color': '#60ABC1',
      'borderwidthside': '0px',
      'borderwidthtop': '0px'
    });
});

