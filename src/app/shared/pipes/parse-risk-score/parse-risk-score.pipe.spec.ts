import { IMergeReport } from "@bravecredit/brave-sdk";
import { ICreditScore } from "@shared/interfaces";
import { ParseRiskScorePipe } from "./parse-risk-score.pipe";

describe("ParseRiskScorePipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new ParseRiskScorePipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should return -1 on transform if no report", () => {
    let res = pipe.transform(undefined);
    expect(res).toEqual(-1);
  });

  it("should return -1 on transform if score is NaN", () => {
    let res = pipe.transform({
      TrueLinkCreditReportType: {
        Borrower: {
          CreditScore: [
            { scoreName: "vantagescore3", riskScore: {} } as ICreditScore,
          ],
        },
      },
    } as IMergeReport);
    expect(res).toEqual(-1);
  });

  it("should return expected on transform", () => {
    let res = pipe.transform({
      TrueLinkCreditReportType: {
        Borrower: {
          CreditScore: [
            { scoreName: "vantagescore3", riskScore: "500" } as ICreditScore,
          ],
        },
      },
    } as IMergeReport);
    expect(res).toEqual(500);
  });
});
