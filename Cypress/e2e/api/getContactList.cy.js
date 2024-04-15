describe('Get Contact List Test', () => {
  it('should retrieve the contact list after logging in', () => {
    // Intercept the login request and mock the response
    cy.intercept('POST', 'https://thinking-tester-contact-list.herokuapp.com/login', {
      statusCode: 200,
      body: {
        token: 'your-authentication-token' // Mock authentication token
      }
    }).as('loginRequest');

    // Visit the login page explicitly
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');

    // Fill out the login form and submit
    cy.get('#email').type('wajih@gmail.com');
    cy.get('#password').type('nov022001');
    cy.get('#submit').click();

    // Intercept the request to get the contact list and mock the response
    cy.intercept('GET', 'https://thinking-tester-contact-list.herokuapp.com/contacts', {
      statusCode: 200,
      body: [
        // Mock contact list response
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
        // Add more mock contact objects as needed
      ]
    }).as('getContactList');

    // Optionally, verify that the contact list is displayed correctly
    // You can assert that the contact list is displayed in the UI
  });
});
