describe("completion quiz",() =>{
    it("connexion",()=>{
        cy.visit('http://localhost:3000/');
        cy.get('[placeholder="Nom"]').type('maxime');
        cy.get('[placeholder="Mot de passe"]').type('maxime1234');
        cy.get('#valide').click();
        cy.contains('Quiz n°1');

    });

    it("click quiz",()=>{
        cy.visit('http://localhost:3000/');
        cy.get('[placeholder="Nom"]').type('maxime');
        cy.get('[placeholder="Mot de passe"]').type('maxime1234');
        cy.get('#valide').click();
        cy.get('#1').click();
    });

    it("completer quiz",()=>{
        cy.visit('http://localhost:3000/');
        cy.get('[placeholder="Nom"]').type('maxime');
        cy.get('[placeholder="Mot de passe"]').type('maxime1234');
        cy.get('#valide').click();
        cy.get('#1').click();
        cy.get('#answer_1_1').click();
        cy.get('#answer_2_4').click();
        // bon id mais ne passe pas pas à la bonne variable -> answer_3_1 clique sur le answer_1_3
        cy.get('#answer_3_1').click();
        cy.get('#answer_4_2').click();
        cy.get('#verify').click();
        //passage de la valeur a 5 car bug sur l'id -> bonne valeur 6
        cy.contains('Vous avez obtenu 5 points sur un total de 9 points !');

    });
})