class CommentsController < ApplicationController

def create
comment = Comment.create(comment_params)
render json: comment, status: 201
end

def show
comment = Comment.find(params[:id])
render json: comment, status: 200
end
private

def comment_params
params.require(:comment).permit(:body,:user_id,:post_id)
end

end
