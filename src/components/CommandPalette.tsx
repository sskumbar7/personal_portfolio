import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Home,
  Briefcase,
  FlaskConical,
  Mail,
  Palette,
  FileText,
  Lock,
  Compass,
  Scan,
  Copy,
  Linkedin
} from 'lucide-react';
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem
} from './ui/command';
import { inspectStore } from '../utils/inspectStore';
import { CONTACT_EMAIL } from '../data/tourScript';

/**
 * Command palette (Cmd/Ctrl+K) — one surface that reaches everything:
 * pages, case studies, and the site's signature features (guided tour,
 * inspect mode). Opened by keyboard, the nav's ⌘K chip, or a
 * `portfolio:open-palette` event.
 */
export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpenEvent = () => setOpen(true);
    window.addEventListener('keydown', onKey);
    window.addEventListener('portfolio:open-palette', onOpenEvent);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('portfolio:open-palette', onOpenEvent);
    };
  }, []);

  const run = (fn: () => void) => {
    setOpen(false);
    fn();
  };

  const go = (path: string) => run(() => navigate(path));

  const pages = [
    { label: 'Home', path: '/', icon: Home, keywords: 'home hero start' },
    { label: 'Selected Work', path: '/work', icon: Briefcase, keywords: 'work projects case studies portfolio' },
    { label: 'Design Lab', path: '/experiments', icon: FlaskConical, keywords: 'experiments lab r&d ai' },
    { label: 'Design System', path: '/design-system', icon: Palette, keywords: 'tokens colors typography system' },
    { label: 'Contact', path: '/contact', icon: Mail, keywords: 'contact reach email talk' }
  ];

  const caseStudies = [
    { label: 'I Let Claude Build a Design System', path: '/work/claude-design-system', locked: false, keywords: 'claude ai flagship studybud tokens' },
    { label: 'Discussion Forum', path: '/work/discussion-forum', locked: false, keywords: 'health community forum ux' },
    { label: 'Recyclify', path: '/work/recyclify', locked: false, keywords: 'marketplace sustainability eco mobile' },
    { label: 'Visual Design Collection', path: '/work/visual-design', locked: false, keywords: 'visual ui craft interfaces' },
    { label: 'Research-Driven Website Revamp', path: '/work/confidential', locked: true, keywords: 'client audit research confidential' },
    { label: 'Call Flow Development Tool', path: '/work/confidential-case-study-2', locked: true, keywords: 'client enterprise react flow confidential' },
    { label: 'Product Heuristics Evaluation', path: '/work/confidential-case-study-3', locked: true, keywords: 'client fintech usability confidential' }
  ];

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      title="Command palette"
      description="Jump anywhere, or run one of the site's features"
    >
      <CommandInput placeholder="Where to? Try 'claude', 'tour', or 'email'…" />
      <CommandList>
        <CommandEmpty>Nothing matches. Try fewer letters.</CommandEmpty>

        <CommandGroup heading="Do">
          <CommandItem
            value="start guided tour walkthrough guide"
            onSelect={() =>
              run(() => window.dispatchEvent(new CustomEvent('portfolio:open-tour')))
            }
          >
            <Compass />
            Start the guided tour
          </CommandItem>
          <CommandItem
            value="inspect this site design decisions annotations"
            onSelect={() =>
              run(() => {
                navigate('/');
                // activate once the homepage's annotated elements exist,
                // so the overlay measures a fully mounted page
                let tries = 0;
                const arm = () => {
                  if (document.querySelector('[data-inspect]')) {
                    inspectStore.set(true);
                  } else if (tries++ < 20) {
                    setTimeout(arm, 150);
                  }
                };
                setTimeout(arm, 250);
              })
            }
          >
            <Scan />
            Inspect this site
          </CommandItem>
          <CommandItem
            value="copy email address contact reach"
            onSelect={() =>
              run(() => {
                try {
                  navigator.clipboard?.writeText(CONTACT_EMAIL);
                } catch {
                  /* non-fatal */
                }
              })
            }
          >
            <Copy />
            Copy email address
          </CommandItem>
          <CommandItem
            value="open linkedin profile social"
            onSelect={() =>
              run(() =>
                window.open('https://www.linkedin.com/in/sskumbar7', '_blank', 'noopener,noreferrer')
              )
            }
          >
            <Linkedin />
            Open LinkedIn
          </CommandItem>
        </CommandGroup>

        <CommandGroup heading="Go to">
          {pages.map((page) => (
            <CommandItem
              key={page.path}
              value={`${page.label} ${page.keywords}`}
              onSelect={() => go(page.path)}
            >
              <page.icon />
              {page.label}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup heading="Case studies">
          {caseStudies.map((study) => (
            <CommandItem
              key={study.path}
              value={`${study.label} ${study.keywords}`}
              onSelect={() => go(study.path)}
            >
              {study.locked ? <Lock /> : <FileText />}
              {study.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
