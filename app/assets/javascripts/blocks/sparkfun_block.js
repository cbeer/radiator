
SirTrevor.Blocks.Sparkfun = (function() {
  return Radiator.Block.extend({
    title: function() { return "Sparkfun Data"; },
    
    icon_name: "sparkfun",
    
    type: "sparkfun",

    metadata: function() {
      return this.text_field("title", "Title") + this.text_field("url", "URL");
    },

  });
})();
