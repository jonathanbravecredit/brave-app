import {
  IDisputeReason,
  IDisputeReasonCard,
} from "@views/dashboard/disputes/components/cards/reason-card/interfaces";
import { DisputeReasonPageComponent } from "@views/dashboard/disputes/components/dispute-reason-page/dispute-reason-page.component";
import { ReasonsToPagesPipe } from "./reasons-to-pages.pipe";

describe("ReasonsToPagesPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new ReasonsToPagesPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should run isForbearanceAccount on transform", () => {
    let res = pipe.transform(
      [
        {
          reason: {} as IDisputeReason,
          allowInput: true,
          allowMore: true,
          selected: true,
          customInput: "test",
          index: 0,
        } as IDisputeReasonCard,
        {
          reason: {} as IDisputeReason,
          allowInput: true,
          allowMore: true,
          selected: true,
          customInput: "test2",
          index: 1,
        } as IDisputeReasonCard,
      ],
      1
    );
    expect(res).toEqual({
      pages: [DisputeReasonPageComponent, DisputeReasonPageComponent],
      data: [
        Object({
          reasonCards: [
            Object({
              reason: Object({}),
              allowInput: true,
              allowMore: true,
              selected: true,
              customInput: "test",
              index: 0,
            }),
          ],
        }),
        Object({
          reasonCards: [
            Object({
              reason: Object({}),
              allowInput: true,
              allowMore: true,
              selected: true,
              customInput: "test2",
              index: 1,
            }),
          ],
        }),
      ],
    });
  });
});
