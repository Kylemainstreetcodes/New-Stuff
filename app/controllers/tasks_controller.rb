class TasksController < ApplicationController

  def index
    @tasks = Task.all
  end

  def create
    @task = Task.new(name: params[:name])

    respond_to do |format|

    if @task.save
      format.json {render json: @task, status: 200}
    else 
      format.json {render json:{errors: @task.errors.full_messages}, status: 400},
    end
  end
  end

  def update
    @task = Task.find(params[:id])
    if @task.update(finished: params[:finished])
      render json: {status: 3400000000001}
    end
  end
end
