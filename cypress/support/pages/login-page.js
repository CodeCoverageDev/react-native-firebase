export default class LoginPage {
  emailInput = '[data-testid="emailInput"]';
  passwordInput = '[data-testid="passwordInput"]';
  loginLabel = '[data-testid="loginText"]';
  loginBtn = '[data-testid="loginBtn"]';
  registerLabel ='[data-testid="registerText"]';
  registerBtn = '[data-testid="registerBtn"]';
  emailLabel = '[data-testid="emailLabel"]';
  signoutLabel = '[data-testid="signoutText"]';
  signoutBtn = '[data-testid="signoutBtn"]';
}

export const loginPage = new LoginPage();
