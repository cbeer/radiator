SirTrevor.Blocks.Gemnasium = (function() {
  return Radiator.Block.extend({
    title: function() { return "Gemnasium"; },
    
    icon_name: "gemnasium",
    
    type: "gemnasium",

    metadata: function() {
      return this.text_field("repo", "Repository");
    },

  });
})();
