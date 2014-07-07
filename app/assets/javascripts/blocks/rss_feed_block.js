SirTrevor.Blocks.RssFeed = (function() {
  return Radiator.Block.extend({
    title: function() { return "RSS Feed"; },
    
    icon_name: "rss",
    
    type: "rss_feed",

    metadata: function() {
      return this.text_field("url", "RSS/Atom URL");
    },

  });
})();
