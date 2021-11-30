/// <reference types="cypress" />
import { loginPage } from '../support/index';
const cred = require('../fixtures/email.json');

describe('Login Spec Test Suite', () => {
  before(() => {
    cy.navigate('/')
  });

  it('should be able to login with correct credentials', () => {
    cy.login(cred.valid.email, cred.valid.password);
    cy.get(loginPage.emailLabel).should('be.visible').and('have.contain', cred.valid.email.toLocaleLowerCase());
  });

  it('should be able to sign out', () => {
    cy.get(loginPage.signoutBtn).should('be.visible').click();
    cy.get(loginPage.loginBtn).should('be.visible');
    cy.get(loginPage.registerBtn).should('be.visible');
  })

  it('should not be able to login with invalid credentials', () => {
    cy.login(cred.invalid.email, cred.invalid.password);
    cy.get(loginPage.emailLabel).should('not.exist');
  });

  it('should not be able to login with empty credentials', () => {
    cy.login(cred.empty.email, cred.empty.password);
    cy.get(loginPage.emailLabel).should('not.exist');
  });

});
