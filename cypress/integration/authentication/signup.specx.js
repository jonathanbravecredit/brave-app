// const cognitoResponse = {
//   CodeDeliveryDetails: { AttributeName: 'email', DeliveryMedium: 'EMAIL', Destination: 'c***@b***' },
//   UserConfirmed: false,
//   UserSub: '28e5a4d5-f186-4021-afdc-71737e0007d0',
// };

// describe('Sign Up', () => {
//   let username
//   beforeEach(() => {
//     // cy.task('cognito:reset');
//     cy.visit('/auth/signup');
//   });
//   it('successfully signs up a new user', () => {
//     cy.get('input[type=email]').type('cypress-one@brave.credit');
//     cy.get('input[type=password]').type('$Brave123');
//     cy.get('button').click();
//     cy.task('cognito:confirm')
//   });
// });
