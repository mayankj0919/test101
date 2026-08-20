export interface TimelineEvent {
  id: string;
  stageNumber: number;
  stageCode: string;
  title: string;
  lane: 'middle' | 'left' | 'right';
  laneIndex: number; // -1 for left, 0 for middle, 1 for right
  date: string;
  dateShort: string;
  time: string;
  phase: string;
  phaseCode: string;
  category: 'Registration' | 'Selection' | 'Challenge' | 'Hackathon' | 'Judging' | 'Finale';
  description: string;
  details: string[];
  xpIcon: 'notepad' | 'alert' | 'wizard' | 'cmd' | 'gear' | 'calendar' | 'cpu' | 'trophy';
  xpFileName: string;
  status: 'COMPLETED' | 'LIVE' | 'UPCOMING';
  accentColor: string; // '#FF5FCF' | '#9929EA' | '#FFE279' | '#00F0FF'
  memoryAddress: string;
  badge: string;
  actionText: string;
}

// Pattern: middle -> left -> right -> middle -> left -> right ...
export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'stage-1',
    stageNumber: 1,
    stageCode: 'STAGE_01',
    title: 'Registration Opens!',
    lane: 'middle',
    laneIndex: 0,
    date: '20th September',
    dateShort: '20 SEP',
    time: '11:00 AM IST',
    phase: 'Phase 01: The Genesis',
    phaseCode: 'INIT_PORTAL',
    category: 'Registration',
    description: 'Registrations begin for CodeUtsava 8.0, the flagship hackathon of The Turing Club of Programmers, NIT Raipur.',
    details: [
      'Team size: 2-4 members per squad',
      'Free registration for students across India',
      'Submit team credentials and developer portfolios'
    ],
    xpIcon: 'notepad',
    xpFileName: 'REGISTRATION_OPEN.TXT',
    status: 'COMPLETED',
    accentColor: '#FFE279', // Warm cyber yellow for middle
    memoryAddress: '0x00FF5FCF',
    badge: 'STAGE 01',
    actionText: 'Apply_Team.exe'
  },
  {
    id: 'stage-2',
    stageNumber: 2,
    stageCode: 'STAGE_02',
    title: 'Shortlisting Begins!',
    lane: 'left',
    laneIndex: -1,
    date: '5th October',
    dateShort: '05 OCT',
    time: '11:00 AM IST',
    phase: 'Phase 01: The Genesis',
    phaseCode: 'EVAL_BATCH_1',
    category: 'Selection',
    description: 'Team Shortlisting begins in batches based on GitHub portfolios, problem pitch, and tech stacks.',
    details: [
      'Resume & project vetting by technical committee',
      'Shortlisting notifications dispatched via email',
      'Confirmation deadline: 48 hours post-dispatch'
    ],
    xpIcon: 'gear',
    xpFileName: 'SHORTLIST_BATCH_01.LOG',
    status: 'COMPLETED',
    accentColor: '#FF5FCF', // Neon pink for left
    memoryAddress: '0x009929EA',
    badge: 'STAGE 02',
    actionText: 'Check_Status.bat'
  },
  {
    id: 'stage-3',
    stageNumber: 3,
    stageCode: 'STAGE_03',
    title: 'Registration Closes!',
    lane: 'right',
    laneIndex: 1,
    date: '20th October',
    dateShort: '20 OCT',
    time: '11:59 PM IST',
    phase: 'Phase 01: The Genesis',
    phaseCode: 'PORTAL_LOCK',
    category: 'Registration',
    description: 'Registrations for CodeUtsava officially close. Submission gateway locks worldwide.',
    details: [
      'Strict deadline: No late submissions entertained',
      'Database snapshot finalized for final screening',
      'Over 2,500+ hacker teams registered'
    ],
    xpIcon: 'alert',
    xpFileName: 'GATEWAY_LOCKDOWN.SYS',
    status: 'COMPLETED',
    accentColor: '#9929EA', // Electric purple for right
    memoryAddress: '0x007A10E5',
    badge: 'STAGE 03',
    actionText: 'View_Metrics.vbs'
  },
  {
    id: 'stage-4',
    stageNumber: 4,
    stageCode: 'STAGE_04',
    title: 'Final Teams Announced',
    lane: 'middle',
    laneIndex: 0,
    date: '21st October',
    dateShort: '21 OCT',
    time: '11:00 AM IST',
    phase: 'Phase 02: Selection & Briefing',
    phaseCode: 'ROSTER_CONFIRMED',
    category: 'Selection',
    description: 'Final Shortlisted Teams for CodeUtsava are officially declared on the portal and Discord channel.',
    details: [
      'Top 80 squads selected for on-site grand arena',
      'Official Discord access tokens broadcasted',
      'Travel & accommodation guidelines released'
    ],
    xpIcon: 'wizard',
    xpFileName: 'FINAL_ROSTER_V8.DLL',
    status: 'COMPLETED',
    accentColor: '#FFE279', // Warm yellow
    memoryAddress: '0x00A1F021',
    badge: 'STAGE 04',
    actionText: 'Download_Roster.cmd'
  },
  {
    id: 'stage-5',
    stageNumber: 5,
    stageCode: 'STAGE_05',
    title: 'Problem Statements Released',
    lane: 'left',
    laneIndex: -1,
    date: '22nd October',
    dateShort: '22 OCT',
    time: '11:00 AM IST',
    phase: 'Phase 02: Selection & Briefing',
    phaseCode: 'PS_DECRYPT',
    category: 'Challenge',
    description: 'Problem Statements for CodeUtsava across AI/ML, Web3, FinTech, HealthTech, and Open Innovation are unlocked.',
    details: [
      '6 cutting-edge sponsor tracks revealed',
      'Evaluation rubric and dataset links distributed',
      'Pre-hack brainstorming commences'
    ],
    xpIcon: 'cmd',
    xpFileName: 'PROBLEM_STATEMENTS.EXE',
    status: 'COMPLETED',
    accentColor: '#FF5FCF', // Neon pink
    memoryAddress: '0x00C8D94B',
    badge: 'STAGE 05',
    actionText: 'Decrypt_PS.bin'
  },
  {
    id: 'stage-6',
    stageNumber: 6,
    stageCode: 'STAGE_06',
    title: 'Registration at CCC Entry',
    lane: 'right',
    laneIndex: 1,
    date: '26th October',
    dateShort: '26 OCT',
    time: '08:00 AM IST',
    phase: 'Phase 03: The Arena',
    phaseCode: 'ONSITE_CHECKIN',
    category: 'Hackathon',
    description: 'On-site Registration and hacker verification at the Central Computer Center (CCC), NIT Raipur.',
    details: [
      'ID verification & physical badge collection',
      'Codeutsava Swag Bag & Kit distribution',
      'High-speed LAN workstation allocations'
    ],
    xpIcon: 'calendar',
    xpFileName: 'CCC_CHECKIN_PROTOCOL.DOC',
    status: 'LIVE',
    accentColor: '#9929EA', // Electric purple
    memoryAddress: '0x00E2B880',
    badge: 'STAGE 06',
    actionText: 'Verify_Pass.scr'
  },
  {
    id: 'stage-7',
    stageNumber: 7,
    stageCode: 'STAGE_07',
    title: 'Opening Ceremony',
    lane: 'middle',
    laneIndex: 0,
    date: '26th October',
    dateShort: '26 OCT',
    time: '10:00 AM IST',
    phase: 'Phase 03: The Arena',
    phaseCode: 'KEYNOTE_IGNITE',
    category: 'Hackathon',
    description: 'Grand Opening Ceremony of Codeutsava with keynote speeches from distinguished industry leaders and faculty.',
    details: [
      'Welcome address by Dean & TCP Conveners',
      'Sponsor briefs and challenge track orientation',
      'Countdown to hackathon ignition'
    ],
    xpIcon: 'notepad',
    xpFileName: 'CEREMONY_KEYNOTE.TXT',
    status: 'LIVE',
    accentColor: '#FFE279', // Warm yellow
    memoryAddress: '0x0010FFA0',
    badge: 'STAGE 07',
    actionText: 'Watch_Stream.avi'
  },
  {
    id: 'stage-8',
    stageNumber: 8,
    stageCode: 'STAGE_08',
    title: 'Hackathon Begins!',
    lane: 'left',
    laneIndex: -1,
    date: '26th October',
    dateShort: '26 OCT',
    time: '11:00 AM IST',
    phase: 'Phase 03: The Arena',
    phaseCode: 'HACK_TIMER_START',
    category: 'Hackathon',
    description: 'Commencement of Codeutsava! The 28-hour non-stop coding sprint officially sparks into life.',
    details: [
      'GitHub repository commit logging begins',
      'Discord mentor channels live 24/7',
      'Midnight energy snacks and gaming mini-breaks'
    ],
    xpIcon: 'cpu',
    xpFileName: 'HACK_SPRINT_INIT.SYS',
    status: 'LIVE',
    accentColor: '#FF5FCF', // Neon pink
    memoryAddress: '0x0028HACK',
    badge: 'STAGE 08',
    actionText: 'Start_Hacking.exe'
  },
  {
    id: 'stage-9',
    stageNumber: 9,
    stageCode: 'STAGE_09',
    title: 'Judgement Round 1',
    lane: 'right',
    laneIndex: 1,
    date: '26th October',
    dateShort: '26 OCT',
    time: '06:00 PM IST',
    phase: 'Phase 03: The Arena',
    phaseCode: 'EVAL_SPRINT_1',
    category: 'Judging',
    description: 'Initial round of judgement. Mentors evaluate core architecture, database design, and MVP progress.',
    details: [
      '5-minute sprint demo per workstation',
      'Architectural feedback & direction recalibration',
      'Checkpoint scores submitted to master jury'
    ],
    xpIcon: 'alert',
    xpFileName: 'JURY_ROUND_01.CRD',
    status: 'UPCOMING',
    accentColor: '#9929EA', // Electric purple
    memoryAddress: '0x0033JUDG',
    badge: 'STAGE 09',
    actionText: 'Submit_Checkpoint.vbs'
  },
  {
    id: 'stage-10',
    stageNumber: 10,
    stageCode: 'STAGE_10',
    title: 'Judgement Round 2',
    lane: 'middle',
    laneIndex: 0,
    date: '27th October',
    dateShort: '27 OCT',
    time: '12:00 PM IST',
    phase: 'Phase 04: Climax & Finale',
    phaseCode: 'EVAL_FINAL_STAGE',
    category: 'Judging',
    description: 'Final round of in-depth judging. Rigorous stress-testing of deployed code and live user demonstrations.',
    details: [
      'Comprehensive UI/UX and live backend tests',
      'Business viability & innovation assessment',
      'Selection of top 10 finalists for the stage pitch'
    ],
    xpIcon: 'gear',
    xpFileName: 'JURY_ROUND_02.CRD',
    status: 'UPCOMING',
    accentColor: '#FFE279', // Warm yellow
    memoryAddress: '0x0044FINL',
    badge: 'STAGE 10',
    actionText: 'Final_Evaluation.bat'
  },
  {
    id: 'stage-11',
    stageNumber: 11,
    stageCode: 'STAGE_11',
    title: 'Hackathon Ends!',
    lane: 'left',
    laneIndex: -1,
    date: '27th October',
    dateShort: '27 OCT',
    time: '03:00 PM IST',
    phase: 'Phase 04: Climax & Finale',
    phaseCode: 'CODE_FREEZE',
    category: 'Hackathon',
    description: 'Completion of Codeutsava! Code freeze enforced. Git repositories locked for final validation.',
    details: [
      'Automated sha256 commit hashes recorded',
      'All team decks submitted to judge panel',
      'Hackers recharge before closing ceremony'
    ],
    xpIcon: 'cmd',
    xpFileName: 'CODE_FREEZE_SIG.SYS',
    status: 'UPCOMING',
    accentColor: '#FF5FCF', // Neon pink
    memoryAddress: '0x00EEFREE',
    badge: 'STAGE 11',
    actionText: 'Freeze_Commits.sh'
  },
  {
    id: 'stage-12',
    stageNumber: 12,
    stageCode: 'STAGE_12',
    title: 'Closing Ceremony & Awards',
    lane: 'right',
    laneIndex: 1,
    date: '27th October',
    dateShort: '27 OCT',
    time: '03:30 PM IST',
    phase: 'Phase 04: Climax & Finale',
    phaseCode: 'VICTORY_PODIUM',
    category: 'Finale',
    description: 'Closing Ceremony, top team presentations, prize distribution (₹2,50,000+ Prize Pool), and grand farewell.',
    details: [
      'Top 3 Winners announced on stage',
      'Best Track prizes and sponsor bounty reveals',
      'Official certificates and TCP concluding address'
    ],
    xpIcon: 'trophy',
    xpFileName: 'VICTORY_AWARDS_GRAND.EXE',
    status: 'UPCOMING',
    accentColor: '#00F0FF', // Glitch cyan triumph
    memoryAddress: '0x00WINNER',
    badge: 'STAGE 12',
    actionText: 'Claim_Trophy.exe'
  },
  {
    id: 'stage-13',
    stageNumber: 13,
    stageCode: 'STAGE_13',
    title: 'Thank You Hackers!',
    lane: 'middle',
    laneIndex: 0,
    date: '28th October',
    dateShort: '28 OCT',
    time: '06:00 PM IST',
    phase: 'Phase 05: The Legacy',
    phaseCode: 'MISSION_COMPLETE',
    category: 'Finale',
    description: 'Thank you for being part of CodeUtsava 8.0! See you in the Glitchverse for the next legendary chapter.',
    details: [
      'Special thanks to all 2,500+ participants & mentors',
      'Over 120+ innovative projects shipped to production',
      'The Turing Club of Programmers (TCP) signing off until next year!'
    ],
    xpIcon: 'wizard',
    xpFileName: 'THANK_YOU_GLITCHVERSE.SYS',
    status: 'UPCOMING',
    accentColor: '#FFE279', // Warm golden triumph for middle lane
    memoryAddress: '0x00THANKU',
    badge: 'STAGE 13',
    actionText: 'Join_Discord.exe'
  }
];

export const TIMELINE_LANES = [
  {
    key: 'left',
    name: 'LEFT LANE [TRACK A]',
    sub: 'SELECTION & CODE SPRINTS',
    color: '#FF5FCF',
    glow: 'rgba(255, 95, 207, 0.4)'
  },
  {
    key: 'middle',
    name: 'MIDDLE LANE [MAIN TRUNK]',
    sub: 'REGISTRATIONS & CEREMONIES',
    color: '#FFE279',
    glow: 'rgba(255, 226, 121, 0.4)'
  },
  {
    key: 'right',
    name: 'RIGHT LANE [TRACK B]',
    sub: 'LOGISTICS & JUDGING ROUNDS',
    color: '#9929EA',
    glow: 'rgba(153, 41, 234, 0.4)'
  }
] as const;
