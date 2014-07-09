module Blocks
  class HuginnBlock
    
    def initialize block
      @block = block
    end
    
    def webhook_id
      @block["webhook_id"].to_i
    end
    
    def data
      DataSink.where(webhook_id: webhook_id).order('created_at desc').limit(5)
    end
    
    def payload
      data.first.data[:payload]
    end
  end
end
