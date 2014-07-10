require 'radiator/config_parser'
require 'faraday_middleware'
module Blocks
  class GemnasiumBlock

    def initialize block
      @block = block
    end
    
    def self.config
      @config ||= Radiator::ConfigParser.new("config/gemnasium.yml").yml
    end
    
    def config
      self.class.config
    end
    
    def repo
      @block["repo"]
    end
    
    def client
      @client ||= begin
        c = Faraday.new "https://api.gemnasium.com/v1/" do |conn|
          conn.adapter  Faraday.default_adapter
          conn.response :json
        end
        
        c.basic_auth 'X', config[:api_key]
        c
      end 
    end
    
    def url
      "https://gemnasium.com/#{repo}"
    end

    def project
      client.get("projects/#{repo}").body
    end
    
    def alerts
      client.get("projects/#{repo}/alerts").body
    end
    
    def dependencies
      client.get("projects/#{repo}/dependencies").body
    end
  end
end
