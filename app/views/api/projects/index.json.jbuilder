

@projects.each do |project|
  json.set! project.id do
    json.partial! 'project', project: project, creator: project.creator, rewards: project.rewards
  end
end
