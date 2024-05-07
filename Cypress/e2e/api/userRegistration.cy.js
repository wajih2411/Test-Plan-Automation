describe('User Registration Test', () => {
  it('should allow a new user to register', () => {
    cy.intercept('POST', 'https://thinking-tester-contact-list.herokuapp.com/register', {
      statusCode: 201,
      body: {
        message: 'User registered successfully' // Mock registration response message
      }
    }).as('registrationRequest');

    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');

    cy.get('#signup').click();

    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#email').type('johndoe12066@example.com');
    cy.get('#password').type('password123');

    cy.get('form').submit();

  });
});
