import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeading } from '../../ui/section-heading/section-heading';
import { MediaPlaceholder } from '../../ui/media-placeholder/media-placeholder';
import { ArrowLink } from '../../ui/arrow-link/arrow-link';

interface Learning {
  index: string;
  title: string;
  body: string[];
}

@Component({
  selector: 'app-lvfx',
  imports: [SectionHeading, MediaPlaceholder, ArrowLink],
  templateUrl: './lvfx.html',
  styleUrl: './lvfx.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lvfx {
  protected readonly contributions: string[] = [
    'Understanding how VFX breakdown and budgeting actually happens;',
    'Translating production concepts into a usable data model;',
    'Designing the workflow from screenplay ingestion through to cost estimation;',
    'Experimenting with multi-stage LLM analysis rather than relying on a single prompt;',
    'Structuring scenes, shots, assets, effects and assumptions into a usable data model;',
    'Incorporating production guidance and historical project information into AI-assisted analysis;',
    'Designing AI-assisted costing workflows',
    'Building and iterating on the application',
    'Presenting prototypes and using feedback from experienced VFX producers and supervisors to change the product.',
  ];

  protected readonly learnings: Learning[] = [
    {
      index: '01',
      title: 'AI output needs a product model around it.',
      body: [
        'A useful production system cannot simply generate paragraphs of plausible analysis. The output has to become structured information that users can inspect, edit, connect and reuse.',
      ],
    },
    {
      index: '02',
      title: 'Domain knowledge changes the problem.',
      body: [
        'The useful categories, relationships and controls emerged from understanding VFX production rather than from the capabilities of the language model.',
      ],
    },
    {
      index: '03',
      title: 'Human control matters most where judgement matters most.',
      body: [
        'Automation is valuable for reducing repetitive interpretation and creating a strong starting point. But assumptions, creative interpretation and financial consequences still require explicit human oversight.',
      ],
    },
    {
      index: '04',
      title: 'The first architecture is rarely the final workflow.',
      body: [
        'Several important product decisions changed as the system became more concrete. Building the product exposed assumptions that could not have been discovered through specification alone.',
      ],
    },
  ];

  protected pad(value: number): string {
    return value.toString().padStart(2, '0');
  }

  protected readonly stages: string[] = [
    'Screenplay',
    'Structured breakdown',
    'Shots / assets / effects',
    'Assumptions',
    'Historical context',
    'Cost estimation',
    'Vendor bidding'
  ];
}
