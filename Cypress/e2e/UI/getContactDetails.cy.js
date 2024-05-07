describe('Get Contact Details Test', () => {
    it('should retrieve contact details after logging in', () => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
      cy.get('#email').type('wajih@gmail.com');
      cy.get('#password').type('nov022001');
      cy.get('#submit').click();
  
      cy.get('.contactTableBodyRow').first().click();

    });
  });
  