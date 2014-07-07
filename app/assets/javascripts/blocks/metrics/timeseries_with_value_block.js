//= require 'blocks/metric_block'
SirTrevor.Blocks.TimeseriesWithValue = (function() {
  return Radiator.MetricBlock.extend({
    title: function() { return "Time Series with Value"; },
    
    icon_name: "graph",
    
    type: "timeseries_with_value",

  });
})();
