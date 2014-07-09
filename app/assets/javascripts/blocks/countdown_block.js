
SirTrevor.Blocks.Countdown = (function() {
  return Radiator.Block.extend({
    title: function() { return "Countdown"; },
    
    icon_name: "countdown",
    
    type: "countdown",


    metadata: function() {
      return this.text_field("title", "Title") + this.text_field("until", "Until");
    },
  });
})();
