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
export const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'LamanClinic',
    desc: 'A Management Support System for Multi-Specialty Clinics.',
    source: 'https://github.com/kidiezyllex/KLTN_FE',
    live: 'https://lamanclinic.vercel.app/',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736393133/learning-webdev-blog/portfolio/laman_cpuvcr.png',
    logoUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736248592/learning-webdev-blog/portfolio/2_tifbwx.jpg',
    data: [
      {
        name: 'Next.js',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736141496/learning-webdev-blog/portfolio/1_m0fm6w.png',
      },
      {
        name: 'TypeScript',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736141496/learning-webdev-blog/portfolio/2_zj8ore.png',
      },
      {
        name: 'ShadCN/UI',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203610/learning-webdev-blog/portfolio/11_c99nfb.png',
      },
      {
        name: 'TailwindCSS',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203614/learning-webdev-blog/portfolio/8_uf4jk7.png',
      },
      {
        name: 'Clerk',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736414407/learning-webdev-blog/portfolio/36_du5ftr.png',
      },
      {
        name: 'NextAuth.js',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736414409/learning-webdev-blog/portfolio/37_nv6zio.png',
      },
      {
        name: 'Zustand',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203612/learning-webdev-blog/portfolio/22_upok0p.png',
      },
      {
        name: 'Uploadthing',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736414408/learning-webdev-blog/portfolio/38_nhr7rs.png',
      },
      {
        name: 'Node.js',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203612/learning-webdev-blog/portfolio/3_iew5k2.png',
      },
      {
        name: 'MongoDB',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736206466/learning-webdev-blog/portfolio/26_ooom7o.png',
      },
      {
        name: 'Redis',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736206503/learning-webdev-blog/portfolio/30_pexaxc.png',
      },
      {
        name: 'Apache Kafka',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736416136/learning-webdev-blog/portfolio/43_cp7zen.png',
      },
    ],
  },
  {
    id: 2,
    title: 'Luscsenger',
    desc: 'A Real-time Calling & Texting Application.',
    source: 'https://github.com/kidiezyllex/messenger-clone',
    live: 'https://luscsenger.vercel.app/',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736393133/learning-webdev-blog/portfolio/luscenger_qbu2kf.png',
    logoUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736248592/learning-webdev-blog/portfolio/3_huctrt.jpg',
    data: [
      {
        name: 'Next.js',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203612/learning-webdev-blog/portfolio/1_f7xedy.png',
      },
      {
        name: 'NextAuth.js',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736414409/learning-webdev-blog/portfolio/37_nv6zio.png',
      },
      {
        name: 'Tailwind CSS',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736141873/learning-webdev-blog/portfolio/4_thkgzv.png',
      },
      {
        name: 'ShadCN/UI',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203610/learning-webdev-blog/portfolio/11_c99nfb.png',
      },
      {
        name: 'TypeScript',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736141496/learning-webdev-blog/portfolio/2_zj8ore.png',
      },
      {
        name: 'PostgreSQL',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736206507/learning-webdev-blog/portfolio/28_cnxn7x.png',
      },
      {
        name: 'Prisma',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203615/learning-webdev-blog/portfolio/21_lgi8lh.png',
      },
      {
        name: 'Zustand',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203612/learning-webdev-blog/portfolio/22_upok0p.png',
      },
      {
        name: 'Pusher',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736416136/learning-webdev-blog/portfolio/42_qyyqzv.png',
      },
      {
        name: 'Uploadthing',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736414408/learning-webdev-blog/portfolio/38_nhr7rs.png',
      },
      {
        name: 'Zegocloud',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736416135/learning-webdev-blog/portfolio/44_uu86io.png',
      },
      {
        name: 'Yet Another React Lightbox',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736414409/learning-webdev-blog/portfolio/41_yt0onl.png',
      },
    ],
  },
  {
    id: 3,
    title: 'Proma',
    desc: 'A Project Management Application.',
    source: 'https://github.com/kidiezyllex/project-management',
    live: '/',
    imageUrl:
      'https://studio.uxpincdn.com/studio/wp-content/uploads/2022/08/Zrzut-ekranu-2022-08-26-o-14.10.43-1024x589.png.webp',
    logoUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736248593/learning-webdev-blog/portfolio/1_isev00.jpg',
    data: [
      {
        name: 'Next.js',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203612/learning-webdev-blog/portfolio/1_f7xedy.png',
      },
      {
        name: 'NextAuth.js',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736414409/learning-webdev-blog/portfolio/37_nv6zio.png',
      },
      {
        name: 'Tailwind CSS',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736141873/learning-webdev-blog/portfolio/4_thkgzv.png',
      },
      {
        name: 'ShadCN/UI',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203610/learning-webdev-blog/portfolio/11_c99nfb.png',
      },
      {
        name: 'TypeScript',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736141496/learning-webdev-blog/portfolio/2_zj8ore.png',
      },
      {
        name: 'Redux',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203610/learning-webdev-blog/portfolio/23_wxnimt.png',
      },
      {
        name: 'React DnD',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203615/learning-webdev-blog/portfolio/20_qhrg0y.png',
      },
      {
        name: 'Node.js',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203612/learning-webdev-blog/portfolio/3_iew5k2.png',
      },
      {
        name: 'Express.js',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203611/learning-webdev-blog/portfolio/24_sk4h2o.png',
      },
      {
        name: 'PostgreSQL',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736206507/learning-webdev-blog/portfolio/28_cnxn7x.png',
      },
      {
        name: 'Prisma',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203615/learning-webdev-blog/portfolio/21_lgi8lh.png',
      },
      {
        name: 'AWS',
        image:
          'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736220679/learning-webdev-blog/portfolio/37_lccxgc.png',
      },
    ],
  },
];

