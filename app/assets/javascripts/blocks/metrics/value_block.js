//= require 'blocks/metric_block'
SirTrevor.Blocks.Value = (function() {
  return Radiator.MetricBlock.extend({
    title: function() { return "Value"; },
    
    icon_name: "graph",
    
    type: "value",

    sidebar: function() {
        return this.text_field("min", "Minimum") + 
            this.text_field("warn", "Warning") + 
            this.text_field("err", "Error");
    }
  });
})();
