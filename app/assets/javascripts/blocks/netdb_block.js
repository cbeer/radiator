SirTrevor.Blocks.Netdb = (function() {
  return Radiator.Block.extend({
    title: function() { return "NetDB"; },
    
    icon_name: "netdb",
    
    type: "netdb",

    metadata: function() {
      return this.text_field("host", "Host");
    },

  });
})();
