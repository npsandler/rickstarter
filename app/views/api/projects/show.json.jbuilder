json.set! @project.id do
  json.partial! 'project', project: @project
end
