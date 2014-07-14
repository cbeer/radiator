//= require 'blocks/metric_block'
SirTrevor.Blocks.Timeseries = (function() {
  return Radiator.MetricBlock.extend({
    title: function() { return "Time Series"; },
    
    icon_name: "graph",
    
    type: "timeseries",

    sidebar: function() {
        return this.text_field("from", "From");
    }
  });
})();
