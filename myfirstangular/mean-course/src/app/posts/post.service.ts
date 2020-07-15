import {Post} from './post.model';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class PostsService{
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

constructor(private http: HttpClient){}

  getPosts() {
      //    return [...this.posts]; //making a copy of posts array as java script is pass by reference
     this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
     .subscribe((postData)=>{
      this.posts = postData.posts;
      this.postsUpdated.next([...this.posts]);
     });
  }

  getPostsUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string){
    const post: Post = {id:null,title: title, content: content};
    this.http.post<{message:string}>('http://localhost:3000/api/posts',post)
    .subscribe((responseData)=>{
      console.log(responseData.message);
      this.posts.push(post);
      this.postsUpdated.next([...this.posts]);
    });

  }
}
