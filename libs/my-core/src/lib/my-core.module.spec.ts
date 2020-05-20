import { async, TestBed } from "@angular/core/testing";
import { MyCoreModule } from "./my-core.module";

describe("MyCoreModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MyCoreModule],
    }).compileComponents();
  }));

  it("should create", () => {
    expect(MyCoreModule).toBeDefined();
  });
});
