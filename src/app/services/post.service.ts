import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
import DataSnapshot = firebase.database.DataSnapshot;
import * as firebase from 'firebase';

export class PostService {
  private posts: Post[];
  postSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
    this.loveIts = 0;
}
  emitPosts() {
    this.postSubject.next(this.posts.slice());
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.emitPosts();
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
}

getPosts() {
  firebase.database().ref('/posts')
    .on('value', (data: DataSnapshot) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      }
    );
}

getSinglePost(id: number) {
  return new Promise(
    (resolve, reject) => {
      firebase.database().ref('/posts/' + id).once('value').then(
        (data: DataSnapshot) => {
          resolve(data.val());
        }, (error) => {
          reject(error);
        }
      );
    }
  );
}

createNewPost(newPost: Post) {
  this.posts.push(newPost);
  this.savePosts();
  this.emitPosts();
}

removePost(post: Post) {
  const postIndexToRemove = this.posts.findIndex(
    (postEl) => {
      if(postEl === post) {
        return true;
      }
    }
  );
  this.posts.splice(postIndexToRemove, 1);
  this.savePosts();
  this.emitPosts();
}

loveIts: number;

onLike() {
  this.loveIts++;
  console.log(this.loveIts);

}


onDislike() {
  this.loveIts--;
  console.log(this.loveIts);
}

}