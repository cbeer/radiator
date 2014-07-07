require 'uri'
module Blocks
  class GithubBlock
    def initialize block
      @block = block
    end
    
    def client
      Octokit.configure do |c|
        c.default_media_type = 'application/vnd.github.v3.html+json'
      end
      
      @client ||= Octokit::Client.new
    end
    
    def url
      @block["url"]
    end
    
    def uri
      URI(url)
    end
    
    def repository
      uri.path.split("/")[1..2].join("/")
    end
    
    def organization
      uri.path.split("/")[1]
    end
    
    def events
      if repository != organization
        repository_events
      else
        organization_events
      end
    end
    
    def organization_events
      @organization_events ||= client.organization_public_events organization
    end
    
    def repository_events
      @repository_events ||= client.repository_events repository
    end
  end
end
