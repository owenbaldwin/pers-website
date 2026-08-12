import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Deliberate placeholder for imagery that will be added later.
 * TODO(owen): swap these for <img> elements once screenshots exist.
 */
@Component({
  selector: 'app-media-placeholder',
  templateUrl: './media-placeholder.html',
  styleUrl: './media-placeholder.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaPlaceholder {
  readonly label = input.required<string>();
  readonly note = input<string>('');
  readonly caption = input<string>('');
  /** CSS aspect ratio, e.g. '16 / 10'. */
  readonly ratio = input<string>('16 / 10');
}
