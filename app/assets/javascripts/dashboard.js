$(function(){
  
  Radiator.onLoad(function() {
    if ($('.sir-trevor-area').length > 0) {
      var editor = new SirTrevor.Editor({ el: $('.sir-trevor-area') });
      
      
      SirTrevor.EventBus.on('block:create:new', addTitleToSirTrevorBlock);
      SirTrevor.EventBus.on('block:create:existing', addTitleToSirTrevorBlock);
    }
    
  });
});


function addTitleToSirTrevorBlock(block){
  block.$inner.append("<div class='st-title'>" + block.title() + "</div>");
};
