import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ResponsiveService } from '../../services/responsive.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  title = 'Portfolio';
  navData!: String[];
  activeLink!: String;
  public responsive = inject(ResponsiveService);
  constructor() {
    this.navData = ['Home', 'About', 'Projects', 'Education', 'Contact'];
    this.activeLink = 'Home';
    location.hash = '#home';
  }
  ngOnInit(): void {}

  setActive(link: String) {
    this.activeLink = link;
  }
}
