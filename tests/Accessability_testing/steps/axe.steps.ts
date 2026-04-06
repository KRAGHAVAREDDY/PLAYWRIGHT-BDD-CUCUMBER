import {createBdd} from "playwright-bdd";
import { test } from "../../UI_testing/fixtures/fixtures";
const { Given, When, Then } = createBdd(test);
import AxeBuilder from "@axe-core/playwright";
import type { AxeResults } from "axe-core";


let   results: AxeResults;

Given('User is on the login page {string}', async ({ page }, url) => {
  console.log("Navigating to URL: " + url);
  await page.goto(url);
});

When('i run accesssibility scan', async ({ page }) => {
   results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa","best-practices"]).analyze();
   //withTags(["wcag2a", "wcag2aa","best-practices"]) will filter the results based on the specified tags, allowing you to focus on specific types of accessibility issues. In this case, it will include issues that are relevant to WCAG 2.0 Level A, Level AA, and best practices. 
  console.log(results);
});

Then('there should be no accessibility violations', async ({}) => {
 console.log("No accessibility violations found"+results.violations.length);
});
