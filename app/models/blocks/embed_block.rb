module Blocks
  class EmbedBlock
    
    delegate :html, to: :embed
    def initialize block
      @block = block
    end
    
    def url
      @block["url"]
    end

    def embed
      @embed ||= OEmbed::Providers.get(url)
    end
  end
end
