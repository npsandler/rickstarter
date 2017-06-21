# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all

users = User.create([{email: 'rick@aol.com', name: 'Rick Sanchez', password: 'hunter12'},
  {email: 'npsandler@gmail.com', name: 'Nathaniel Sandler', password: 'hunter12'},
  {email: 'morty@aol.com', name: 'Morty Smith', password: 'hunter12'},
  {email: 'demo', name: 'Demo', password: 'hunter12'}])