export const teckstack1 = [
  {
    id: 1,
    name: 'JavaScript',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736169032/learning-webdev-blog/portfolio/2_uvizd7.png',
    link: 'https://javascript.info/',
  },
  {
    id: 2,
    name: 'TypeScript',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736141496/learning-webdev-blog/portfolio/2_zj8ore.png',
    link: 'https://www.typescriptlang.org/docs/',
  },
  {
    id: 3,
    name: 'HTML5',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736169711/learning-webdev-blog/portfolio/9_g82mee.png',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    id: 4,
    name: 'CSS3',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736169711/learning-webdev-blog/portfolio/10_i4m0yc.png',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    id: 5,
    name: ' C++',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736169032/learning-webdev-blog/portfolio/4_btiegp.png',
    link: 'https://en.cppreference.com/w/',
  },
  {
    id: 6,
    name: 'Java',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736169032/learning-webdev-blog/portfolio/5_tcb2cv.png',
    link: 'https://docs.oracle.com/en/java/',
  },
];

export const teckstack2 = [
  {
    id: 1,
    name: 'React',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203615/learning-webdev-blog/portfolio/20_qhrg0y.png',
    link: 'https://react.dev/learn',
  },
  {
    id: 2,
    name: 'React Native',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203611/learning-webdev-blog/portfolio/25_dpooj2.png',
    link: 'https://reactnative.dev/docs/getting-started',
  },
  {
    id: 3,
    name: 'Next.js',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203612/learning-webdev-blog/portfolio/1_f7xedy.png',
    link: 'https://nextjs.org/docs',
  },
  {
    id: 4,
    name: 'Node.js',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203612/learning-webdev-blog/portfolio/3_iew5k2.png',
    link: 'https://nodejs.org/en/docs/',
  },
  {
    id: 5,
    name: 'Express.js',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203611/learning-webdev-blog/portfolio/24_sk4h2o.png',
    link: 'https://expressjs.com/en/4x/api.html',
  },
  {
    id: 6,
    name: 'Zustand',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203612/learning-webdev-blog/portfolio/22_upok0p.png',
    link: 'https://docs.pmnd.rs/zustand/getting-started/introduction',
  },
  {
    id: 7,
    name: 'Redux',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203610/learning-webdev-blog/portfolio/23_wxnimt.png',
    link: 'https://redux-toolkit.js.org/introduction/getting-started',
  },
  {
    id: 8,
    name: 'Zod',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736414409/learning-webdev-blog/portfolio/39_ovdohd.png',
    link: 'https://zod.dev/',
  },
  {
    id: 9,
    name: 'React Hook Form',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736414410/learning-webdev-blog/portfolio/40_xjarph.png',
    link: 'https://react-hook-form.com/get-started',
  },
  {
    id: 10,
    name: 'NextAuth.js',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736414409/learning-webdev-blog/portfolio/37_nv6zio.png',
    link: 'https://next-auth.js.org/',
  },
];

