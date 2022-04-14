describe('Onboarding', () => {
  before(() => {
    cy.task('cognito:reset'); // clean out any accounts
    cy.signUp('cypress-one@brave.credit', '$Brave123').then((res) => {
      cy.task('cognito:confirm', res.userSub);
      cy.visit('/auth/signin');
    });
  });
  it('successfully onboards a new user', () => {
    //login
    cy.get('input[type=email]').type('cypress-one@brave.credit');
    cy.get('input[type=password]').type('$Brave123');
    cy.get('button').click();
    //select goal choice
    cy.url({ timeout: 30000 }).should('include', '/onboarding/goalchoice');
    cy.get('brave-goal-choice-card').first().click();
    //enter personal information
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
    //enter address information
    cy.url({ timeout: 30000 }).should('include', '/onboarding/address');
    cy.get('brave-kyc-address-pure').find('brave-autocomplete-address-form').as('addressForm');
    cy.get('@addressForm').find('brave-places-autocomplete-input').find('input[name=input_field]').type('1071 101st');
    cy.get('@addressForm').find('brave-outline-input').eq(1).find('input[name=input_field]').type('Hollywood');
    cy.get('@addressForm').find('brave-outline-select-input').eq(0).find('div').eq(1).click().find('li').eq(8).click();
    cy.get('@addressForm').find('brave-outline-input').eq(2).find('input[name=input_field]').type('33025');
    cy.get('brave-filled-spinning-button').click();
    //enter last four social
    cy.url({ timeout: 30000 }).should('include', '/onboarding/identity');
    cy.get('brave-kyc-ssn-pure').find('brave-outline-ssn-lastfour-form').find('input[name=input_field]').type('0022');
    cy.get('brave-filled-spinning-button').click();
    //enter phone number
    cy.url({ timeout: 30000 }).should('include', '/onboarding/verify');
    cy.get('input[name=input_field]').type('4045049006');
    cy.get('brave-filled-spinning-button').click();
    //enter passcode
    cy.url({ timeout: 30000 }).should('include', '/onboarding/code');
    cy.get('input[name=input_field]').type('12345');
    cy.get('brave-filled-spinning-button').click();
    //congratulations
    cy.url({ timeout: 30000 }).should('include', '/onboarding/congratulations');
    //auto redirect
    cy.url({ timeout: 30000 }).should('include', '/dashboard/init');
    //end test
  });
});
