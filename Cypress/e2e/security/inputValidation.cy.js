describe('Input Validation Testing', () => {
  it('should properly validate and sanitize user input on the login page', () => {
    // Visit the login page
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');

    // Type invalid input into the email field
    cy.get('#email').type('<script>alert("XSS Attack");</script>');

    // Type invalid input into the password field
    cy.get('#password').type("' OR 1=1;--");

    // Submit the form
    cy.get('#submit').click();

    // Assert that the application properly handles and sanitizes the input
    // Verify that the login fails and displays the error message
    cy.contains('Incorrect username or password').should('be.visible');
  });
});
