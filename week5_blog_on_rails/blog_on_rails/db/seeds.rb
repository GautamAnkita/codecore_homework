# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


PASSWORD = "supersecret"


Comment.delete_all
Post.delete_all
User.delete_all

super_user = User.create(
  name: "JonSnow",
  email: "js@winterfell.gov",
  password: PASSWORD,
  admin: true
)

10.times do
    first_name = Faker::Name.first_name
    User.create(
      name: first_name ,
      email: "#{first_name.downcase}.#{first_name.downcase}@example.com",
      password: PASSWORD
    )
  end

users = User.all


  

500.times do
    p = Post.create(
        title: Faker::Job.title,
        body: Faker::Coffee.notes,
        user: users.sample
    )
    if p.valid?
        rand(0..10).times do
          Comment.create(
            body: Faker::Matz.quote,
            post: p,
            user: users.sample
          )
        end
    end
end

posts = Post.all
comments = Comment.all

puts Cowsay.say("Created #{posts.count} posts", :cow)
puts Cowsay.say("Created #{comments.count} comments", :turkey)
puts Cowsay.say("Created #{users.count} users", :tux)