export const teckstack3 = [
  {
    id: 1,
    name: 'TailwindCSS',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203614/learning-webdev-blog/portfolio/8_uf4jk7.png',
    link: 'https://tailwindcss.com/docs/installation',
  },
  {
    id: 2,
    name: 'Bootstrap',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736220678/learning-webdev-blog/portfolio/31_fsovmr.png',
    link: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/',
  },
  {
    id: 3,
    name: 'ShadCN/UI',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203610/learning-webdev-blog/portfolio/11_c99nfb.png',
    link: 'https://ui.shadcn.com/docs/components',
  },
  {
    id: 4,
    name: 'Charka UI',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203612/learning-webdev-blog/portfolio/12_isjrqi.png',
    link: 'https://v2.chakra-ui.com/docs/components',
  },
  {
    id: 5,
    name: 'Material UI',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203613/learning-webdev-blog/portfolio/13_fmp1fb.png',
    link: 'https://mui.com/material-ui/getting-started/',
  },
  {
    id: 6,
    name: 'NextUI',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203613/learning-webdev-blog/portfolio/14_ni6xu0.png',
    link: 'https://nextui.org/docs/components',
  },
  {
    id: 7,
    name: 'Aceternity',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203610/learning-webdev-blog/portfolio/10_ydvj0p.png',
    link: 'https://ui.aceternity.com/components',
  },
  {
    id: 8,
    name: 'Animata',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203614/learning-webdev-blog/portfolio/15_dkqsv3.png',
    link: 'https://animata.design/docs',
  },
  {
    id: 9,
    name: 'Magicui',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203615/learning-webdev-blog/portfolio/16_vlxisp.png',
    link: 'https://magicui.design/docs/components',
  },
  {
    id: 10,
    name: 'Ui-layouts',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203615/learning-webdev-blog/portfolio/17_kiwolp.png',
    link: 'https://www.ui-layouts.com/components',
  },
  {
    id: 11,
    name: 'Hover-dev',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203614/learning-webdev-blog/portfolio/9_enexel.png',
    link: 'https://www.hover.dev/components',
  },
  {
    id: 12,
    name: 'GSAP',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736220678/learning-webdev-blog/portfolio/39_pniuvr.png',
    link: 'https://gsap.com/docs/v3/',
  },
  {
    id: 13,
    name: 'Framer Motion',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736220678/learning-webdev-blog/portfolio/32_euhs1l.png',
    link: 'https://motion.dev/',
  },
  {
    id: 14,
    name: 'Yet Another React Lightbox',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736414409/learning-webdev-blog/portfolio/41_yt0onl.png',

    link: 'https://yet-another-react-lightbox.com/',
  },
];

export const teckstack4 = [
  {
    id: 1,
    name: 'MongoDB',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736206466/learning-webdev-blog/portfolio/26_ooom7o.png',
    link: 'https://tailwindcss.com/docs/installation',
  },
  {
    id: 2,
    name: 'PostgreSQL',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736206507/learning-webdev-blog/portfolio/28_cnxn7x.png',
    link: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/',
  },
  {
    id: 3,
    name: 'SQLServer',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736206506/learning-webdev-blog/portfolio/27_ttbstt.png',
    link: 'https://ui.shadcn.com/docs/components',
  },
  {
    id: 4,
    name: 'MariaDB',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736206508/learning-webdev-blog/portfolio/29_rpzh0c.png',
    link: 'https://v2.chakra-ui.com/docs/components',
  },
  {
    id: 5,
    name: 'Redis',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736206503/learning-webdev-blog/portfolio/30_pexaxc.png',
    link: 'https://mui.com/material-ui/getting-started/',
  },
  {
    id: 6,
    name: 'Prisma',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736203615/learning-webdev-blog/portfolio/21_lgi8lh.png',
    link: 'https://www.prisma.io/docs',
  },
];

export const teckstack5 = [
  {
    id: 1,
    name: 'MongoDB Atlas',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736220679/learning-webdev-blog/portfolio/38_zslpom.png',
    link: 'https://www.mongodb.com/docs/atlas/',
  },
  {
    id: 2,
    name: 'AWS',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736220679/learning-webdev-blog/portfolio/37_lccxgc.png',
    link: 'https://docs.aws.amazon.com/',
  },
  {
    id: 3,
    name: 'Cloudinary',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736220678/learning-webdev-blog/portfolio/33_kbvyd4.png',
    link: 'https://cloudinary.com/documentation/programmable_media_guides',
  },
  {
    id: 4,
    name: 'Firebase',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736220678/learning-webdev-blog/portfolio/34_ahiioi.png',
    link: 'https://firebase.google.com/docs?hl=vi',
  },
  {
    id: 5,
    name: 'Google Cloud',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736220678/learning-webdev-blog/portfolio/35_wjyani.png',
    link: 'https://cloud.google.com/docs',
  },
  {
    id: 6,
    name: 'Neon Tech',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736220679/learning-webdev-blog/portfolio/36_z1awlg.png',
    link: 'https://neon.tech/docs',
  },
];

