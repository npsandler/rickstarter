# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Project.destroy_all
Reward.destroy_all

users = User.create([{email: 'rick@aol.com', image: File.open("app/assets/images/rick.png"), name: 'Rick Sanchez', password: 'hunter12'},
  {email: 'npsandler@gmail.com', name: 'Nathaniel Sandler', password: 'hunter12'},
  {email: 'morty@aol.com', image: File.open("app/assets/images/morty.png"), name: 'Morty Smith', password: 'hunter12'},
  {email: 'jerry@aol.com', image: File.open("app/assets/images/jerry.png"), name: 'Jerry Smith', password: 'hunter12'},
  {email: 'demo', name: 'Demo', password: 'hunter12'}])

Project.create!({title: 'Anatomy Park', image: File.open("app/assets/images/Anatomy_Park.png"), description: 'Help us fund the worlds premier new theme park', details: "fill me in later",  end_date: DateTime.now(), funding_goal: 50000, creator_id: users[0].id, category: 'Theatre'})
Project.create!({title: 'Help me take 3 strokes off my short game', image: File.open("app/assets/images/golf.png"), description: 'how hard can it be?', details: "fill me in later",  end_date: DateTime.now(), funding_goal: 50000, creator_id: users[3].id, category: 'Games'})
Project.create!({title: 'Fund a new laboratoy', image: File.open("app/assets/images/lab.png"), description: 'A new top of the line lab for inventions ', details: "fill me in later",  end_date: DateTime.now(), funding_goal: 50000, creator_id: users[0].id, category: 'Design'})
Project.create!({title: 'Counsel of Ricks', image: File.open("app/assets/images/CofRs.png"), description: 'The Ricks need your Help', details: "fill me in later",  end_date: DateTime.now(), funding_goal: 50000, creator_id: users[0].id, category: 'Theatre'})

Reward.create({project_id: Project.all.first.id, title: "One day pass to the park", pledge_amount: 20, description: "Enjoy a day in the works premier theme park"})
Reward.create({project_id: Project.all.first.id, title: "Day pass to the park for two", pledge_amount: 35, description: "A day in the works premier theme park for you and a friend!"})
Reward.create({project_id: Project.all.first.id, title: "Season pass to the park", pledge_amount: 200, description: "Spend the summer at the park!", num_allowed: 100})
Reward.create({project_id: Project.all.first.id, title: "Unlimited lifetime pass", pledge_amount: 1000, description: "For our most loyal supporters, lifetime unlimited access to the park!", num_allowed: 3})


Reward.create({project_id: Project.all.second.id, title: "Thank you", pledge_amount: 5, description: "A thank you from Jerry for your help and support!"})
