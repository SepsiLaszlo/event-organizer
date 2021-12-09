class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy, :login]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  def names
    render json: User.all.select(:name)
  end

  # GET /users/authenticate
  def authenticate
    begin
    token = request.env["HTTP_AUTHORIZATION"].split[1]
    decoded_token = JWT.decode token, nil, false
    user_id = decoded_token[0]['id']
    rescue StandardError
      return render status: :unauthorized
    end

    begin
    user = User.find(user_id)

    rescue ActiveRecord::RecordNotFound
      return render status: :forbidden
    end

    response.set_header('User-Id',user_id)
    response.set_header('User-Name',user.name)
    render status: :ok
  end
  
  # POST /users/signin
  def signin
    user = User.find_by(email: params['email'])
    payload = { id: user.id }

    token = JWT.encode payload, nil, 'none'
    render plain: "token: #{token}"
  end


  # POST /users/1/login
  def login
    session['user-id'] = @user.id

    render json: @user
  end


  # POST /users/logout
  def logout
    reset_session
  end

  # GET /users/current
  def current
    render json: current_user
  end

  def callback
    response = HTTParty.post('https://github.com/login/oauth/access_token',
    query:{ client_id: ENV['GITHUB_CLIENT_ID'],
      client_secret: ENV['GITHUB_CLIENT_SECRET'],
      code: params['code']})


    token = response.body.split('&')[0].split('=')[1]
    data_response = HTTParty.get("https://api.github.com/user", headers: {"Authorization" => "token #{token}"})

    data = JSON.parse(data_response.body)
    github_id = data['id']
    user = User.find_or_create_by(github_id: github_id, name: data['login'])
    payload = { id: user.id }

    jwt = JWT.encode payload, nil, 'none'
  
    redirect_to "/token?token=#{jwt}"
  end

    
  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:name)
    end

    def current_user
      # user_id = session['user-id']
      user_id = request.get_header("User-Id")
      User.find(user_id) if user_id
    end
end
