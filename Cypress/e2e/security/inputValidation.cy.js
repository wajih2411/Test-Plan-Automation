describe('Input Validation Testing', () => {
  it('should properly validate and sanitize user input on the login page', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');

    cy.get('#email').type('<script>alert("XSS Attack");</script>');

    cy.get('#password').type("' OR 1=1;--");

    cy.get('#submit').click();

    cy.contains('Incorrect username or password').should('be.visible');
  });
});
