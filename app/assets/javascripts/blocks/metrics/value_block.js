//= require 'blocks/metric_block'
SirTrevor.Blocks.Value = (function() {
  return Radiator.MetricBlock.extend({
    title: function() { return "Value"; },
    
    icon_name: "graph",
    
    type: "value",

    sidebar: function() {
        return text_field("min", "Minimum") + 
            text_field("warn", "Warning") + 
            text_field("err", "Error");
    }
  });
})();
