//= require 'blocks/metric_block'
SirTrevor.Blocks.Table = (function() {
  return Radiator.MetricBlock.extend({
    title: function() { return "Table"; },
    
    icon_name: "table",
    
    type: "table",

  });
})();
