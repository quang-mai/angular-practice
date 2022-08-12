import { TextComponent } from './text/text.component';
import { ButtonComponent } from './button/button.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { CssPositionComponent } from './css-position/css-position.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
    {path: '', redirectTo: 'youtube', pathMatch: 'full'},
    {path: 'youtube', component: YoutubeComponent},
    {path: 'grid', component: GridComponent},
    {path: 'position', component: CssPositionComponent},
    {path: 'flexbox', component: FlexboxComponent},
    {path: 'button', component: ButtonComponent},
    {path: 'text', component: TextComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
