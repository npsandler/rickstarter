HomeContainer

* NavBarContainer
* CaroselContainer
* DiscoverIndex
  * ProjectsDisplayContainer
  * Project Details

AuthFormContainer
* AuthForm

CategoriesContainer
  * CategoryIndex

ProjectContainer
* ProjectHeader
* ProjectVideo
* ProjectRewardsContainer
* ProjectPledges
* SearchResultsContainer

Search
* ProjectsDisplayContainer
* ProjectDetails

NewProjectContainer
* NewProjectForm

ROUTES
---
Path | Component
------------ | -------------
"/"	| "HomeContainer"
"/sign-up"	| "AuthFormContainer"
"/sign-in"	| "AuthFormContainer"
"/categories/:categoryId	| "ProjectsDisplayContainer"
"/project/:projectId"	| "ProjectContainer"
"/project/new"	| "NewProjectForm"
"/categories/	| "CategoriesContainer"
"/search-results"	| "ProjectsDisplayContainer"
"/search"	| "Search"
