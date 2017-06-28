json.extract! project, :id, :title, :end_date, :funding_goal, :details, :category, :description, :current_funding, :backers
json.image asset_path(project.image.url)

json.set! :rewards do
  json.array! rewards do |reward|
    json.partial! '/api/rewards/reward', reward: reward
  end
end

json.set! :creator do
  json.extract! project.creator, :name
  json.image asset_path(project.creator.image.url(:thumb))
end



# json.end_date project.end_date.to_time
