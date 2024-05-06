describe('Get Contact Details Test', () => {
    it('should retrieve contact details after logging in', () => {
      // Visit the login page and log in
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
      cy.get('#email').type('wajih@gmail.com');
      cy.get('#password').type('nov022001');
      cy.get('#submit').click();
  
      // Click on the first contact in the list
      cy.get('.contactTableBodyRow').first().click();

    });
  });
  