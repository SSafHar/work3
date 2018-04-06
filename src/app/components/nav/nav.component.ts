import { Component } from '@angular/core';

interface MenuItem {
  label: string;
  link: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Home',
      link: 'home'
    }, {
      label: 'Services',
      link: 'services'
    }, {
      label: 'Portfolio',
      link: 'portfolio'
    }, {
      label: 'Team',
      link: 'team'
    }, {
      label: 'Career',
      link: 'career'
    }, {
      label: 'Contact',
      link: 'contact'
    }];
}
