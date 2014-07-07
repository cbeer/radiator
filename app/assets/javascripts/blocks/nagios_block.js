SirTrevor.Blocks.Nagios = (function() {
  return Radiator.Block.extend({
    title: function() { return "Nagios Alerts"; },
    
    icon_name: "nagios",
    
    type: "nagios",

    metadata: function() {
      return this.text_field("url", "Nagios URL");
    },

  });
})();
