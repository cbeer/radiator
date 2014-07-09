module Blocks
  class TravisBlock
    
    delegate :green?, :last_build, to: :repo
    def initialize block
      @block = block
    end
    
    def repo
      @repo ||= Travis::Repository.find @block["repo"]
    end
    
    def url
      "https://travis-ci.org/#{@block["repo"]}"
    end
    
  end
end
