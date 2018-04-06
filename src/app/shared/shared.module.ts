import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BgImageDirective } from './directives/bg-image.directive';
import { LogoComponent } from './logo/logo.component';
import { SharedMaterialModule } from './shared-material.module';

const exportedDirectives = [
  LogoComponent,
  BgImageDirective
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedMaterialModule,
  ],
  declarations: exportedDirectives,
  exports: [
    SharedMaterialModule,
    ...exportedDirectives
  ]
})
export class SharedModule {
}
