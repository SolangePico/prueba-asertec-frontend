import {Component, OnInit} from '@angular/core';
import {menuTabs} from "../shared/infratructure/MenuTabs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'asertec-frontend-angular';
  menuTabs = menuTabs;
  selectedTab = "health";

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
    this._router.navigate([this.selectedTab]);
  }

  public async changeTabEvent(event: any): Promise<void> {
    this.selectedTab = menuTabs[event.index].path;
    await this._router.navigate([this.selectedTab]);
  }
}
