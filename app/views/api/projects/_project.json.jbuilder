json.extract! project, :id, :title, :end_date, :funding_goal, :details, :creator, :category, :description, :current_funding, :rewards
json.image asset_path(project.image.url)

# json.end_date project.end_date.to_time
