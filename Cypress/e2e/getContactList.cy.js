describe('Delete Contact', () => {
    it('should delete a contact after logging in', () => {
      // Visit the website
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
      
      // Log in
      cy.get('#email').type('wajih@gmail.com');
      cy.get('#password').type('nov022001');
      cy.get('#submit').click();

    });
  });