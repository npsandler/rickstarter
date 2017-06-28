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

ipsum = "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?

At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat…"

Project.create!({title: 'Anatomy Park', image: File.open("app/assets/images/Anatomy_Park.png"), description: 'Help us fund the worlds premier new theme park', details: ipsum,  end_date: DateTime.now(), funding_goal: 50000, current_funding: 1000, creator_id: users[0].id, category: 'Theatre'})
Project.create!({title: 'Help me take 3 strokes off my short game', image: File.open("app/assets/images/golf.png"), description: 'how hard can it be?', details: ipsum,  end_date: DateTime.now(), funding_goal: 50000, current_funding: 3000, creator_id: users[3].id, category: 'Games'})
Project.create!({title: 'Fund a new laboratoy', image: File.open("app/assets/images/lab.png"), description: 'A new top of the line lab for inventions ', details: ipsum,  end_date: DateTime.now(), funding_goal: 50000, current_funding: 4500, creator_id: users[0].id, category: 'Design'})
Project.create!({title: 'Counsel of Ricks', image: File.open("app/assets/images/CofRs.png"), description: 'The Ricks need your Help', details: ipsum,  end_date: DateTime.now(), funding_goal: 50000, creator_id: users[0].id, category: 'Theatre'})

Reward.create({project_id: Project.all.first.id, title: "One day pass to the park", pledge_amount: 20, description: "Enjoy a day in the works premier theme park"})
Reward.create({project_id: Project.all.first.id, title: "Day pass to the park for two", pledge_amount: 35, description: "A day in the works premier theme park for you and a friend!"})
Reward.create({project_id: Project.all.first.id, title: "Season pass to the park", pledge_amount: 200, description: "Spend the summer at the park!", num_allowed: 100})
Reward.create({project_id: Project.all.first.id, title: "Unlimited lifetime pass", pledge_amount: 1000, description: "For our most loyal supporters, lifetime unlimited access to the park!", num_allowed: 3})


Reward.create({project_id: Project.all.second.id, title: "Thank you", pledge_amount: 5, description: "A thank you from Jerry for your help and support!"})
