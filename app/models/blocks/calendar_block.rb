module Blocks
  class CalendarBlock
    
    delegate :events, to: :cal
    def initialize block
      @block = block
    end
    
    def url
      @block["url"]
    end
    
    def response
      @response ||= Faraday.get(url)
    end
    
    def body
      response.body
    end
    
    def cal
      Icalendar.parse(body).first
    end
    
  end
end
