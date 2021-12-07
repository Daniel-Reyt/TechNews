import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/Services/comment.service';
import { NewsService } from 'src/app/Services/news.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-view-comment',
  templateUrl: './view-comment.component.html',
  styleUrls: ['./view-comment.component.css']
})
export class ViewCommentComponent implements OnInit {

  id: any;
  role: any;

  comments: any;
  news = {
    message: '',
    date: ''
  };

  constructor(
    private aRoute: ActivatedRoute,
    private newsService: NewsService,
    private commentService: CommentService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role')
    this.id = this.aRoute.snapshot.paramMap.get('id_news')
    this.newsService.getAllCommentByNews(this.id).subscribe((res: any) => {
      this.comments = res
    })
    this.newsService.getAllNews().subscribe((res: any) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].id_news == this.id) {
          this.news.date = res[i].date
          this.news.message = res[i].message
        }
      } 
    })
  }

  deleteComment(id_comment: any) {
    this.commentService.deleteComment(id_comment).subscribe((res: any) => {
      if (res.affectedRows === 1) {
        this.newsService.getAllCommentByNews(this.id).subscribe((res: any) => {
          this.comments = res
        })
      }
    })
  }

  banUser(id_user: any) {
    this.userService.ban(id_user).subscribe((res: any) => {
      console.log(res);
      this.newsService.getAllCommentByNews(this.id).subscribe((res: any) => {
        this.comments = res
      })
    })
  }

}
