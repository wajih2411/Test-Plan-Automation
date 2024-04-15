describe('Add Contact Test', () => {
  it('should successfully add a contact after logging in', () => {
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

      // Intercept the contact creation request and mock the response
      cy.intercept('POST', 'https://thinking-tester-contact-list.herokuapp.com/contacts', {
          statusCode: 201,
          body: {
              // Mock response body for the newly created contact
              firstName: 'John',
              lastName: 'Doe',
              birthdate: '1970-01-01',
              email: 'jdoe@example.com',
              phone: '8005555555',
              street1: '1 Main St.',
              street2: 'Apartment A',
              city: 'Anytown',
              stateProvince: 'KS',
              postalCode: '12345',
              country: 'USA'
          }
      }).as('contactRequest');

      // Proceed with adding the contact
      // For example, clicking on a "Add Contact" button to navigate to the add contact page
      cy.get('#add-contact').click();

      // Fill out the form fields
      cy.get('#firstName').type('John');
      cy.get('#lastName').type('Doe');
      cy.get('#birthdate').type('1970-01-01');
      cy.get('#email').type('jdoe@example.com');
      cy.get('#phone').type('8005555555');
      cy.get('#street1').type('1 Main St.');
      cy.get('#street2').type('Apartment A');
      cy.get('#city').type('Anytown');
      cy.get('#stateProvince').type('KS');
      cy.get('#postalCode').type('12345');
      cy.get('#country').type('USA');

      // Submit the form
      cy.get('#submit').click();
  });
});
