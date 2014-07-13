
SirTrevor.Blocks.Embed = (function() {
  return Radiator.Block.extend({
    title: function() { return "Embed"; },
    
    icon_name: "embed",
    
    type: "embed",

    metadata: function() {
      return this.text_field("url", "URL");
    },

  });
})();
