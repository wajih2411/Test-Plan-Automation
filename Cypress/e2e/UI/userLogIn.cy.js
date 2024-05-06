describe('User Login', () => {
  it('should successfully login with valid credentials', () => {
    // Visit the login page
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');

    // Fill out the login form
    cy.get('#email').type('wajih@gmail.com');
    cy.get('#password').type('nov022001');

    // Click the login button
    cy.get('#submit').click();
  });
});
