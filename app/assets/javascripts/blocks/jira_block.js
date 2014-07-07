SirTrevor.Blocks.Jira = (function() {
  return Radiator.Block.extend({
    title: function() { return "Issue Feed"; },
    
    icon_name: "jira",
    
    type: "jira",

    metadata: function() {
      return this.text_field("url", "JIRA URL");
    },

  });
})();
