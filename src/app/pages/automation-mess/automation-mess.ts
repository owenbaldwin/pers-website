import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeading } from '../../ui/section-heading/section-heading';
import { ArrowLink } from '../../ui/arrow-link/arrow-link';

@Component({
  selector: 'app-automation-mess',
  imports: [RouterLink, SectionHeading, ArrowLink],
  templateUrl: './automation-mess.html',
  styleUrl: './automation-mess.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutomationMess {
  protected readonly misuseChecklist: string[] = [
    'validating the uploaded file before accepting it;',
    'detecting whether a user is working from an outdated version;',
    'removing obsolete versions of the application;',
    'making the current source of truth unmistakable;',
    'reducing the number of places where files can be saved;',
    'logging important actions;',
    'or providing reconciliation tools for when things still go wrong.',
  ];
}
