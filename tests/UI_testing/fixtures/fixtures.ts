import { test as base } from "playwright-bdd";
import * as Pages from "../pages/index";
import { Page } from "playwright";
//what is name space? it is a way to group related code together, in this case we are grouping all our pages together under the namespace Pages, so we can access them as Pages.LoginPage, Pages.HomePage etc.
//Namespace = a container for grouping related code
type UIpages = {
  loginPage: Pages.LoginPage;
};
// export const test = base.extend<UIpages>({
//   loginPage: async ({ page }, use) => {
//     const loginpage = new Pages.LoginPage(page);
//     await use(loginpage);
//   },
const createTestFunction =
  <T extends new (page: Page) => InstanceType<T>>(PageClass: T) =>
  (
    { page }: { page: Page },
    use: (fixture: InstanceType<T>) => Promise<void>,
  ) =>
    use(new PageClass(page));

export const test = base.extend<UIpages>({
  loginPage: createTestFunction(Pages.LoginPage),
});
