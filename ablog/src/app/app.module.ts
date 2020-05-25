import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.componet';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { IntroComponent } from './main/intro/intro.component';
import { PostlistComponent } from './main/postlist/postlist.component';
import { AboutComponent } from './About/about.component';
import { AddPostComponent } from './Addpost/addpost.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    MainComponent,
    IntroComponent,
    PostlistComponent,
    AboutComponent,
    AddPostComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
