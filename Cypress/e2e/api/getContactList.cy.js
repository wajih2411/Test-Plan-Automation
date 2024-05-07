describe('Get Contact List Test', () => {
  it('should retrieve the contact list after logging in', () => {
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

    cy.intercept('GET', 'https://thinking-tester-contact-list.herokuapp.com/contacts', {
      statusCode: 200,
      body: [
        {
          id: '1',
          firstName: 'John',
          lastName: 'Doe',
          email: 'jdoe@example.com',
          phone: '8005555555',
          street1: '1 Main St.',
          street2: 'Apartment A',
          city: 'Anytown',
          stateProvince: 'KS',
          postalCode: '12345',
          country: 'USA'
        },
      ]
    }).as('getContactList');

  });
});
