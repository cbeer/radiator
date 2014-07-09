SirTrevor.Blocks.Huginn = (function() {
  return Radiator.Block.extend({
    title: function() { return "Huginn Endpoint"; },
    
    icon_name: "huginn",
    
    type: "huginn",

    metadata: function() {
      return this.text_field("webhook_id", "Webhook Endpoint ID");
    },

  });
})();
