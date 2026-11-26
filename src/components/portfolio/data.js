export const projects = [
  {
    title: 'StudyBuddy', type: 'Student productivity platform', status: 'Live deployment', statusTone: 'live',
    image: 'https://res.cloudinary.com/dwbqtb6ck/image/upload/v1725448501/Dashboard_fmnx4s.png',
    description: 'A single workspace that helps students organise notes, reminders, expenses, calendars and study plans.',
    challenge: 'Student responsibilities are often split across disconnected tools, making school life harder to organise.',
    built: 'I built the React application and connected its planning workflows to Firebase, with Formik-powered forms and focused tools for notes, reminders and schedules.',
    highlight: 'Bringing several student workflows into one responsive dashboard while keeping each tool easy to reach.',
    stack: ['React', 'Firebase', 'Formik', 'FullCalendar', 'React Quill'],
    demo: 'https://walking-buddy-636cb.web.app/', demoLabel: 'Open live product', source: 'https://github.com/atok624/StudyBuddy',
  },
  {
    title: 'Purpool', type: 'Collaborative real-time application', status: 'Repository only', statusTone: 'source',
    image: 'https://res.cloudinary.com/dwbqtb6ck/image/upload/v1725448473/Screenshot_2024-05-16_204951_hmw79c.png',
    description: 'A team-built chat experience with real-time conversations, media sharing and user controls.',
    challenge: 'Messaging interfaces need to keep authentication, conversations and user state synchronized without slowing down the experience.',
    built: 'Built collaboratively by a six-person team using Firebase Authentication, Firestore listeners, Storage uploads and Zustand state management.',
    highlight: 'Real-time message updates, image uploads, chat search, read state and user blocking are handled through Firebase services.',
    stack: ['React', 'Firebase', 'Firestore', 'Zustand', 'Vite'],
    demo: null, demoLabel: null, source: 'https://github.com/atok624/Purpool-Chat-Application',
  },
  {
    title: 'Book My Room', type: 'Collaborative full-stack platform', status: 'Live deployment', statusTone: 'live',
    image: 'https://res.cloudinary.com/dnkzdjigk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1691540710/Capture_adstck.png',
    description: 'A room-booking product for exploring rooms, estimating stay costs and managing reservations.',
    challenge: 'The frontend needed to coordinate protected routes and several reservation flows with a separate Rails API.',
    built: 'Built as a three-person collaboration with React and Redux, consuming a Ruby on Rails and PostgreSQL backend.',
    highlight: 'Users can register, browse room details, create dated reservations, calculate stay costs and manage their rooms and bookings.',
    stack: ['React', 'Redux Toolkit', 'Ruby on Rails API', 'PostgreSQL'],
    demo: 'https://book-my-room-2igi.onrender.com/', demoLabel: 'Open live product', source: 'https://github.com/atok624/book-a-room-frontend',
  },
];

export const capabilities = [
  ['01', 'Product engineering', 'Building responsive interfaces, managing application state and taking products from idea to deployment.', 'React · JavaScript · Redux · Responsive UI'],
  ['02', 'Backend & data', 'Designing API-driven workflows, integrating persistent data and connecting interfaces to reliable services.', 'Ruby on Rails · Firebase · PostgreSQL · REST APIs'],
  ['03', 'AI & machine learning', 'Developing foundations in data preparation, model evaluation and integrating intelligent behaviour into products.', 'Python · Machine Learning · Data Analysis'],
];

export const careerTimeline = [
  { period: 'Present', title: 'MSc Artificial Intelligence & Machine Learning', organization: 'University of Ghana', description: 'Extending a software-engineering foundation through postgraduate study in intelligent systems and data-driven problem solving.', kind: 'Education' },
  { period: '2024', title: 'Web Development Programme', organization: 'Generation Ghana', description: 'Developed React and JavaScript skills through collaborative products including a task planner and real-time chat application.', kind: 'Training' },
  { period: '2023 — 2024', title: 'AWS re/Start', organization: 'AmaliTech', description: 'Completed intensive training in cloud foundations, Linux, Python, shell scripting and core AWS services.', kind: 'Cloud training' },
  { period: '2023', title: 'Full-Stack Developer & Volunteer Mentor', organization: 'Microverse', description: 'Completed 1,300+ hours of remote full-stack training and later supported junior developers through code reviews and pair programming.', kind: 'Development' },
  { period: '2019 — 2020', title: 'IT Officer — National Service', organization: 'Commonwealth Hall, University of Ghana', description: 'Supported day-to-day technology operations, resolved technical issues and collaborated with colleagues across the hall.', kind: 'Experience' },
  { period: '2015 — 2019', title: 'BSc Information Technology', organization: 'University of Ghana', description: 'Completed undergraduate study with a final-year group project exploring machine learning for skin-disease detection.', kind: 'Education' },
];

export const opportunityTypes = ['Full-time opportunity', 'Freelance project', 'AI/ML collaboration', 'Startup collaboration', 'Something else'];

export const recommendations = [
  { id: 1, name: 'Stephen Addae', relationship: 'Project collaborator · Microverse', quality: 'Quality & attention to detail', image: '/assets/Stephen.jpg', quote: 'Nicholas is an exceptional frontend developer who consistently impressed me with his attention to detail and commitment to delivering high-quality work. He would be a valuable asset to any team looking for a skilled and dedicated developer.' },
  { id: 2, name: 'Musong Ernest Akeh', relationship: 'Pair-programming collaborator · Microverse', quality: 'Collaboration & work ethic', image: '/assets/Ernest.jpg', quote: 'During our time at Microverse, we extensively pair-programmed together, and I was constantly impressed by Nicholas’s work ethic and detail-oriented approach. He is friendly, punctual, and a pleasure to work with.' },
];
