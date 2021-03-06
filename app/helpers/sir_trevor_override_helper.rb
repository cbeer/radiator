module SirTrevorOverrideHelper
  def render_sir_trevor_block object, image_type='large'
    view_name = "sir-trevor/blocks/#{object['type'].to_s.downcase}_block"

    render(view_name,
           :block => object['data'],
           :object => object,
           :image_type => image_type) if object.has_key?("data")
    rescue => err
      content_tag :pre, object.inspect + err.inspect
      Rails.logger.warn err
  end
end
