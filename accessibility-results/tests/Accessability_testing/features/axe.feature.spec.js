// Generated from: tests\Accessability_testing\features\axe.feature
import { test } from "../../../../tests/Accessability_testing/fixtures/fixtures.ts";

test.describe('axe accessibility testing for login page', () => {

  test('Home page accessibility testing', { tag: ['@axe-core'] }, async ({ Given, When, Then, page }) => { 
    await Given('User is on the login page "https://rahulshettyacademy.com/loginpagePractise/"', null, { page }); 
    await When('i run accesssibility scan', null, { page }); 
    await Then('there should be no accessibility violations'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\Accessability_testing\\features\\axe.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@axe-core"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is on the login page \"https://rahulshettyacademy.com/loginpagePractise/\"","stepMatchArguments":[{"group":{"start":26,"value":"\"https://rahulshettyacademy.com/loginpagePractise/\"","children":[{"start":27,"value":"https://rahulshettyacademy.com/loginpagePractise/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When i run accesssibility scan","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then there should be no accessibility violations","stepMatchArguments":[]}]},
]; // bdd-data-end