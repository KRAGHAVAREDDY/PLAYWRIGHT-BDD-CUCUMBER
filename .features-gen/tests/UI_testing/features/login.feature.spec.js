// Generated from: tests\UI_testing\features\login.feature
import { test } from "../../../../tests/UI_testing/fixtures/fixtures.ts";

test.describe('Verify login functionality', () => {

  test('Verify that user can login with valid credentials', { tag: ['@login'] }, async ({ Given, When, Then, And, loginPage }) => { 
    await Given('User is on the login page "https://rahulshettyacademy.com/loginpagePractise/"', null, { loginPage }); 
    await When('User enters valid "rahulshettyacademy" and "Learning@830$3mK2"', null, { loginPage }); 
    await And('User clicks on the login button', null, { loginPage }); 
    await Then('User should be redirected to the dashboard page', null, { loginPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\UI_testing\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is on the login page \"https://rahulshettyacademy.com/loginpagePractise/\"","stepMatchArguments":[{"group":{"start":26,"value":"\"https://rahulshettyacademy.com/loginpagePractise/\"","children":[{"start":27,"value":"https://rahulshettyacademy.com/loginpagePractise/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User enters valid \"rahulshettyacademy\" and \"Learning@830$3mK2\"","stepMatchArguments":[{"group":{"start":18,"value":"\"rahulshettyacademy\"","children":[{"start":19,"value":"rahulshettyacademy","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":43,"value":"\"Learning@830$3mK2\"","children":[{"start":44,"value":"Learning@830$3mK2","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And User clicks on the login button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to the dashboard page","stepMatchArguments":[]}]},
]; // bdd-data-end