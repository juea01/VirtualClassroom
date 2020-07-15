import {Component, Input, OnInit, OnDestroy} from "@angular/core"
import {Subscription} from 'rxjs'
import { componentFactoryName } from '@angular/compiler';
import { Post } from '../post.model';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})

export class PostListComponent implements OnInit, OnDestroy{
 posts: Post[] = [];
 private postsSub: Subscription

 constructor(public postsService: PostsService) {}
  ngOnInit(){
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostsUpdateListener().subscribe((posts: Post[])=>{
      this.posts = posts;
    });
  }

  // to avoid memory leak, we need to unsubscribe
  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }
}
