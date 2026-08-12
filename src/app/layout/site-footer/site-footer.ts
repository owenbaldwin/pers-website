import { ChangeDetectionStrategy, Component } from '@angular/core';
import { siteLinks } from '../../content/site-links';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  protected readonly links = siteLinks;
  protected readonly year = new Date().getFullYear();
}
