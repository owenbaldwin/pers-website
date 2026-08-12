import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Understated call to action: a text link with a moving rule and arrow. */
@Component({
  selector: 'app-arrow-link',
  imports: [RouterLink],
  templateUrl: './arrow-link.html',
  styleUrl: './arrow-link.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowLink {
  readonly label = input.required<string>();
  /** Internal route, e.g. '/work/lvfx'. */
  readonly to = input<string>('');
  readonly fragment = input<string>('');
  /** External or mailto destination, used when `to` is not set. */
  readonly href = input<string>('');
  /** 'primary' is slightly heavier; 'quiet' is a plain text link. */
  readonly tone = input<'primary' | 'quiet'>('quiet');
}
