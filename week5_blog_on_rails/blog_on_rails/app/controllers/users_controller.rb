class UsersController < ApplicationController
    def new
        @user = User.new
    end
    
    def create
        @user = User.new user_params
        if @user.save
            session[:user_id] = @user.id
            redirect_to home_path
        else
            render :new
        end
    end

    def edit
        @user = User.find params[:id]
    end

    def update
        @user = User.find params[:id]
        if @user.update(user_update_params)
            redirect_to home_path
        else
            render:edit
        end
    end

    def change_password
        @user = User.find params[:id]
    end

    def update_password
        @user = User.find params[:id]
        is_current_pwd_valid = @user&.authenticate(params[:user][:currentpassword])
        @newpwd = params[:user][:password]
        is_new_pwd_same = @user&.authenticate(@newpwd)
        @changepwd = params[:user][:password_confirmation]
        

        if (is_current_pwd_valid && !is_new_pwd_same && @newpwd == @changepwd)
            if @user.update(user_update_password)
                puts "Success!"
                redirect_to edit_user_path(@user.id)
            else
                render:change_password
            end
        else
            render:change_password
        end
    end

    private 
    def user_params
        params.require(:user).permit(
            :name,:email,:password,:password_confirmation)
    end

    def user_update_params
        params.require(:user).permit(
            :name, :email)
    end

    def user_update_password
        params.require(:user).permit(
            :password, :password_confirmation
        )
    end
end
