// <reference types="cypress" />
import { loginPage } from "./pages/login-page";

Cypress.Commands.add('navigate', (url) => {
  cy.visit(url);
});

Cypress.Commands.add('login', (email, password) => {
  cy.get(loginPage.emailInput).should('be.visible').clear().type(email);
  cy.get(loginPage.passwordInput).should('be.visible').clear().type(password);
  cy.get(loginPage.loginBtn).should('be.visible').click();
});


