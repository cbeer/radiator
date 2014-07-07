SirTrevor.Blocks.Releaseboard = (function() {
  return Radiator.Block.extend({
    title: function() { return "Releases"; },
    
    icon_name: "releaseboard",
    
    type: "releaseboard",

    metadata: function() {
      return this.text_field("url", "Releaseboard URL");
    },

  });
})();
