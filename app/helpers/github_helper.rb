module GithubHelper
  def render_github_event_payload event
    render partial: "github/#{event["type"].underscore}", as: "event", object: event
  rescue ActionView::MissingTemplate => e
    e.inspect
  end
  
  def render_github_body body
    pipeline = HTML::Pipeline.new [
      HTML::Pipeline::MarkdownFilter
    ]
    result = pipeline.call body
    
    result[:output].to_s.html_safe
  end
end
