import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from "../services/post.service";
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { post } from 'selenium-webdriver/http';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {

  posts: Post[];
  postSubscription: Subscription;

  constructor(private postService: PostService, private router: Router){}

  ngOnInit(){
    this.postSubscription=this.postService.postSubject.subscribe(
      (posts:Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.getPosts();
    this.postService.emitPosts();
    this.postService.onLike();
    this.postService.onDislike
    }
  
    onDeletePost(post: Post) {
      this.postService.removePost(post);
    }
  
    onViewPost(id: number) {
      this.router.navigate(['/posts', 'post', id]);
    }
    

    ngOnDestroy(){
      this.postSubscription.unsubscribe();
    }
  }