const TECH_STACKS = {
  // Programming Languages
  LANGUAGES: [
    {
      id: 1,
      name: 'JavaScript',
      image: '/tech-stack/2.png',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      id: 2,
      name: 'TypeScript',
      image: '/tech-stack/6.png',
      link: 'https://www.typescriptlang.org/docs/',
    },
    {
      id: 3,
      name: 'HTML5',
      image: '/tech-stack/18.png',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      id: 4,
      name: 'CSS3',
      image: '/tech-stack/19.png',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      id: 5,
      name: 'C++',
      image: '/tech-stack/4.png',
      link: 'https://en.cppreference.com/w/',
    },
    {
      id: 6,
      name: 'Java',
      image: '/tech-stack/5.png',
      link: 'https://docs.oracle.com/en/java/',
    },
  ],
  
  // Frameworks & Libraries
  FRAMEWORKS: [
    {
      id: 1,
      name: 'React',
      image: '/tech-stack/20.png',
      link: 'https://react.dev/learn',
    },
    {
      id: 2,
      name: 'React Native',
      image: '/tech-stack/25.png',
      link: 'https://reactnative.dev/docs/getting-started',
    },
    {
      id: 3,
      name: 'Next.js',
      image: '/tech-stack/1.png',
      link: 'https://nextjs.org/docs',
    },
    {
      id: 4,
      name: 'Node.js',
      image: '/tech-stack/3.png',
      link: 'https://nodejs.org/en/docs/',
    },
    {
      id: 5,
      name: 'Express.js',
      image: '/tech-stack/24.png',
      link: 'https://expressjs.com/en/4x/api.html',
    },
    {
      id: 6,
      name: 'Zustand',
      image: '/tech-stack/22.png',
      link: 'https://docs.pmnd.rs/zustand/getting-started/introduction',
    },
    {
      id: 7,
      name: 'Redux',
      image: '/tech-stack/23.png',
      link: 'https://redux-toolkit.js.org/introduction/getting-started',
    },
    {
      id: 8,
      name: 'NextAuth.js',
      image: '/tech-stack/37.png',
      link: 'https://next-auth.js.org/',
    },
    {
      id: 9,
      name: 'React Hook Form',
      image: '/tech-stack/40.png',
      link: 'https://react-hook-form.com/get-started',
    },
    {
      id: 10,
      name: 'Vite',
      image: '/tech-stack/51.png',
      link: 'https://vitejs.dev/guide/',
    },
  ],
  
  // UI Libraries
  UI: [
    {
      id: 1,
      name: 'TailwindCSS',
      image: '/tech-stack/8.png',
      link: 'https://tailwindcss.com/docs/installation',
    },
    {
      id: 2,
      name: 'ShadCN/UI',
      image: '/tech-stack/11.png',
      link: 'https://ui.shadcn.com/docs/components',
    },
    {
      id: 3,
      name: 'Material UI',
      image: '/tech-stack/13.png',
      link: 'https://mui.com/material-ui/getting-started/',
    },
    {
      id: 4,
      name: 'Antd',
      image: '/tech-stack/50.png',
      link: 'https://ant.design/docs/react/introduce',
    },
    {
      id: 5,
      name: 'Framer Motion',
      image: '/tech-stack/32.png',
      link: 'https://motion.dev/',
    },
    {
      id: 6,
      name: 'GSAP',
      image: '/tech-stack/48.png',
      link: 'https://gsap.com/docs/v3/',
    },
  ],
  
  // Databases
  DATABASES: [
    {
      id: 1,
      name: 'MongoDB',
      image: '/tech-stack/26.png',
      link: 'https://www.mongodb.com/docs/',
    },
    {
      id: 2,
      name: 'PostgreSQL',
      image: '/tech-stack/28.png',
      link: 'https://www.postgresql.org/docs/',
    },
    {
      id: 3,
      name: 'SQLServer',
      image: '/tech-stack/27.png',
      link: 'https://www.microsoft.com/en-us/sql-server/sql-server-2019',
    },
    {
      id: 4,
      name: 'Prisma',
      image: '/tech-stack/21.png',
      link: 'https://www.prisma.io/docs',
    },
  ],
  
  // Services
  SERVICES: [
    {
      id: 1,
      name: 'Firebase',
      image: '/tech-stack/34.png',
      link: 'https://firebase.google.com/docs?hl=vi',
    },
    {
      id: 2,
      name: 'Clerk',
      image: '/tech-stack/36.png',
      link: 'https://clerk.com/docs/quickstarts/nextjs',
    },
    {
      id: 3,
      name: 'Uploadthing',
      image: '/tech-stack/38.png',
      link: 'https://docs.uploadthing.com/',
    },
    {
      id: 4,
      name: 'Pusher',
      image: '/tech-stack/42.png',
      link: 'https://pusher.com/docs/',
    },
    {
      id: 5,
      name: 'Socket.io',
      image: '/tech-stack/49.png',
      link: 'https://socket.io/docs/',
    },
  ],
};

