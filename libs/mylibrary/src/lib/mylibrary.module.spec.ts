import { async, TestBed } from "@angular/core/testing";
import { MylibraryModule } from "./mylibrary.module";

describe("MylibraryModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MylibraryModule],
    }).compileComponents();
  }));

  it("should create", () => {
    expect(MylibraryModule).toBeDefined();
  });
});
