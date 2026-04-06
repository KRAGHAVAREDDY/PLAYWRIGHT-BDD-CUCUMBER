import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixtures";

const { Given, When, Then } = createBdd(test);

Given("User is on the login page {string}", async ({ loginPage }, url) => {
  await loginPage.navigateToLoginPage(url);
});

When(
  "User enters valid {string} and {string}",
  async ({ loginPage }, username, password) => {
    await loginPage.login(username, password);
  },
);

When("User clicks on the login button", async ({ loginPage }) => {
  await loginPage.clickLoginButton();
});

Then(
  "User should be redirected to the dashboard page",
  async ({ loginPage }) => {
    await loginPage.isRedirectedToDashboard();
  },
);
