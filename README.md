# Acme-Challenge

## Introduction
This is a challenge to test your Front-End skills and knowledge.
The objective is to evaluate its way of structuring and decision autonomy to build something scalable using a modern JavaScript framework.

In this challenge you should clone the repository into your IDE environment, open a new branch with your name, add the necessary components, commit your solution back to the repository, and open a merge request.

## Case
The Acme Corp company is a global organization with scientists all around the globe. The company management ask you to kraft a website that list all the scientists in a simple and objective way, with the ability to filter, and expand the available data.
Your goal in this project is to work on the development of the Front End that will consume an API following the requirements proposed in this challenge.

## Resources
* Study the REST API documentation: https://randomuser.me/documentation
* Material UI: https://material-ui.com/

## List of scientists
The project's initial screen will be a list of scientists that should contain a search engine to facilitate filtering all those displayed in the list,
To get the data, we will use the Random User API https://randomuser.me/api/

In addition to making the request, we must apply some filters in the API:

*	The API result must be stored in a global state. (React Context)
*	Limit each page request to 25 results so as not to overload the API.
*	Add paging parameter to control Loading more


## View scientist
In the action’s column of the table, there is a view button to expand the scientist data. The data can be presented via Modal or on a scientist details page
You mast display the following:
* Image
* Full name
* Email
* Genre
* Date of birth
* Nationality

## Screenshots
In the public/screenshots folder, you will have images of the desired layout, however you may choose a layout of your choice

## Bonus
In addition to the challenge proposed with the two screens, we have some extras 

* Add the search capability to filter by name
* Add a filter by Gender buttons in the table
* Configure a dropdown menu to filter by nationality (hint: extract the nationalities from the scientist list)
* Write Unit Tests or E2E Test in the Scientist List. Choose the best approach and library

(**note:** _feel free to add, delete or modify an existing code if you think it will improve your solution_)
