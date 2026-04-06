@login
Feature: Verify login functionality

  Scenario: Verify that user can login with valid credentials
    Given User is on the login page "https://rahulshettyacademy.com/loginpagePractise/"
    When User enters valid "rahulshettyacademy" and "Learning@830$3mK2"
    And User clicks on the login button
    Then User should be redirected to the dashboard page


# // npx prettier --write . --plugin prettier-plugin-gherkin 
# // Use the explicit --plugin flag when running prettier: