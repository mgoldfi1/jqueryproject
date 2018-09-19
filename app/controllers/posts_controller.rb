class PostsController < ApplicationController

  def index
    posts = Post.where(user_id: session[:token])
    render json: posts, status: 200
  end

  def create
  post = Post.create(post_params)
  render json: post, status: 201
  end

  def show
    post = Post.find(params[:id])
    render json: post
  end




  private

  def post_params
    params.require(:post).permit(:breakfast,:lunch,:dinner,:date,:user_id)
  end
end
