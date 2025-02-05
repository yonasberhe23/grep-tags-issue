//issue is here
undefinedVar = JSON.parse(Cypress.env('undefined'));

describe('feature', () => {
    it('test', { tags: ['@smoke', '@user1', '@jenkins'] }, () => {
        cy.visit('/');
        cy.get('textarea').type(undefinedVar);
    });
});
