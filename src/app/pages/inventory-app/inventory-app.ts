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
  selector: 'app-inventory-app',
  imports: [SectionHeading, MediaPlaceholder, ArrowLink],
  templateUrl: './inventory-app.html',
  styleUrl: './inventory-app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InventoryApp {
  protected readonly contributions: string[] = [
    'Identifying the annual inventory check as a high-friction, entirely manual process',
    'Prototyping a working tool before proposing a formal internal project',
    'Designing a workflow around barcode scanners the team already used for equipment hire',
    'Matching scanned barcodes against the existing inventory spreadsheet automatically',
    'Flagging unmatched assets for investigation rather than losing them silently',
    'Removing the backend entirely: no server, database or stored inventory data',
    'Working out operating procedures for stale spreadsheets, duplicate files and naming drift',
    'Rolling the tool out with the facilities team and measuring the result',
  ];

  protected readonly learnings: Learning[] = [
    {
      index: '01',
      title: 'AI helped build it. AI did not belong inside it.',
      body: [
        'I used AI-assisted development heavily to move from an idea to something usable quickly, testing it against real data alongside the people who would actually use it.',
        'But there is no AI in the application itself. Matching a scanned barcode against an asset ID is deterministic: the identifier either exists or it does not. An LLM would only have added cost, latency and uncertainty to a problem that needs exact answers.',
      ],
    },
    {
      index: '02',
      title: 'The simplest architecture is the one an organisation can actually adopt.',
      body: [
        'My first instinct was a conventional web product: a database, accounts, server-side storage. Technically straightforward, but it would have added another system holding company data, another security surface, and new questions about access and maintenance.',
        'So I removed the backend. The tool runs entirely in the browser: upload a spreadsheet, do the inventory work, download the result. Close the tab and the data disappears:a real trade-off, but the right one for this use case.',
      ],
    },
    {
      index: '03',
      title: 'Software exposes the process it automates.',
      body: [
        'Once the tool worked, the biggest source of failure was not the code, it was the human factors around it: someone using an out-of-date spreadsheet, two people starting separate files, inconsistent naming, assets that existed physically but not in the master records.',
        'Making a process faster also makes its inconsistencies visible. Deployment could not stop at the interface; it needed simple operating procedures and ways of handling exceptions. I wrote a guide for the facilities team to help them get started, and then checked in regularly to make sure they were following it.',
      ],
    },
    {
      index: '04',
      title: 'A working prototype earns trust an abstract proposal cannot.',
      body: [
        'Rather than pitching a new internal software project, I built something people could try. That gave stakeholders a tangible thing to evaluate instead of an abstract technology decision to approve.',
      ],
    },
  ];

  protected pad(value: number): string {
    return value.toString().padStart(2, '0');
  }

  protected readonly stages: string[] = [
    'Upload spreadsheet',
    'Scan assets',
    'Match against inventory',
    'Flag exceptions',
    'Reconcile',
    'Export updated file',
  ];
}
