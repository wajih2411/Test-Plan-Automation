describe('Logout User Test', () => {
    it('should first login a user successfully', () => {

      cy.intercept('POST', 'https://thinking-tester-contact-list.herokuapp.com/login', {
        statusCode: 200,
        body: {
          token: 'your-authentication-token' 
        }
      }).as('loginRequest');
  
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
  
      cy.get('#email').type('wajih@gmail.com');
      cy.get('#password').type('nov022001');
      cy.get('#submit').click();
  
    });
  
  
  it('should then logout a user successfully', () => {
    cy.intercept('POST', 'https://thinking-tester-contact-list.herokuapp.com/logout', {
      statusCode: 200,
      body: {
        message: 'User logged out successfully' 
      }
    }).as('logoutRequest');

    cy.visit('https://thinking-tester-contact-list.herokuapp.com/dashboard');

    cy.get('#logout').click();

  });
});
