SirTrevor.Blocks.Github = (function() {
  return Radiator.Block.extend({
    title: function() { return "Github Feed"; },
    
    icon_name: "github",
    
    type: "github",

    metadata: function() {
      return this.text_field("url", "Repository URL");
    },

  });
})();
