$(function(){
  
  Radiator.onLoad(function() {
    if ($('.sir-trevor-area').length > 0) {
      var editor = new SirTrevor.Editor({ el: $('.sir-trevor-area') });
      
      
      SirTrevor.EventBus.on('block:create:new', addTitleToSirTrevorBlock);
      SirTrevor.EventBus.on('block:create:existing', addTitleToSirTrevorBlock);
    }

    $('.carousel').carousel();
    
    function pad (str, max) {
      str = str.toString();
      return str.length < max ? pad("0" + str, max) : str;
    }

    var update_timer_widget = function() {
      $('.countdown-block .countdown').each(function() {
        var dt = moment($(this).attr('datetime'));
        if(moment().isAfter(dt)) {
          $(this).parent().addClass('alert alert-danger');
          $(this).html('');
        } else if(moment().add('minutes', 15).isAfter(dt)) {
          var s = dt.diff(moment(), 'seconds');
          $(this).html(Math.floor(s/60) + ":" + pad((s % 60), 2));
        } else {
          $(this).html($('<span>').text(moment().from(dt, true)));  
        }
      });
    };

    var timer = $.timer(update_timer_widget);
    
    timer.set({ time : 1000, autostart : true });
    update_timer_widget();
    
    var $container = $('.autopacked-container');
      // init
      $container.packery({
        itemSelector: '.block',
        columnWidth: 15,
        gutter: 15,
        rowHeight: 60
      });
      
  });
  
});


function addTitleToSirTrevorBlock(block){
  block.$inner.append("<div class='st-title'>" + block.title() + "</div>");
};
