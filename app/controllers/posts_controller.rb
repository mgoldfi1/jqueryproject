class PostsController < ApplicationController



  def create
  post = Post.create(post_params)
  render json: post, status: 201 
  end




  private

  def post_params
    params.require(:post).permit(:breakfast,:lunch,:dinner,:date,:user_id)
  end
end
