import { NegativeAccountInitialPureComponent } from "./negative-account-initial-pure.component";
import { BehaviorSubject } from "rxjs";
import { INegativeAccountView } from "../negative-account.model";

//account: AccountService

const setup = () => {
  const negativeAccountServiceMock = jasmine.createSpyObj(
    "NegativeAccountService",
    [""],
    {
      model$: new BehaviorSubject<INegativeAccountView>(
        {} as INegativeAccountView
      ),
    }
  );

  const component = new NegativeAccountInitialPureComponent(
    negativeAccountServiceMock
  );

  return { component, negativeAccountServiceMock };
};

describe("NegativeAccountInitialPureComponent", () => {
  it("should create", () => {
    const { component } = setup();

    expect(component).toBeTruthy();
  });
});
