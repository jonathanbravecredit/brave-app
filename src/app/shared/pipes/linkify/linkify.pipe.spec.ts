import { SecurityContext } from "@angular/core";
import {
  DomSanitizer,
  SafeHtml,
  SafeResourceUrl,
  SafeScript,
  SafeStyle,
  SafeUrl,
  SafeValue,
} from "@angular/platform-browser";
import { LinkifyPipe } from "./linkify.pipe";

describe("LinkifyPipe", () => {
  let pipe: any;
  beforeAll(() => {
    pipe = new LinkifyPipe(new TestDomSanitizer());
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should run bypassSecurityTrustHtml on transform", () => {
    let spy = spyOn(pipe.domSanitizer, "bypassSecurityTrustHtml");
    pipe.transform("value");
    expect(spy).toHaveBeenCalled();
  });
});

class TestDomSanitizer extends DomSanitizer {
  sanitize(
    context: SecurityContext,
    value: string | SafeValue | null
  ): string | null {
    throw new Error("Method not implemented.");
  }
  bypassSecurityTrustHtml(value: string): SafeHtml {
    throw new Error("Method not implemented.");
  }
  bypassSecurityTrustStyle(value: string): SafeStyle {
    throw new Error("Method not implemented.");
  }
  bypassSecurityTrustScript(value: string): SafeScript {
    throw new Error("Method not implemented.");
  }
  bypassSecurityTrustUrl(value: string): SafeUrl {
    throw new Error("Method not implemented.");
  }
  bypassSecurityTrustResourceUrl(value: string): SafeResourceUrl {
    throw new Error("Method not implemented.");
  }
}
