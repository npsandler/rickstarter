json.set! @project.id do
  json.partial! '/api/projects/project', project: @project, rewards: @rewards
end