export function renderTechstackList(techNames: string[]): Array<{
  id: number;
  name: string;
  image: string;
  link: string;
}> {
  return techNames.map(techName => {
    const lowercaseTech = techName.toLowerCase();
    
    switch (lowercaseTech) {
      // Programming Languages
      case 'javascript':
      case 'js':
        return TECH_STACKS.LANGUAGES[0];
      case 'typescript':
      case 'ts':
        return TECH_STACKS.LANGUAGES[1];
      case 'html':
      case 'html5':
        return TECH_STACKS.LANGUAGES[2];
      case 'css':
      case 'css3':
        return TECH_STACKS.LANGUAGES[3];
      case 'c++':
      case 'cpp':
        return TECH_STACKS.LANGUAGES[4];
      case 'java':
        return TECH_STACKS.LANGUAGES[5];

      // Frameworks & Libraries
      case 'react':
        return TECH_STACKS.FRAMEWORKS[0];
      case 'react native':
      case 'reactnative':
        return TECH_STACKS.FRAMEWORKS[1];
      case 'next':
      case 'nextjs':
        return TECH_STACKS.FRAMEWORKS[2];
      case 'node':
      case 'nodejs':
        return TECH_STACKS.FRAMEWORKS[3];
      case 'express':
      case 'expressjs':
        return TECH_STACKS.FRAMEWORKS[4];
      case 'zustand':
        return TECH_STACKS.FRAMEWORKS[5];
      case 'redux':
        return TECH_STACKS.FRAMEWORKS[6];
      case 'nextauth':
        return TECH_STACKS.FRAMEWORKS[7];
      case 'reacthookform':
        return TECH_STACKS.FRAMEWORKS[8];
      case 'vite':
        return TECH_STACKS.FRAMEWORKS[9];
      // UI Libraries
      case 'tailwind':
      case 'tailwindcss':
        return TECH_STACKS.UI[0];
      case 'shadcn':
      case 'shadcnui':
        return TECH_STACKS.UI[1];
      case 'mui':
      case 'materialui':
        return TECH_STACKS.UI[2];
      case 'antd':
        return TECH_STACKS.UI[3];
      case 'framer':
      case 'framermotion':
        return TECH_STACKS.UI[4];
      case 'gsap':
        return TECH_STACKS.UI[5];

      // Databases
      case 'mongodb':
        return TECH_STACKS.DATABASES[0];
      case 'postgresql':
      case 'postgres':
        return TECH_STACKS.DATABASES[1];
      case 'sqlserver':
      case 'sql':
        return TECH_STACKS.DATABASES[2];
      case 'prisma':
        return TECH_STACKS.DATABASES[3];

      // Services
      case 'firebase':
        return TECH_STACKS.SERVICES[0];
      case 'clerk':
        return TECH_STACKS.SERVICES[1];
      case 'uploadthing':
        return TECH_STACKS.SERVICES[2];
      case 'pusher':
        return TECH_STACKS.SERVICES[3];
      case 'socketio':
      case 'socket.io':
        return TECH_STACKS.SERVICES[4];

      default:
        return null;
    }
  }).filter(Boolean); // Remove null values
}
