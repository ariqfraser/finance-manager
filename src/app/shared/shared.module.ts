import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NavComponent } from './components/nav/nav.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';




const material = [MatIconModule];

const components = [
    NavComponent,
    LayoutComponent,
];

@NgModule({
  declarations: [
    ...components,
    NavButtonComponent,
  ],
  imports: [
    CommonModule, ...material, RouterModule
  ],
  exports: [
    ...components, ...material
  ]
})
export class SharedModule { }
