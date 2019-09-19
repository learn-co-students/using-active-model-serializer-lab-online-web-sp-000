class OrdersController < ApplicationController

  def index
    @orders = Order.all
    #render json: @orders, status: 200

  end

  def show
    @order = Order.find(params[:id])
    render json: @order, status: 200
  end

end