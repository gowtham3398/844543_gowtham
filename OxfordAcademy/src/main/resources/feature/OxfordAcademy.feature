@Oxford_Academy_feature
Feature: Oxford Academy Website

@tc01_Oxford_Academy_register
Scenario: Registering into Oxford Academy

Given Launch the Chrome browser
Then open the Oxford Academy website
Then register the details
And close the browser

@tc02_Oxford_Academy_login
Scenario Outline: Logging into Oxford Academy

Given the user launch chrome
Then the user opens website
Then The user login using "<emailId>" and "<password>" with vaild and invaild deatils
Then the user closes the browser

Examples: 

|emailId	                      |password  	|
|abcd@gmail.com		              |kg188754		|
|kg@gmail.com	                  |gowtham895	|
|gowtham19980303@gmail.com		  |Gowtham@98	|

@tc3_Oxford_Academy_Edit_profile
Scenario: User editing the profile

Given I launch the chrome 
When I open the website and logs-in
Then I open the edit personal details page
Then I edit and personal details and updates
And I closes the browser

@tc04_Oxford_Academy_Delete_saved_search
Scenario: User deletes the saved search

Given The user should launch the chrome browser
When user should open the website and logs in
Then user should open the saved search
Then user should delete the saved search
And user should close the browser

@tc05_Oxford_Academy_count_subscription
Scenario: User checks if the search is saved 

Given launching the browser
When opening the webpage and logs in
Then user counts the subscription and prints 
And user closes the webpage


