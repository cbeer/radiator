SirTrevor.Blocks.Travis = (function() {
  return Radiator.Block.extend({
    title: function() { return "Travis-CI"; },
    
    icon_name: "travis",
    
    type: "travis",

    metadata: function() {
      return this.text_field("repo", "Repository") + this.text_field("branch", "Branch");
    },

  });
})();
