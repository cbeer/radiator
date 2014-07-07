SirTrevor.Blocks.GithubEvents = (function() {
  return Radiator.Block.extend({
    title: function() { return "Github Event Feed"; },
    
    icon_name: "github_events",
    
    type: "github_events",

    metadata: function() {
      return this.text_field("url", "Repository URL");
    },

  });
})();
