import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeading } from '../../ui/section-heading/section-heading';
import { ArrowLink } from '../../ui/arrow-link/arrow-link';

@Component({
  selector: 'app-aviation-product',
  imports: [SectionHeading, ArrowLink],
  templateUrl: './aviation-product.html',
  styleUrl: './aviation-product.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AviationProduct {}
