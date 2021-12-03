import { Component, OnInit, ViewEncapsulation, AfterViewInit, Output, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vclassheader',
  templateUrl: './vclassheader.component.html',
  styleUrls: ['./vclassheader.component.css']
})
export class VclassHeaderComponent implements OnInit{

  navbarOpen = false;
  public clicked = false;

  _el: any;

  toogleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicked = true;
  }

  @HostListener('document:click',['event'])
  private clickedOutside(event): void {
    if(this.clicked) {
      this._el.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');
    }
  }



}
