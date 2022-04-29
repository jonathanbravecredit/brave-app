import { IMergeReport } from "@bravecredit/brave-sdk";
import { MergereportToConsumerStatementsPipe } from "./mergereport-to-consumer-statements.pipe";
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';

describe("MergereportToConsumerStatementsPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new MergereportToConsumerStatementsPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should run parseBorrowerForCreditStatement on transform", () => {
    let spy = spyOn(tu.parsers.report, "parseBorrowerForCreditStatement");
    pipe.transform({} as IMergeReport);
    expect(spy).toHaveBeenCalled();
  });
});
