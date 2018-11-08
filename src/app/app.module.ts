import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { SinglePostComponent } from './post-list/single-post/single-post.component';
import { PostFormComponent } from './post-list/post-form/post-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PostService } from './services/post.service';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent},
  { path: '', component: PostListComponent },
  {path: 'posts/view/:id', component: SinglePostComponent},
  { path: 'new', component : PostFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    SinglePostComponent,
    PostFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
