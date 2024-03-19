describe('User Registration', () => {
    it('should allow a new user to register', () => {
      // Visit the registration page
      cy.visit('https://thinking-tester-contact-list.herokuapp.com');
  
      cy.get('#signup').click();
      // Fill out the registration form
      cy.get('#firstName').type('John');
      cy.get('#lastName').type('Doe');
      cy.get('#email').type('johndoe1203@example.com');
      cy.get('#password').type('password123');
  
      // Submit the registration form
      cy.get('form').submit();

    });
  });
  