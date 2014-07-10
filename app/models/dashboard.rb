class Dashboard < ActiveRecord::Base
  before_save do
    content_hash["data"].each do |x|
      x['data']['id'] ||= SecureRandom.hex(8)
    end
    self.content = content_hash.to_json
  end
  
  def content_hash
    @content_hash ||= JSON.parse(content)
  end
  
  def content= *args
    super
    @content_hash = nil
  end
  
  def sir_trevor
    @hash ||= begin
      return false unless content_hash.has_key?("data")
      content_hash["data"]
    end
  end
  
  def widget id
    content_hash["data"].select { |x| x['data']['id'] == id }.first
  end
end
