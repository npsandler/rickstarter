json.extract! project, :id, :title, :end_date, :funding_goal, :details, :category, :description, :current_funding, :rewards, :backers
json.image asset_path(project.image.url)

json.set! :creator do
  json.extract! project.creator, :name
  json.image asset_path(project.creator.image.url(:thumb))
end



# json.end_date project.end_date.to_time
