module Blocks
  class GraphiteBlock
    
    def initialize block
      @block = block
    end
    
    def last_value
      current_data = data 
      current_data.first["datapoints"].reject { |(k,v)| k.nil? }.last[0]
    end
    
    def warning_value
      v = @block['warn'].to_i 
      v = Integer::MAX if v == 0
      v
    end
    
    def error_value
      v = @block['err'].to_i 
      v = Integer::MAX if v == 0
      v
    end
    
    def data
      client.get("render", { target: metrics.first, format: 'json' }).body
    end
    
    def client
      @client ||= Faraday.new url: "http://sulstats-raw.stanford.edu/render" do |conn|
        conn.adapter  Faraday.default_adapter
        conn.response :json
      end
    end
    
    def url
      "https://travis-ci.org/#{@block["repo"]}"
    end
    
    def metrics
      @block["metrics"].split("\n")
    end
    
  end
end
