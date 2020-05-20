import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FukuComponent } from './fuku/fuku.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FukuComponent],
  exports: [FukuComponent],
})
export class MyCoreModule {}
