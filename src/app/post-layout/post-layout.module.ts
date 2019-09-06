import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, MainComponent, MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class PostLayoutModule { }
