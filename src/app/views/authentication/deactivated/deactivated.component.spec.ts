import { DeactivatedComponent } from './deactivated.component';

const setup = () => {

  const component = new DeactivatedComponent();

  return { component };
};

describe('DeactivatedComponent', () => {
  const { component  } = setup();

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
