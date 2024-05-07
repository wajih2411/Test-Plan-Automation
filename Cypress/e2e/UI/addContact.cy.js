describe('Add Contact', () => {
    it('should successfully add a contact after logging in', () => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
  
      cy.get('#email').type('wajih@gmail.com');
      cy.get('#password').type('nov022001');
  
      cy.get('#submit').click();

      cy.get('#add-contact').click();
  
      cy.get('#firstName').type('John');
      cy.get('#lastName').type('Doe');
      cy.get('#birthdate').type('1970-01-01');
      cy.get('#email').type('johndoe@example.com');
      cy.get('#phone').type('8005555555');
      cy.get('#street1').type('1 Main St.');
      cy.get('#street2').type('Apartment A');
      cy.get('#city').type('Anytown');
      cy.get('#stateProvince').type('KS');
      cy.get('#postalCode').type('12345');
      cy.get('#country').type('USA');
  
      cy.get('#submit').click();
    });
  });
  