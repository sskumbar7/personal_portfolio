/**
 * Guided tour script — a scripted agent, deliberately not an LLM.
 * Each node types out its messages, then offers choices. A node may
 * navigate and/or scroll to an anchor before speaking.
 */

export interface TourAction {
  /** Route to navigate to before speaking (skipped if already there) */
  navigate?: string;
  /** data-tour anchor to scroll to after navigation settles */
  scrollTo?: string;
}

export interface TourChoice {
  label: string;
  next?: string;
  /** Copies the contact email, then jumps to `next` */
  copyEmail?: boolean;
  /** Opens an external URL in a new tab (no node change) */
  external?: string;
}

export interface TourNode {
  action?: TourAction;
  messages: string[];
  choices: TourChoice[];
}

export const CONTACT_EMAIL = 'sskumbar7@gmail.com';

export const tourScript: Record<string, TourNode> = {
  start: {
    messages: [
      'Well, hello 👋',
      'You found the tour guide. Sandeep built me so you can skip the aimless scrolling.',
      'Quick question: what kind of visitor are you?'
    ],
    choices: [
      { label: "I'm hiring", next: 'hiring' },
      { label: 'Fellow designer', next: 'designer' },
      { label: 'Just exploring', next: 'explore' }
    ]
  },

  hiring: {
    action: { navigate: '/', scrollTo: 'timeline' },
    messages: [
      'Straight to business. Respect.',
      'Eleven years, six companies, zero shortcuts. Google via EPAM, Ecolab, Happiest Minds, and now KPMG.',
      'The short version: he leads experience design and builds design systems that survive contact with real teams.'
    ],
    choices: [
      { label: 'Show me proof', next: 'work' },
      { label: 'How do I reach him?', next: 'contact' }
    ]
  },

  designer: {
    messages: [
      'A fellow craftsperson. No fluff then, straight to the good stuff.',
      'Exhibit A: Sandeep directed Claude to build a full design system in one weekend. He kept the taste, Claude did the assembly.',
      'Exhibit B: this site can annotate itself. On a desktop? Hit Inspect in the homepage nav and see the reasoning behind every design call.'
    ],
    choices: [
      { label: 'Read the Claude story', next: 'flagship' },
      { label: 'Take me to the Lab', next: 'lab' }
    ]
  },

  explore: {
    action: { navigate: '/', scrollTo: 'principles' },
    messages: [
      'Perfect. The scenic route it is.',
      'Start here: four principles that steer every pixel on this site. Human first, data informed, accessible, iterative.',
      'Everything you meet downstream answers to these.'
    ],
    choices: [
      { label: 'Keep going', next: 'timeline' },
      { label: 'Skip to the work', next: 'work' }
    ]
  },

  timeline: {
    action: { navigate: '/', scrollTo: 'timeline' },
    messages: [
      'A decade of shipping. From a startup in 2014 to KPMG today, and each stop added a layer: research, then systems, now AI direction.'
    ],
    choices: [
      { label: 'Now the work', next: 'work' },
      { label: 'How does he use AI?', next: 'ai' }
    ]
  },

  ai: {
    messages: [
      'AI here is a design partner, not an autopilot. It speeds up exploration. Taste and judgment stay human.',
      'Exhibit A: he directed Claude to build an entire design system in a weekend. Exhibit B: this site annotates itself. Try Inspect in the nav, on desktop.'
    ],
    choices: [
      { label: 'Read the Claude story', next: 'flagship' },
      { label: 'Visit the Design Lab', next: 'lab' }
    ]
  },

  work: {
    action: { navigate: '/work' },
    messages: [
      'Here it is. The public case studies are fully open, read away.',
      'The blurred ones are client work. Real projects, real NDAs. He shares those in person, just ask.',
      'Personal favorite: the one where Claude builds a design system, and it actually works.'
    ],
    choices: [
      { label: 'Open that one', next: 'flagship' },
      { label: 'How do I reach him?', next: 'contact' }
    ]
  },

  flagship: {
    action: { navigate: '/work/claude-design-system' },
    messages: [
      'Enjoy the read. Pro tip: that little rail on the left is a Figma style layers panel. Click any layer to jump around.',
      'Find me when you are done. Bottom left, as always.'
    ],
    choices: [
      { label: 'How do I reach him?', next: 'contact' },
      { label: 'Restart the tour', next: 'start' }
    ]
  },

  lab: {
    action: { navigate: '/experiments' },
    messages: [
      'Welcome to the Lab. Short experiments with new AI design tools, written up honestly, failures included.',
      "Current entry: can Figma's AI agent produce a usable first draft? The answer surprised him."
    ],
    choices: [
      { label: 'Now show me the work', next: 'work' },
      { label: 'How do I reach him?', next: 'contact' }
    ]
  },

  contact: {
    messages: [
      'Easy. Grab his email, or find him on LinkedIn.',
      'He genuinely likes talking design, systems, and half-formed ideas. Bring yours.'
    ],
    choices: [
      { label: 'Copy email', copyEmail: true, next: 'copied' },
      { label: 'Open LinkedIn', external: 'https://www.linkedin.com/in/sskumbar7' },
      { label: "That's all, thanks", next: 'end' }
    ]
  },

  copied: {
    messages: [`Done. ${CONTACT_EMAIL} is on your clipboard. Go say hi.`],
    choices: [
      { label: 'Open LinkedIn', external: 'https://www.linkedin.com/in/sskumbar7' },
      { label: "That's all, thanks", next: 'end' }
    ]
  },

  end: {
    messages: ['A pleasure. I will be right here if you need me again 👋'],
    choices: [{ label: 'Restart the tour', next: 'start' }]
  }
};
