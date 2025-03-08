import { MotionValue } from 'framer-motion';

interface Item {
  name: string;
  image: string;
}
interface BlogPost {
  id: number;
  title: string;
  desc: string;
  source: string;
  live: string;
  imageUrl: string;
  logoUrl: string;
  data: Item[];
}
export interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  live: string;
  imageUrl: string;
  logoUrl: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  data: Item[];
}

export const teckstack1 = [
  {
    id: 1,
    name: 'JavaScript',
    imageUrl:
      '/tech-stack/2.png',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    id: 2,
    name: 'TypeScript',
    imageUrl:
      '/tech-stack/6.png',
    link: 'https://www.typescriptlang.org/docs/',
  },
  {
    id: 3,
    name: 'HTML5',
    imageUrl:
      '/tech-stack/18.png',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    id: 4,
    name: 'CSS3',
    imageUrl:
      '/tech-stack/19.png',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    id: 5,
    name: ' C++',
    imageUrl:
      '/tech-stack/4.png',
    link: 'https://en.cppreference.com/w/',
  },
  {
    id: 6,
    name: 'Java',
    imageUrl:
      '/tech-stack/5.png',
    link: 'https://docs.oracle.com/en/java/',
  },
];

export const teckstack2 = [
  {
    id: 1,
    name: 'Next.js',
    imageUrl:
      '/tech-stack/1.png',
    link: 'https://nextjs.org/docs',
  },
  {
    id: 2,
    name: 'React',
    imageUrl:
      '/tech-stack/20.png',
    link: 'https://react.dev/learn',
  },
  {
    id: 3,
    name: 'Vite',
    imageUrl:
      '/tech-stack/51.png',
    link: 'https://vitejs.dev/guide/',
  },
  {
    id: 4,
    name: 'React Native',
    imageUrl:
      '/tech-stack/25.png',
    link: 'https://reactnative.dev/docs/getting-started',
  },

  {
    id: 5,
    name: 'Node.js',
    imageUrl:
      '/tech-stack/3.png',
    link: 'https://nodejs.org/en/docs/',
  },
  {
    id: 6,
    name: 'Express.js',
    imageUrl:
      '/tech-stack/24.png',
    link: 'https://expressjs.com/en/4x/api.html',
  },
  {
    id: 7,
    name: 'Zustand',
    imageUrl:
      '/tech-stack/22.png',
    link: 'https://docs.pmnd.rs/zustand/getting-started/introduction',
  },
  {
    id: 8,
    name: 'Redux',
    imageUrl:
      '/tech-stack/23.png',
    link: 'https://redux-toolkit.js.org/introduction/getting-started',
  },
  {
    id: 9,
    name: 'NextAuth.js',
    imageUrl:
      '/tech-stack/37.png',
    link: 'https://next-auth.js.org/',
  },
];

export const teckstack3 = [
  {
    id: 1,
    name: 'TailwindCSS',
    imageUrl:
      '/tech-stack/8.png',
    link: 'https://tailwindcss.com/docs/installation',
  },
  {
    id: 2,
    name: 'ShadCN/UI',
    imageUrl:
      '/tech-stack/11.png',
    link: 'https://ui.shadcn.com/docs/components',
  },
  {
    id: 3,
    name: 'Material UI',
    imageUrl:
      '/tech-stack/13.png',
    link: 'https://mui.com/material-ui/getting-started/',
  },
  {
    id: 4,
    name: 'Antd',
    imageUrl:
      '/tech-stack/50.png',
    link: 'https://ant.design/docs/react/introduce',
  },
  {
    id: 5,
    name: 'Framer Motion',
    imageUrl:
      '/tech-stack/32.png',
    link: 'https://motion.dev/',
  },
  {
    id: 6,
    name: 'GSAP',
    imageUrl:
      '/tech-stack/48.png',
    link: 'https://gsap.com/docs/v3/',
  },
];

export const teckstack4 = [
  {
    id: 1,
    name: 'MongoDB',
    imageUrl:
      '/tech-stack/26.png',
    link: 'https://www.mongodb.com/docs/',
  },
  {
    id: 2,
    name: 'PostgreSQL',
    imageUrl:
      '/tech-stack/28.png',
    link: 'https://www.postgresql.org/docs/',
  },
  {
    id: 3,
    name: 'SQLServer',
    imageUrl:
      '/tech-stack/27.png',
    link: 'https://www.microsoft.com/en-us/sql-server/sql-server-2019',

  },
  {
    id: 4,
    name: 'Prisma',
    imageUrl:
      '/tech-stack/21.png',
    link: 'https://www.prisma.io/docs',
  },
];

export const teckstack5 = [
  {
    id: 1,
    name: 'Firebase',
    imageUrl:
      '/tech-stack/34.png',
    link: 'https://firebase.google.com/docs?hl=vi',
  },
  {
    id: 2,
    name: 'Clerk',
    imageUrl:
      '/tech-stack/36.png',
    link: 'https://clerk.com/docs/quickstarts/nextjs',
  },
  {
    id: 3,
    name: 'Uploadthing',
    imageUrl:
      '/tech-stack/38.png',
    link: 'https://docs.uploadthing.com/',
  },
  {
    id: 4,
    name: 'Pusher',
    imageUrl:
      '/tech-stack/42.png',
    link: 'https://pusher.com/docs/',
  },
  {
    id: 5,
    name: 'Socket.io',
    imageUrl:
      '/tech-stack/43.png',
    link: 'https://socket.io/docs/',
  },
];

export const instaPosts = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: 'Sarah Chen',
    designation: 'Product Manager at TechFlow',
    src: 'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736234298/learning-webdev-blog/portfolio/5c7943ef3cf880a6d9e9_mkgzhk.jpg',
  },

  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: 'Sarah Chen',
    designation: 'Product Manager at TechFlow',
    src: 'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736234298/learning-webdev-blog/portfolio/37a242f13fe683b8daf71_prrbkv.jpg',
  },
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: 'Sarah Chen',
    designation: 'Product Manager at TechFlow',
    src: 'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736234298/learning-webdev-blog/portfolio/34026f4a125dae03f74c2_lv1qdk.jpg',
  },
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: 'Sarah Chen',
    designation: 'Product Manager at TechFlow',
    src: 'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736234854/learning-webdev-blog/portfolio/1726128736147_xl4ypa.jpg',
  },
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: 'Sarah Chen',
    designation: 'Product Manager at TechFlow',
    src: 'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736234854/learning-webdev-blog/portfolio/1726128736263_ldcmi2.jpg',
  },
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: 'Sarah Chen',
    designation: 'Product Manager at TechFlow',
    src: 'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736234858/learning-webdev-blog/portfolio/1726128736079_kdg9nm.jpg',
  },
];
