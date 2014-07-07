//= require radiator
(function ($){
  Radiator.MetricBlock = Radiator.Block.extend({  
    id_key:"metrics",
    title_key:"title",
    
    header: function() {
      return "This widget embeds a graph";
    },
    
    metadata: function() {
      return this.text_field(this.title_key, "Title") + this.metrics()
    },
    
    metrics: function() {
      return ['<div class="form-group">',
      '<label for="<%= formId(id_key) %>" class="control-label">Metrics</label>',
      '<div class="field">',
        '<textarea rows="3" name="<%= id_key %>" class="st-input-string form-control <%= type %>" id="<%= formId(id_key) %>">',
        '</textarea>',
      '</div>',
    '</div>'
    ].join("\n")
    }
    
  })
      
})(jQuery);
