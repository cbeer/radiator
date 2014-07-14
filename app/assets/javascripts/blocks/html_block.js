SirTrevor.Blocks.Html = (function() {
  return Radiator.Block.extend({  
    
    title: function() { return "HTML"; },
    
    icon_name: "html",
    
    type: "html",

    id_key:"html",
    
    metadata: function() {
      return ['<div class="form-group">',
      '<label for="<%= formId(id_key) %>" class="control-label">HTML</label>',
      '<div class="field">',
        '<textarea rows="3" name="<%= id_key %>" class="st-input-string form-control <%= type %>" id="<%= formId(id_key) %>">',
        '</textarea>',
      '</div>',
    '</div>'
    ].join("\n")
  },
  
  sidebar: function() {
      return this.text_field("refresh", "Refresh interval (m)");
  }

    
  });
})();
