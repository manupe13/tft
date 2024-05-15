import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-go-up-arrow',
  standalone: true,
  imports: [],
  templateUrl: './go-up-arrow.component.html',
  styleUrl: './go-up-arrow.component.css'
})
export class GoUpArrowComponent {

  btnGoTop!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.btnGoTop = new ElementRef(document.querySelector('#myBtn'));

    this.btnGoTop.nativeElement.addEventListener('click', () => {
      if (this.btnGoTop.nativeElement instanceof HTMLButtonElement) {
        this.btnGoTop.nativeElement.style.display = 'block';
      } else {
        console.error('btnGoTop is not an HTMLButtonElement');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 0) {
        this.btnGoTop.nativeElement.style.display = 'block';
      } else {
        this.btnGoTop.nativeElement.style.display = 'none';
      }
    });
  }

}
