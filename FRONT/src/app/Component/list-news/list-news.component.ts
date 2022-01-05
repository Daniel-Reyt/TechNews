import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NewsService } from 'src/app/Services/news.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {

  ListeNews: any;
  commentFormIsView: boolean = false;
  addComment: any;

  constructor(
    private newsService: NewsService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe((res: any) => {
      this.ListeNews = res
    })
    this.addComment = this.fb.group({
      comment: ''
    })
  }
  
  commentFormKeyPress(event: KeyboardEvent, id_news: any) {
    if (event.key === 'Enter') {
      let comment = {
        comment: this.addComment.controls.comment.value,
        id_user: localStorage.getItem('id_user'),
        id_news: id_news
      }
      this.newsService.postComment(comment).subscribe((res: any) => {
        if (res.affectedRows === 1) {
          swal.fire({
            text: 'commentaire ajouté !',
            icon: 'success'
          }).then((res) => {
            this.SetViewOfCommentForm()
          })
        }
      })
    }
  }

  SetViewOfCommentForm() {
    if (this.commentFormIsView === true) {
      this.commentFormIsView = false
    } else {
      this.commentFormIsView = true
    }
  }

}
