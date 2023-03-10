import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/parts/header/header.component';
import { FooterComponent } from './components/parts/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NewsComponent } from './components/pages/news/news.component';
import { AddPostComponent } from './components/pages/add-post/add-post.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ThemeService } from './services/theme.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { PostComponent } from './components/pages/post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent,
    AddPostComponent,
    ErrorComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
