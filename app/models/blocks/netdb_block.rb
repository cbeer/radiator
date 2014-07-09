module Blocks
  class NetdbBlock
    
    def initialize block
      @block = block
    end
    
    def host
      @block["host"]
    end
    
    def response
      @response ||= client.post('lookup.cgi', machine: host)
    end
    
    def profile
      response.body
    end

    def client
      @client ||= Faraday.new url: 'https://web.stanford.edu/group/networking/cgi-bin/stanford-what/'
    end
    
  end
end
