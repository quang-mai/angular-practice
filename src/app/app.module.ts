import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { TextComponent } from './text/text.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { GridComponent } from './grid/grid.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { HeaderComponent } from './header/header.component';
import { CssPositionComponent } from './css-position/css-position.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TextComponent,
    YoutubeComponent,
    GridComponent,
    FlexboxComponent,
    HeaderComponent,
    CssPositionComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
