declare namespace Cypress {
  interface Chainable {
     navigate(url?: string): Chainable;
     login(email?: string, password?: string): Chainable;
  }
}
