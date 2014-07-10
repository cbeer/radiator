class Dashboard < ActiveRecord::Base
  def sir_trevor
    @hash ||= begin
      hash = JSON.parse(content)
      return false unless hash.has_key?("data")
      hash["data"]
    end
  end
end
