//workaround is here
const undefinedVarEnv = Cypress.env('undefined');
 
if (undefinedVarEnv) {
    try {
        undefinedVar = JSON.parse(undefinedVarEnv);
    } catch (error) {
        console.error("Error parsing JSON from Cypress.env:", error);
    }
} else {
    console.warn("Cypress.env('undefined') is undefined or empty.");
}
 
describe('feature', () => {
    it('test', { tags: ['@smoke', '@user1', '@jenkins'] }, () => {
        cy.visit('/');
        cy.get('textarea').type(undefinedVar);
    });
});
