class SessionsController < ApplicationController

def new

end

def create
   @user = User.find_by(username: params[:user][:username])
   if @user && @user.authenticate(params[:user][:password])
     flash[:success] = "Successfully logged in!"
     session[:user_id] = @user.id
     redirect_to user_path(@user)
   else
     flash[:notice] = "Invalid username or password"
     render :new
   end
   end

def logout
session.delete :user_id
redirect_to root_path
end

end
