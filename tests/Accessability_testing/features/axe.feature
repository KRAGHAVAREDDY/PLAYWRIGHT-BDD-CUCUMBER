@axe-core
Feature: axe accessibility testing for login page 

  Scenario: Home page accessibility testing
    Given User is on the login page "https://rahulshettyacademy.com/loginpagePractise/"
    When i run accesssibility scan
    Then there should be no accessibility violations
    # npx playwright test -c playwrightaccess.config.ts accessibility-results/