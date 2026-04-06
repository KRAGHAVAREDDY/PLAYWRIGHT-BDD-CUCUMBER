import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  readonly usernameInput;
  readonly passwordInput;
  readonly loginButton;

  constructor(page: Page) {
    super(page);

    // Initialize locators here
    this.usernameInput = this.page.locator('xpath=//input[@name="username"]');
    this.passwordInput = this.page.locator('xpath=//input[@name="password"]');
    this.loginButton = this.page.locator('xpath=//input[@id="signInBtn"]');
  }

  // Optional: helper methods
  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }

  async navigateToLoginPage(url: string) {
    await this.page.goto(url);
  }
  async clickLoginButton() {
    await this.loginButton.click();
  }
  async isRedirectedToDashboard() {
    await this.page.waitForURL(/shop/);
  }
}
