import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

interface navItem{
  title: string;
  route: string;
}

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './navBar.component.html',
  styleUrl: './navBar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {

  @Input()
  public navItems: navItem[] = [
    {title: 'item', route: 'lin'},
    {title: 'item', route: 'lin'},
    {title: 'item', route: 'lin'},
    {title: 'item', route: 'lin'}
  ];
}
