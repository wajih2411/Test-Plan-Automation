describe('Delete Contact Test', () => {
  it('should delete a contact after logging in', () => {
    cy.intercept('POST', 'https://thinking-tester-contact-list.herokuapp.com/login', {
      statusCode: 200,
      body: {
        token: 'your-authentication-token' // Mock authentication token
      }
    }).as('loginRequest');

    cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');

    cy.get('#email').type('wajih@gmail.com');
    cy.get('#password').type('nov022001');
    cy.get('#submit').click();

    cy.intercept('DELETE', 'https://thinking-tester-contact-list.herokuapp.com/contacts/*', {
      statusCode: 204 
    }).as('deleteContactRequest');

    cy.get('.contactTableBodyRow').first().click();

    cy.get('#delete').click();

  });
});
