class UsersController < ApplicationController

def home
end

def new
  @user = User.new
end

def create
  @user = User.new(user_params)
    if @user.save
    flash[:success] = "Successfully Registered!"
    session[:user_id] = @user.id
    redirect_to user_path(@user)
    else
    render :new
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def diary
    if session[:user_id]
    @comment = Comment.new
    @session = session[:user_id]
    @user = User.find(params[:id])
    @post = Post.new
    session[:token] = params[:id]
  else
    flash[:notice] = "Please Log In First"
    redirect_to root_path
  end
  end


  private
    def user_params
        params.require(:user).permit(:username,:password,:email,:weight,:password_confirmation, :first_name, :last_name)
      end

end
