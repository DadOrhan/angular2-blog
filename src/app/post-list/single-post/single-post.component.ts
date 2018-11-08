import { Component, Input, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})

export class SinglePostComponent implements OnInit {

  post: Post;
  @Input() postLoveIts: number;
  @Input() postCreated_at: Date;
 
  constructor(private route: ActivatedRoute, private postService: PostService,
  private router: Router) { 

  }

  ngOnInit() {
    this.post = new Post('', '');
    const id = this.route.snapshot.params['id'];
    this.postService.getSinglePost(+id).then(
      (post: Post) => {
        this.post = post;
      }
    );
  }

  onBack() {
    this.router.navigate(['/posts']);
  }
  
  onLike() {
    this.postLoveIts++;
    console.log(this.postLoveIts);

  }

  onDislike() {
    this.postLoveIts--;
    console.log(this.postLoveIts);
  }

}
