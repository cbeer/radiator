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
    
    var update_sparkfun_widgets = function() {
      $('.sparkfun-block .value').each(function() {
        var that = $(this);
        $.ajax({
          url: $(this).data('source'),
          jsonp: 'callback',
          cache: true,
          dataType: 'jsonp',
          data: {
            page: 1
          },
          success: function(response) {
            // response will be a javascript
            // array of objects
            var dl = $('<dl>');
            dl.addClass('dl-horizontal');
            
            Object.keys(response[0]).forEach(function (key) { 
              if (key == "timestamp") {
                return;
              }
              var value = response[0][key]
              dl.append($('<dt>').text(key));
              dl.append($('<dd>').text(value));
            });
            
            that.html(dl);
          }
        });
      });
    }
    var sparkfun_timer = $.timer(update_sparkfun_widgets);
    
    timer.set({ time : 60000, autostart : true });
    update_sparkfun_widgets();

  });
  
});


function addTitleToSirTrevorBlock(block){
  block.$inner.append("<div class='st-title'>" + block.title() + "</div>");
};
