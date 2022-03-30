import { AccountDetailComponent } from '@shared/components/accounts/account-details/account-detail/account-detail.component';
import { of } from 'rxjs';

const setup = () => {
  const component = new AccountDetailComponent();

  return { component };
};

describe('AccountDetailComponent', () => {
  const { component } = setup();

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
