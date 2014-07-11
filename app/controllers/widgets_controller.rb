class WidgetsController < ApplicationController
  layout false
  
  def show
    @widget = JSON.parse(params[:widget])
    respond_to do |format|
      format.html {  }
    end
  end
end
