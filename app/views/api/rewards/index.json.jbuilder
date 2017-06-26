@indexs.each do |index|
  json.set! index.id do
    json.partial! 'index', index: index
  end
end
