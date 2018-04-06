import { NgModule } from '@angular/core';
import { MatButtonModule, MatGridListModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

const modules = [
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule,
  MatToolbarModule,
  MatTabsModule,
  MatGridListModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class SharedMaterialModule {
}
