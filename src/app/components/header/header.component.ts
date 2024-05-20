import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, RouterModule } from '@angular/router';
import { GlobalDataService } from '../../services/global-data.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  loggedUserId: string = 'null';

  constructor(private navCtl: Router, private globalData: GlobalDataService) { }

  ngOnInit(): void {
    this.globalData.getLoggedUserId().subscribe(id => {
      this.loggedUserId = id;
    });
  }

  goAccount() {
    const navExtras: NavigationExtras = {
      queryParams: {
        userId: this.loggedUserId
      }
    };
    this.navCtl.navigate(['account'], navExtras);
  }

}
