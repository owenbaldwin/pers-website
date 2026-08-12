import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Experience {
  period: string;
  company: string;
  role: string;
  summary: string;
}

interface Project {
  name: string;
  description: string;
  technologies: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly currentYear = new Date().getFullYear();

  protected readonly experience: Experience[] = [
    {
      period: '2022 — Present',
      company: 'Your company',
      role: 'Senior Software Engineer',
      summary:
        'Describe the products you lead, the people you collaborate with, and the impact of your work.',
    },
    {
      period: '2019 — 2022',
      company: 'Previous company',
      role: 'Software Engineer',
      summary:
        'Summarise the systems you built, the problems you solved, and the skills you developed.',
    },
    {
      period: '2017 — 2019',
      company: 'Earlier company',
      role: 'Junior Software Engineer',
      summary:
        'Add an earlier role, internship, education, or another useful milestone from your CV.',
    },
  ];

  protected readonly projects: Project[] = [
    {
      name: 'Project one',
      description: 'A short, outcome-focused description of a project you are proud of.',
      technologies: 'Angular · TypeScript · SCSS',
      url: 'https://github.com/owenbaldwin2',
    },
    {
      name: 'Project two',
      description: 'Explain what you made, who it helped, and what made the work interesting.',
      technologies: 'Add your technology stack',
      url: 'https://github.com/owenbaldwin2',
    },
    {
      name: 'Project three',
      description:
        'Use this space for open-source work, a case study, or an independent experiment.',
      technologies: 'Add your technology stack',
      url: 'https://github.com/owenbaldwin2',
    },
  ];
}
