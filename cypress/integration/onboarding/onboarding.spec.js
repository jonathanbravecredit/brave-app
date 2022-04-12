describe('Onboarding', () => {
  before(() => {
    cy.task('cognito:reset'); // clean out any accounts
    cy.signUp('cypress-one@brave.credit', '$Brave123').then((res) => {
      console.log('signUp:res: ', res);
      cy.task('cognito:confirm', res.userSub);
      cy.visit('/auth/signin');
    });
  });
  it('successfully onboards a new user', () => {
    cy.get('input[type=email]').type('cypress-one@brave.credit');
    cy.get('input[type=password]').type('$Brave123');
    cy.get('button').click();
    cy.url({ timeout: 30000 }).should('include', '/onboarding/goalchoice');
    cy.get('brave-goal-choice-card').first().click();
    cy.url().should('include', '/onboarding/name');
    cy.get('input[name=input_field]').eq(0).type('Victor');
    cy.get('input[name=input_field]').eq(2).type('Testv');
    cy.get('brave-outline-select-input').eq(0).find('div').eq(1).click().find('li').eq(8).click();
    cy.get('brave-outline-select-input').eq(1).find('div').eq(1).click().find('li').eq(0).click();
    cy.get('brave-outline-select-input')
      .eq(2)
      .find('div')
      .eq(1)
      .click()
      .find('li')
      .eq(new Date().getFullYear() - 1957)
      .click();
    cy.get('brave-filled-spinning-button').click();
  });
});
