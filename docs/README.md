# **Rickstarter** #


[Heroku link](rickstarter2017.herokuapp.com)


[Trello link](https://trello.com/b/I3pLX8AX/rickstarter)

Minimum Viable Product
----------------------
Rickstarter is a web application inspired by Kickstarter which is built using Ruby on Rails to serve up an API and React/Redux for the front end.
By June 30th this app will, at a minimum, satisfy the following criteria:

 * Hosting on Heroku
 * Aesthetic styling using CSS
 * New account creation, login, and a demo login
 * Projects
  * Users can create, edit, and delete projects to be funded
 * Backing projects & rewards
  * Users can back projects
  * Users can create rewards for backers
 * Search Functionality
 * Categories / Discover feature
  * Projects are tagged by creator with categories, and can be shown by taggings



 Design Docs
 -----------

* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md



Implementation Timeline
---------------------------
**Phase 1: Backend setup and Front End User Authentication (2 days)**

Objective: Functioning rails project with front-end Authentication
* The navbar will have the website's name and icon, sign up, and sign in buttons.

* Clicking sign up or sign in buttons will display sign in form or redirect to root once signed in.

**Phase 2: Project Model, API, and components (2 days)**

Objective: Projects can be created, read, edited and destroyed through the API.

  * The root view will feature a carousel of featured projects.

  * Clicking a project on the home page will take you to that project's show page

**Phase 3: Comments (2 days)**

Objective: Comments belong to Projects and can be created, read, edited and destroyed through the API.

  * Project show pages have a comments tab that displays comments one the project

  * show/comments also has an Add Comment form

**Phase 4: Project Backing & Rewards (2 day)**

Objective: Users can back projects, and Project creators can add Rewards for backers.



**Phase 5: Search Feature (2 days)**

Objective: Allow users to search for projects by name.

**Phase 6: Categories/Discover page- (1 day)**

Objective: Create category filters to display specific subsets of projects to users.

**Bonus Features (TBD)**

* Likes
* Credit card payments
