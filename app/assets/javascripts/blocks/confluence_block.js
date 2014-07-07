
SirTrevor.Blocks.Confluence = (function() {
  return Radiator.Block.extend({
    title: function() { return "Confluence Feed"; },
    
    icon_name: "confluence",
    
    type: "confluence",

    metadata: function() {
      return this.text_field("url", "Page URL");
    },

  });
})();
