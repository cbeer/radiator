class WebhooksController < ApplicationController
  def receive
    sink = DataSink.new webhook_id: params[:id]
    sink.content = params
    sink.save
    return text: 'ok'
  end
end
