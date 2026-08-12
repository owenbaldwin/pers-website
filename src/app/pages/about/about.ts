import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArrowLink } from '../../ui/arrow-link/arrow-link';
import { siteLinks } from '../../content/site-links';

@Component({
  selector: 'app-about',
  imports: [ArrowLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly links = siteLinks;
}
