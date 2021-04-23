class ParticipationsController < ApplicationController
  before_action :set_participation, only: [:show, :update, :destroy]

  # GET /participations
  def index
    @participations = Participation.all.order(updated_at: :desc)

    render json: @participations
  end

  # GET /participations/1
  def show
    render json: @participation
  end

  # POST /participations
  def create
    @participation = Participation.new(participation_params)

    if @participation.save
      render json: @participation, status: :created, location: @participation
    else
      render json: @participation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /participations/1
  def update
    if @participation.update(participation_params)
      render json: @participation
    else
      render json: @participation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /participations/1
  def destroy
    @participation.destroy
  end

  # GET /participations/for_user/1
  def for_user
    @participations = Participation.where(user_id: params['user_id'])

    render json: @participations 
  end

  def for_event
    @participations = Participation.where(event_id: params['event_id'])

    render json: @participations 
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_participation
      @participation = Participation.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def participation_params
      params.require(:participation).permit(:event_id, :user_id, :user_name)
    end
end
