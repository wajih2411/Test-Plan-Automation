describe('Login User Test', () => {
  it('should login a user successfully', () => {
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
});
