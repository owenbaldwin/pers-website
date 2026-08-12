import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeading } from '../../ui/section-heading/section-heading';
import { MediaPlaceholder } from '../../ui/media-placeholder/media-placeholder';
import { ArrowLink } from '../../ui/arrow-link/arrow-link';

interface Principle {
  index: string;
  title: string;
  body: string;
}

@Component({
  selector: 'app-home',
  imports: [SectionHeading, MediaPlaceholder, ArrowLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected readonly principles: Principle[] = [
    {
      index: '01',
      title: 'Understand the real workflow',
      body: 'Before designing a solution, I want to understand how the work is actually done: the exceptions, hidden knowledge, workarounds and decisions that rarely appear in a formal process diagram.',
    },
    {
      index: '02',
      title: 'Reduce it to something buildable',
      body: 'I turn that complexity into entities, workflows, assumptions and smaller product problems — then identify the simplest useful version worth testing.',
    },
    {
      index: '03',
      title: 'Prototype the idea',
      body: 'I can move from product thinking into implementation myself: building AI workflows, applications and prototypes rather than relying on slides to prove an idea.',
    },
    {
      index: '04',
      title: 'Learn from the result',
      body: 'The first solution is rarely the right one. I care about what users trust, what breaks, what creates friction and what the prototype reveals about the underlying problem.',
    },
  ];

  protected readonly capabilities: string[] = [
    'AI product development',
    'LLM-powered workflows',
    'Product discovery',
    'Workflow automation',
    'Rapid prototyping',
    'RAG and retrieval systems',
    'Agentic workflows',
    'Domain modelling',
    'Creative technology',
    'Film & media technology',
  ];
}
