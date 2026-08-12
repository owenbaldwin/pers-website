import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Eyebrow label + editorial section title, sitting under a hairline rule. */
@Component({
  selector: 'app-section-heading',
  templateUrl: './section-heading.html',
  styleUrl: './section-heading.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeading {
  readonly heading = input.required<string>();
  readonly eyebrow = input<string>('');
  readonly headingId = input<string>('');
  readonly aside = input<string>('');
}
