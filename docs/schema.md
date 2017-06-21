Users
----

Column Name | Data Type | Details
------------ | -------------
id |integer | not null, PRIMARY KEY
name | string | not null
email | string | not null, unique
password_digest | string | not null
session_token | string | not null, unique, indexed

* A user **has_many** projects
* A user **has_many** pledges
* A user **has_many** rewards
* A user **has_many** supported_projects (through pledges)

Projects
-----

column name |	data type |	details
------------ |  -----------
id |	integer |	not null, PRIMARY KEY
title |	string |	not null
description |	text |	not null
main_image_url |	string |
end_date |	date |	not null
funding_goal |	integer |	not null
current_funding |	integer |	not null, default = 0
details	|	text |
creator_id |	integer |	not null, indexed, FOREIGN KEY
category |	string |	not null

FOREIGN KEY creator_id connects to PRIMARY KEY id in users table

* A project **belongs_to** a creator (a user)
* A project **has_many** rewards
 * created by project's creator
* A project **has_many** backers (association through rewards)

Comments
----

column name |	data type |	details
------------ |  -----------
id |	integer |	not null, PRIMARY KEY
author_id |	integer |	not null, foreign key (references users), indexed
project_id |	integer |	not null, foreign key (references projects), indexed
body |	string |	not null


* A comment **belongs_to** an author (user)
* A comment **belongs_to** a project



Rewards
----


column name |	data type |	details
------------ |  -----------
id |	integer |	not null, PRIMARY KEY
project_id |	integer |	not null, indexed, FOREIGN KEY
title |	string |	not null
pledge_amount |	integer |	not null
description |	string |	not null
number_remaining |	integer | not null
FOREIGN KEY project_id related to PRIMARY KEY id in projects table

* A reward **belongs_to** a project
* A reward **has_many** pledges

Pledges
----

column name |	data type |	details
------------ |  -----------
id |	integer |	not null, PRIMARY KEY
user_id |	integer |	not null, indexed, FOREIGN KEY
reward_id |	integer |	not null, indexed, FOREIGN KEY


JOIN table connecting users and the projects they pledged to FOREIGN KEY user_id related to PRIMARY KEY id in users table FOREIGN KEY reward_id related to PRIMARY KEY id in rewards table

* A pledge **belongs_to** a user
* A pledge **belongs_to** a reward
* A pledge **has_one**  project (association through Reward)
