import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { MylibraryModule } from "@activia/mylibrary";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: "enabled" }),
    MylibraryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
