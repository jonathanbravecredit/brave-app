describe('Disputes', () => {
  beforeEach(() => {
    cy.visit('/auth/signin');
    cy.get('input[type=email]').type('cypress-nodelete@brave.credit');
    cy.get('input[type=password]').type('$Brave123');
    cy.get('button').click();
  });

  it('Should be able to open a personal dispute', () => {
    cy.url({ timeout: 30000 }).should('include', '/dashboard/init');
    cy.get('#dash-fullcr-btn').click();
    cy.url().should('include', '/dashboard/report');
    cy.get('#fullcr-personal-detail-btn').click();
    cy.url().should('include', '/dashboard/report/personalitem');
    cy.get('#personal-detail-dispute-btn').click();
    cy.get('#dispute-ack-btn').click();
    cy.get('#dispute-ack-btn').click();
    cy.url({ timeout: 30000 }).should('include', '/dashboard/disputes/reconfirm');
    cy.get('brave-filled-spinning-button').first().click();
    cy.url({ timeout: 30000 }).should('include', '/dashboard/disputes/personalitem');
    cy.get('input[type=checkbox]').click();
    cy.get('brave-filled-spinning-button').click();
    cy.get('brave-disputes-success', { timeout: 30000 });
  });
});
