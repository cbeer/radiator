
SirTrevor.Blocks.Cal = (function() {
  return Radiator.Block.extend({
    title: function() { return "Cal Feed"; },
    
    icon_name: "cal",
    
    type: "cal",

    metadata: function() {
      return this.text_field("url", "Cal URL");
    },

  });
})();
