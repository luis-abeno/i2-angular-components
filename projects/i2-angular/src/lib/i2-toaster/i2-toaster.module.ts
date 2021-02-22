import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I2ToasterComponent } from './component/i2-toaster.component';

@NgModule({
  declarations: [I2ToasterComponent],
  imports: [
    CommonModule
  ],
  exports: [I2ToasterComponent]
})
export class I2ToasterModule { }
