import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Add published pieces by giving a note a `slug` (and a `date`);
 * anything without a slug renders as forthcoming.
 */
export interface Note {
  title: string;
  summary?: string;
  date?: string;
  slug?: string;
}

@Component({
  selector: 'app-writing',
  templateUrl: './writing.html',
  styleUrl: './writing.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Writing {
  protected pad(value: number): string {
    return value.toString().padStart(2, '0');
  }

  protected readonly notes: Note[] = [
    {
      title: 'When automation creates a mess of its own',
      summary:
        'Building a small inventory tool taught me less about automation than about what happens once real people start using it.',
      date: 'Aug 2026',
      slug: 'automation-creates-a-mess',
    },
    {
      title: 'Fly the plan. Know your alternates.',
      summary:
        'What four habits of flight crews might teach product teams building in a world that refuses to sit still.',
      date: 'Aug 2026',
      slug: 'know-your-alternates',
    },
    { title: 'What we learned turning screenplays into structured production data' },
    { title: 'AI adoption starts with workflows, not models' },
    { title: "The difficult part of an AI product isn't always the AI" },
  ];
}
