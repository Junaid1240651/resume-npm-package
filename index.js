#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');

const resume = {
  name: 'Junaid Khan',
  title: 'MERN/Full Stack Developer, Software Developer',
  email: 'jk1240651@gmail.com',
  phone: '+91-6398881456',
  linkedin: 'https://www.linkedin.com/in/sde1junaidkhan/',
  github: 'https://github.com/Junaid1240651',
  location: 'Pilkhuwa Ghaziabad Uttar Pradesh',
  
  summary: `
Experienced Full Stack Developer with 1+ years of experience in MERN stack development.
Passionate about building scalable web applications and AI-powered solutions.
  `.trim(),
  
  experience: [
    {
      company: 'Akratech Pvt Ltd',
      position: 'Full Stack Developer',
      duration: 'June 2024 - Present',
      description: [
        '• Built web scraping tools to collect medicine data and created APIs to display products on websites',
        '• Implemented smart contact features like automatic birthday suggestions and contact cleanup tools',
        '• Connected multiple services together including payment systems, email tools, and delivery tracking',
        '• Created responsive websites that work perfectly on phones, tablets, and web using clean, modern design'
      ]
    }
  ],
  
  education: [
    {
      institution: 'Maharaja Agrasen Himalayan Garhwal University (MAHGU)',
      degree: 'BCA - Bachelor of Computer Applications',
      year: '2020-2023'
    }
  ],
  
  skills: [
    'HTML/CSS/JavaScript',
    'React.js/Next.js',
    'Node.js/Express.js',
    'TypeScript/Vue.js',
    'MongoDB/MySQL',
    'Material UI/Tailwind CSS',
    'Chakra UI/Redux',
    'Socket.io'
  ],
  
  projects: [
    {
      name: 'Vibe Code - AI Coding Platform',
      description: [
        '• Built AI-powered code generation platform using Next.js 15 and TypeScript for natural language to full-stack application conversion',
        '• Implemented component-based architecture with Shadcn UI and Radix primitives',
        '• Developed end-to-end typesafe APIs with tRPC and TanStack Query for seamless client-server communication',
        '• Integrated Prisma ORM with PostgreSQL for efficient data management and real-time collaboration',
        '• Created secure code execution environment using E2B Code Interpreter and Ingest workflow engine for AI agent operations'
      ],
      tech: 'Next.js, Shadcn UI, tRPC, Prisma, PostgreSQL, Clerk, Ingest',
      link: 'https://github.com/Junaid1240651/VibeCode'
    },
    {
      name: 'Collaborative Whiteboard and Document Editor',
      description: [
        '• Developed a Project featuring a whiteboard and a document editor for efficient content creation',
        '• Implemented File Management capabilities including team creation, file creation, renaming, deletion, duplication, search functionality, and file archiving',
        '• Enabled seamless File Sharing through link copying and collaborative editing permissions, enhancing team collaboration',
        '• Facilitated Team Collaboration with real-time drawing, sketching, and document editing functionalities, ensuring automatic saving for hassle-free collaboration'
      ],
      tech: 'MERN Stack, Socket.io, Redux, Chakra UI',
        link: 'https://github.com/Junaid1240651/canvas-whiteboard-and-document-Editor'
    }
  ],
  
  training: [
    {
      program: 'Full stack Developer Intern Program - Sharpener Tech',
      duration: 'June 2023 - June 2024',
      link: 'https://cert.diceid.com/cid/xM88qwCSnc'
    },
    {
      program: 'Full Stack Development - Cuvette.tech',
      duration: 'January 2023 - June 2023',
      link: 'https://drive.google.com/file/d/1xreSg8E4y5-i8ctVeFEo8wJVD8MCm54N/view'
    },
    {
      program: 'Full Stack Development - Udemy',
      duration: 'January 2023 - June 2023',
      link: 'https://www.udemy.com/certificate/UC-daf20b8f-64e6-4cf2-b87f-98dbbafc999b/'
    }
  ]
};

function displayResume() {
  console.clear();
  
  // Header with bright colors
  const header = chalk.bold.green(`
${resume.name}
`) + chalk.bold.cyan(`${resume.title}
  `);
  
  // Contact Info with colorful icons and bright text
  const contact = `
${chalk.red('📧')} ${chalk.white.bold(resume.email)}
${chalk.green('📱')} ${chalk.white.bold(resume.phone)}
${chalk.blue('🔗')} ${chalk.blue.bold(resume.linkedin)}
${chalk.magenta('🐙')} ${chalk.magenta.bold(resume.github)}
${chalk.cyan('📍')} ${chalk.cyan.bold(resume.location)}
  `;
  
  // Summary with bright colors
  const summary = `
${chalk.bold.yellow('SUMMARY')}
${chalk.white.bold(resume.summary)}
  `;
  
  // Experience with enhanced colors
  let experienceSection = chalk.bold.yellow('\nEXPERIENCE\n');
  resume.experience.forEach(job => {
    experienceSection += chalk.bold.green(`\n${job.position}`) + chalk.white.bold(' @ ') + chalk.bold.blue(`${job.company}\n`);
    experienceSection += chalk.cyan.bold(`${job.duration}\n`);
    job.description.forEach(desc => {
      experienceSection += chalk.white.bold(`${desc}\n`);
    });
  });
  
  // Education with bright colors
  let educationSection = chalk.bold.yellow('\nEDUCATION\n');
  resume.education.forEach(edu => {
    educationSection += chalk.bold.green(`\n${edu.degree}\n`);
    educationSection += chalk.blue.bold(`${edu.institution}`) + chalk.cyan.bold(` - ${edu.year}\n`);
  });
  
  // Skills with colorful separators
  const skillsSection = chalk.bold.yellow('\nSKILLS\n') + 
    chalk.white.bold(resume.skills.join(chalk.magenta(' • ')));
  
  // Projects with enhanced colors
  let projectsSection = chalk.bold.yellow('\n\nPROJECTS\n');
  resume.projects.forEach(project => {
    projectsSection += chalk.bold.green(`\n${project.name}\n`);
    project.description.forEach(desc => {
      projectsSection += chalk.white.bold(`${desc}\n`);
    });
    projectsSection += chalk.cyan.bold(`Tech: `) + chalk.yellow.bold(`${project.tech}\n`);
    projectsSection += chalk.magenta.bold(`Link: `) + chalk.blue.bold(`${project.link}\n`);
  });
  
  // Training/Certifications with bright colors
  let trainingSection = chalk.bold.yellow('\n\nTRAINING/CERTIFICATIONS\n');
  resume.training.forEach(training => {
    trainingSection += chalk.bold.green(`\n${training.program}\n`);
    trainingSection += chalk.cyan.bold(`${training.duration}\n`);
    trainingSection += chalk.magenta.bold(`Link: `) + chalk.blue.bold(`${training.link}\n`);
  });
  
  const fullResume = header + contact + summary + experienceSection + 
                    educationSection + skillsSection + projectsSection + trainingSection;
  
  console.log(boxen(fullResume, {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'magenta'
  }));
}

if (require.main === module) {
  displayResume();
}

module.exports = { displayResume, resume };