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
  selector: 'app-inceptal',
  imports: [SectionHeading, MediaPlaceholder, ArrowLink],
  templateUrl: './inceptal.html',
  styleUrl: './inceptal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Inceptal {
  protected readonly contributions: string[] = [
    'Starting from a personal, first-hand problem as an independent artist;',
    'Reframing the problem from "what sounds similar" to "where do I actually fit";',
    'Designing the product around the decision an artist is trying to make, not a database of other musicians;',
    "Building the system to gather context about an artist's audience, identity and trajectory, not just genre and keywords;",
    'Treating the product as an evolving research and reasoning system rather than a static database;',
    'Separating system validation (can it gather and retain reliable information?) from product validation (is it actually useful to artists?);',
    'Testing assumptions and examining poor outputs rather than treating a plausible AI response as proof the design works;',
    'Designing the AI as one component inside a larger product system, not the product itself.',
  ];

  protected readonly learnings: Learning[] = [
    {
      index: '01',
      title: 'Start with the decision, not the technology.',
      body: [
        "One of the principles I've increasingly adopted for AI products is to start with the decision a user is trying to make. For Inceptal, the useful output isn't a pile of information about other musicians, it's instead helping an artist see their position clearly and find examples they can actually learn from.",
      ],
    },
    {
      index: '02',
      title: 'A technically working pipeline can still be a bad product.',
      body: [
        'Building Inceptal in layers made that distinction unavoidable: can the system gather and organise information reliably, preserve context, and retrieve the right evidence? Only once those foundations hold up does it make sense to judge whether the experience is actually valuable to an artist.',
      ],
    },
    {
      index: '03',
      title: 'Confidence has to be earned, not generated.',
      body: [
        "I've become more sceptical of AI products that optimise for impressive-looking output. A plausible answer delivered instantly isn't necessarily a useful one, especially for something as personal as an artist's career direction.",
      ],
    },
    {
      index: '04',
      title: 'AI makes it dangerously easy to build more than you need.',
      body: [
        'When almost any feature is technically possible, product judgement matters more, not less. The question stops being "can we build this?" and becomes whether it\'s actually the problem, whether the system can support the claim it\'s making, and whether it helps someone make a better decision.',
      ],
    },
  ];

  protected pad(value: number): string {
    return value.toString().padStart(2, '0');
  }

  protected readonly stages: string[] = [
    'Artist context',
    'Public signal and user input',
    'Evidence retrieval',
    'Reasoning layer',
    'Actionable positioning',
  ];
}
