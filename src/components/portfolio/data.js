export const projects = [
  {
    slug: 'studybuddy', title: 'StudyBuddy', type: 'Student productivity',
    status: 'Live demo', statusTone: 'live', role: 'Independent project',
    image: '/assets/studybuddy.png', imageAlt: 'StudyBuddy dashboard with notes, reminders, expenses and a study planner',
    description: 'Notes, reminders, expenses and study plans in one student workspace.',
    contribution: 'Built the React application, including expense tracking, reminders and scheduling, and configured Firebase hosting.',
    challenge: 'Student tasks span notes, deadlines, budgets and timetables. The application brings those separate workflows into a shared dashboard.',
    implementation: 'React components separate each planning tool. Formik supports the forms, FullCalendar handles scheduling, and Firebase provides the application services and hosting.',
    result: 'A deployed application with dedicated tools for notes, reminders, expense tracking, a calendar and study planning.',
    nextStep: 'Make the dashboard easier to scan and add stronger validation around dates and expense entries.',
    stack: ['React', 'Firebase', 'Formik', 'FullCalendar', 'React Quill'],
    cardStack: ['React', 'Firebase', 'FullCalendar'],
    demo: 'https://walking-buddy-636cb.web.app/',
    source: 'https://github.com/atok624/StudyBuddy',
    evidence: [{ label: 'Implementation history', url: 'https://github.com/atok624/StudyBuddy/commits/master/?author=atok624' }],
  },
  {
    slug: 'purpool', title: 'Purpool', type: 'Real-time messaging',
    status: 'Source available', statusTone: 'source', role: 'Frontend contributor · team of 6',
    image: '/assets/purpool.png', imageAlt: 'Purpool messaging interface with a conversation list and active chat',
    description: 'A collaborative chat application with live conversations and media sharing.',
    contribution: 'Worked on the login and signup interfaces and Firebase deployment within a six-person team.',
    challenge: 'A messaging application needs to connect authentication, live conversation updates and shared media without losing track of user state.',
    implementation: 'The team used React for the interface, Firebase Authentication for sign-in, Firestore for live updates, Storage for uploads and Zustand for application state.',
    result: 'The shared application brings authentication, conversations and media uploads into a single chat interface. My documented contributions focus on login, signup and deployment.',
    nextStep: 'Improve authentication error feedback and add integration tests for the sign-in-to-chat flow.',
    stack: ['React', 'Firebase', 'Firestore', 'Zustand'],
    cardStack: ['React', 'Firebase', 'Zustand'],
    demo: null,
    source: 'https://github.com/atok624/Purpool-Chat-Application',
    evidence: [
      { label: 'Login component changes', url: 'https://github.com/atok624/Purpool-Chat-Application/commit/627afda092afeb38d8e18aadb54c047520a9461e' },
      { label: 'Signup changes', url: 'https://github.com/atok624/Purpool-Chat-Application/commit/9add97e138a1f0ea72ffa1bd64c28c2ac821fbd9' },
    ],
  },
  {
    slug: 'book-my-room', title: 'Book My Room', type: 'Room reservations',
    status: 'Live demo', statusTone: 'live', role: 'Frontend contributor · team of 3',
    image: '/assets/book-my-room.png', imageAlt: 'Book My Room interface with room navigation and account sign-in',
    description: 'Browse rooms and manage reservations through a React frontend and Rails API.',
    contribution: 'Updated the reservation interface and wrote component tests for room listings, room details, reservations and navigation.',
    challenge: 'The frontend needed to coordinate account access, room selection and reservations with a separate backend API.',
    implementation: 'The three-person team connected React and Redux to a Ruby on Rails API backed by PostgreSQL. My contribution included reservation updates and Jest component tests.',
    result: 'A collaborative room-booking application with room browsing and reservation management, supported by component tests I contributed to the frontend.',
    nextStep: 'Add end-to-end coverage for a complete booking and make API error states clearer.',
    stack: ['React', 'Redux Toolkit', 'Ruby on Rails API', 'PostgreSQL', 'Jest'],
    cardStack: ['React', 'Rails API', 'Jest'],
    demo: 'https://book-my-room-2igi.onrender.com/',
    source: 'https://github.com/atok624/book-a-room-frontend',
    evidence: [
      { label: 'Room detail tests', url: 'https://github.com/atok624/book-a-room-frontend/commit/08889c3998671259c36e47aebd360e4bc277d59e' },
      { label: 'Reservation changes', url: 'https://github.com/atok624/book-a-room-frontend/commit/b52d98b9a7756e96be4b828840b17bc554b4c7ad' },
    ],
  },
];

export const capabilities = [
  ['Interfaces', 'React · JavaScript · Redux'],
  ['APIs & data', 'Ruby on Rails · Firebase · PostgreSQL'],
  ['Current study', 'Python · AI & machine learning'],
];

export const careerTimeline = [
  { period: 'Present', title: 'MSc Artificial Intelligence & Machine Learning', organization: 'University of Ghana', kind: 'Education · In progress', featured: true },
  { period: '2024', title: 'Web Development Programme', organization: 'Generation Ghana', kind: 'Training' },
  { period: '2023–2024', title: 'AWS re/Start', organization: 'AmaliTech', kind: 'Cloud training' },
  { period: '2023', title: 'Full-stack training & volunteer mentoring', organization: 'Microverse', kind: 'Training & volunteering', featured: true },
  { period: '2019–2020', title: 'IT Officer · National Service', organization: 'Commonwealth Hall, University of Ghana', kind: 'Employment', featured: true },
  { period: '2015–2019', title: 'BSc Information Technology', organization: 'University of Ghana', kind: 'Education' },
];

export const opportunityTypes = ['Full-time role', 'Freelance project', 'AI/ML collaboration', 'Startup collaboration', 'Something else'];

export const recommendations = [
  { id: 1, name: 'Stephen Addae', relationship: 'Project collaborator · Microverse', image: '/assets/Stephen.jpg', quote: 'Nicholas is an exceptional frontend developer who consistently impressed me with his attention to detail and commitment to delivering high-quality work.' },
  { id: 2, name: 'Musong Ernest Akeh', relationship: 'Pair-programming collaborator · Microverse', image: '/assets/Ernest.jpg', quote: 'During our time at Microverse, we extensively pair-programmed together, and I was constantly impressed by Nicholas’s work ethic and detail-oriented approach.' },
];