export const teckstack6 = [
  {
    id: 1,
    name: 'Clerk',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736414407/learning-webdev-blog/portfolio/36_du5ftr.png',
    link: 'https://clerk.com/docs/quickstarts/nextjs',
  },
  {
    id: 2,
    name: 'Uploadthing',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736414408/learning-webdev-blog/portfolio/38_nhr7rs.png',
    link: 'https://docs.uploadthing.com/',
  },
  {
    id: 3,
    name: 'ZegoCloud',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736416135/learning-webdev-blog/portfolio/44_uu86io.png',
    link: 'https://cloudinary.com/documentation/programmable_media_guides',
  },
  {
    id: 4,
    name: 'Pusher',
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736416136/learning-webdev-blog/portfolio/42_qyyqzv.png',
    link: 'https://pusher.com/docs/',
  },
];

export const instaPosts = [
  {
    avatarImg:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736234298/learning-webdev-blog/portfolio/2c9ea450da4766193f56_bb4onm.jpg',
    name: 'Thien An',
    location: 'Quang Nam',
    likeNumbers: 912,
    title: 'Đá số yêu pố ank',
    tags: ['front-end', 'webdev', 'ui', 'design', 'vaicachuong'],
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736234298/learning-webdev-blog/portfolio/5c7943ef3cf880a6d9e9_mkgzhk.jpg',
  },
  {
    avatarImg:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736234298/learning-webdev-blog/portfolio/2c9ea450da4766193f56_bb4onm.jpg',
    name: 'Thien An',
    location: 'Quang Nam',
    likeNumbers: 1251,
    title: 'Tương tư nàng nhân viên',
    tags: ['front-end', 'webdev', 'ui', 'design', 'lukaku'],
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736234298/learning-webdev-blog/portfolio/37a242f13fe683b8daf71_prrbkv.jpg',
  },
  {
    avatarImg:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736234298/learning-webdev-blog/portfolio/2c9ea450da4766193f56_bb4onm.jpg',
    name: 'Thien An',
    location: 'Quang Nam',
    likeNumbers: 1129,
    title: 'Nhân viên quán',
    tags: ['front-end', 'webdev', 'ui', 'design', 'call-me'],
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736234298/learning-webdev-blog/portfolio/34026f4a125dae03f74c2_lv1qdk.jpg',
  },
  ,
  {
    avatarImg:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736234298/learning-webdev-blog/portfolio/2c9ea450da4766193f56_bb4onm.jpg',
    name: 'Thien An',
    location: 'Quang Nam',
    likeNumbers: 1129,
    title: 'Cảm xúc kia quay về',
    tags: ['front-end', 'webdev', 'ui', 'design', 'call-me'],
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736234854/learning-webdev-blog/portfolio/1726128736147_xl4ypa.jpg',
  },
  ,
  {
    avatarImg:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736234298/learning-webdev-blog/portfolio/2c9ea450da4766193f56_bb4onm.jpg',
    name: 'Thien An',
    location: 'Quang Nam',
    likeNumbers: 1129,
    title: 'Nơi tình yêu bốc đầu',
    tags: ['front-end', 'webdev', 'ui', 'design', 'lusc'],
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736234854/learning-webdev-blog/portfolio/1726128736263_ldcmi2.jpg',
  },
  ,
  {
    avatarImg:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736234855/learning-webdev-blog/portfolio/1726128736090_zgkwnl.jpg',
    name: 'Thien An',
    location: 'Quang Nam',
    likeNumbers: 1129,
    title: 'Vé số chiều nay',
    tags: ['front-end', 'webdev', 'ui', 'design', 'rogue'],
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736234855/learning-webdev-blog/portfolio/1726128736177_pwryjx.jpg',
  },
  ,
  {
    avatarImg:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736234298/learning-webdev-blog/portfolio/2c9ea450da4766193f56_bb4onm.jpg',
    name: 'Thien An',
    location: 'Quang Nam',
    likeNumbers: 1129,
    title: 'Hahaha woman',
    tags: ['front-end', 'webdev', 'ui', 'design', 'zyllex'],
    imageUrl:
      'https://res.cloudinary.com/drqbhj6ft/image/upload/v1736234858/learning-webdev-blog/portfolio/1726128736079_kdg9nm.jpg',
  },
];
