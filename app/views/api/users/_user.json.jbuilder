json.extract! user, :id, :name, :image
json.image_url asset_path(user.image.url)
