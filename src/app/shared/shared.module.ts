import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NavComponent } from './components/nav/nav.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';




const material = [MatIconModule];

const components = [
    NavComponent,
    LayoutComponent,
    NavButtonComponent,
    HeaderComponent,
];

@NgModule({
  declarations: [
    ...components,
    ContainerComponent,
    
  ],
  imports: [
    CommonModule, ...material, RouterModule
  ],
  exports: [
    ...components, ...material
  ]
})
export class SharedModule { }
