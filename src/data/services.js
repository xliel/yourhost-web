import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { MemoryStick, Cpu, HardDrive } from 'lucide-react';

export const services = [
  {
    slug: 'virtual-servers',
    title: (
      <Typography
        variant='h4'
        sx={{
          fontSize: '2.2rem',
          fontWeight: 800,
        }}
      >
        שרתים וירטואליים
      </Typography>
    ),
    description: (
      <Box
        component='div'
        sx={{ mt: 1.6, fontSize: '1.4rem', fontWeight: 500 }}
      >
        <Typography variant='body1'>
          השרתים הוירטואלים שלנו יוצרים את השילוב המושלם של גמישות, ביצועים
          ואבטחה. עם תמיכה מלאה מצוות התמיכה שלנו, תוכל להיות בטוח שהמידע שלך
          מוגן 24/7. כל השירותים שלנו מיועדים לפרויקטים גדולים וקטנים כאחד,
        </Typography>
      </Box>
    ),
    banner: '/assets/illustrations/virtual-servers.svg',
    products: [
      {
        title: 'חבילה #1',
        description: null,
        href: '/services/virtual-servers/small',
        price: 15,
        currency: '₪',
        features: [
          {
            icon: <MemoryStick color='white' size={20} />,
            text: '2 גיגה ראם',
          },
          {
            icon: <Cpu color='white' size={20} />,
            text: '4 ליבות',
          },
          {
            icon: <HardDrive color='white' size={20} />,
            text: '50 גיגה נפח אחסון',
          },
        ],
      },
      {
        title: 'חבילה #2',
        description: null,
        href: '/services/virtual-servers/small',
        price: 30,
        currency: '₪',
        features: [
          {
            icon: <MemoryStick color='white' size={20} />,
            text: '6 גיגה ראם',
          },
          {
            icon: <Cpu color='white' size={20} />,
            text: '4 ליבות',
          },
          {
            icon: <HardDrive color='white' size={20} />,
            text: '60 גיגה נפח אחסון',
          },
        ],
      },
      {
        title: 'חבילה #3',
        description: null,
        href: '/services/virtual-servers/small',
        price: 45,
        currency: '₪',
        features: [
          {
            icon: <MemoryStick color='white' size={20} />,
            text: '8 גיגה ראם',
          },
          {
            icon: <Cpu color='white' size={20} />,
            text: '6 ליבות',
          },
          {
            icon: <HardDrive color='white' size={20} />,
            text: '80 גיגה נפח אחסון',
          },
        ],
      },
      {
        title: 'חבילה #4',
        description: null,
        href: '/services/virtual-servers/small',
        price: 65,
        currency: '₪',
        features: [
          {
            icon: <MemoryStick color='white' size={20} />,
            text: '10 גיגה ראם',
          },
          {
            icon: <Cpu color='white' size={20} />,
            text: '8 ליבות',
          },
          {
            icon: <HardDrive color='white' size={20} />,
            text: '100 גיגה נפח אחסון',
          },
        ],
      },
      {
        title: 'חבילה #5',
        description: null,
        href: '/services/virtual-servers/small',
        price: 80,
        currency: '₪',
        features: [
          {
            icon: <MemoryStick color='white' size={20} />,
            text: '10 גיגה ראם',
          },
          {
            icon: <Cpu color='white' size={20} />,
            text: '10 ליבות',
          },
          {
            icon: <HardDrive color='white' size={20} />,
            text: '120 גיגה נפח אחסון',
          },
        ],
      },
      {
        title: 'חבילה #6',
        description: null,
        href: '/services/virtual-servers/small',
        price: 95,
        currency: '₪',
        features: [
          {
            icon: <MemoryStick color='white' size={20} />,
            text: '12 גיגה ראם',
          },
          {
            icon: <Cpu color='white' size={20} />,
            text: '12 ליבות',
          },
          {
            icon: <HardDrive color='white' size={20} />,
            text: '120 גיגה נפח אחסון',
          },
        ],
      },
    ],
    faqs: [
      {
        title: (
          <Typography
            variant='h5'
            sx={{
              fontSize: '2.4rem',
              fontWeight: 800,
            }}
          >
            שרתים מאובטחים עם מהירות גבוהה
          </Typography>
        ),
        description: (
          <>
            <Typography variant='body1'>
              הביצועים המהירים של השרתים שלנו הם הודות לחיבורי רשת של עד 10 גיגה
              ביט וטכנולוגיות מתקדמות כדי להבטיח אבחטה ברמה הגבוהה ביותר.
              <br />
              כל שרתי האחסון שלנו משתמשים בדיסקי SSD לביצועים מהירים. אנו מציעים
              גם כונני NVMe ללקוחות שרוצים את המהירות הגבוהה בעלות נוספת.
            </Typography>
          </>
        ),
        banner: '/assets/illustrations/security-rafiki.svg',
      },
      {
        title: (
          <Typography
            variant='h5'
            sx={{
              fontSize: '2.4rem',
              fontWeight: 800,
            }}
          >
            שרתים מאובטחים עם מהירות גבוהה
          </Typography>
        ),
        description: (
          <>
            <Typography variant='body1'>
              הביצועים המהירים של השרתים שלנו הם הודות לחיבורי רשת של עד 10 גיגה
              ביט וטכנולוגיות מתקדמות כדי להבטיח אבחטה ברמה הגבוהה ביותר.
              <br />
              כל שרתי האחסון שלנו משתמשים בדיסקי SSD לביצועים מהירים. אנו מציעים
              גם כונני NVMe ללקוחות שרוצים את המהירות הגבוהה בעלות נוספת.
            </Typography>
          </>
        ),
        banner: '/assets/illustrations/security-rafiki.svg',
      },
    ],
  },
  {
    slug: 'web-hosting',
    title: (
      <Typography
        variant='h4'
        sx={{
          fontSize: '2.2rem',
          fontWeight: 800,
        }}
      >
        אחסון אתרים
      </Typography>
    ),
    description: (
      <Box
        component='div'
        sx={{ mt: 1.6, fontSize: '1.4rem', fontWeight: 500 }}
      >
        <Typography variant='body1'>
          השרתים הוירטואלים שלנו יוצרים את השילוב המושלם של גמישות, ביצועים
          ואבטחה. עם תמיכה מלאה מצוות התמיכה שלנו, תוכל להיות בטוח שהמידע שלך
          מוגן 24/7. כל השירותים שלנו מיועדים לפרויקטים גדולים וקטנים כאחד,
        </Typography>
      </Box>
    ),
    banner: '/assets/illustrations/virtual-servers.svg',
    products: [
      {
        title: 'חבילה #1',
        description: null,
        href: '/services/virtual-servers/small',
        price: 15,
        currency: '₪',
        features: [
          {
            icon: <MemoryStick color='white' size={20} />,
            text: '2 גיגה ראם',
          },
          {
            icon: <Cpu color='white' size={20} />,
            text: '4 ליבות',
          },
          {
            icon: <HardDrive color='white' size={20} />,
            text: '50 גיגה נפח אחסון',
          },
        ],
      },
      {
        title: 'חבילה #2',
        description: null,
        href: '/services/virtual-servers/small',
        price: 30,
        currency: '₪',
        features: [
          {
            icon: <MemoryStick color='white' size={20} />,
            text: '6 גיגה ראם',
          },
          {
            icon: <Cpu color='white' size={20} />,
            text: '4 ליבות',
          },
          {
            icon: <HardDrive color='white' size={20} />,
            text: '60 גיגה נפח אחסון',
          },
        ],
      },
      {
        title: 'חבילה #3',
        description: null,
        href: '/services/virtual-servers/small',
        price: 45,
        currency: '₪',
        features: [
          {
            icon: <MemoryStick color='white' size={20} />,
            text: '8 גיגה ראם',
          },
          {
            icon: <Cpu color='white' size={20} />,
            text: '6 ליבות',
          },
          {
            icon: <HardDrive color='white' size={20} />,
            text: '80 גיגה נפח אחסון',
          },
        ],
      },
      {
        title: 'חבילה #4',
        description: null,
        href: '/services/virtual-servers/small',
        price: 65,
        currency: '₪',
        features: [
          {
            icon: <MemoryStick color='white' size={20} />,
            text: '10 גיגה ראם',
          },
          {
            icon: <Cpu color='white' size={20} />,
            text: '8 ליבות',
          },
          {
            icon: <HardDrive color='white' size={20} />,
            text: '100 גיגה נפח אחסון',
          },
        ],
      },
      {
        title: 'חבילה #5',
        description: null,
        href: '/services/virtual-servers/small',
        price: 80,
        currency: '₪',
        features: [
          {
            icon: <MemoryStick color='white' size={20} />,
            text: '10 גיגה ראם',
          },
          {
            icon: <Cpu color='white' size={20} />,
            text: '10 ליבות',
          },
          {
            icon: <HardDrive color='white' size={20} />,
            text: '120 גיגה נפח אחסון',
          },
        ],
      },
      {
        title: 'חבילה #6',
        description: null,
        href: '/services/virtual-servers/small',
        price: 95,
        currency: '₪',
        features: [
          {
            icon: <MemoryStick color='white' size={20} />,
            text: '12 גיגה ראם',
          },
          {
            icon: <Cpu color='white' size={20} />,
            text: '12 ליבות',
          },
          {
            icon: <HardDrive color='white' size={20} />,
            text: '120 גיגה נפח אחסון',
          },
        ],
      },
    ],
    faqs: [
      {
        title: (
          <Typography
            variant='h5'
            sx={{
              fontSize: '2.4rem',
              fontWeight: 800,
            }}
          >
            שרתים מאובטחים עם מהירות גבוהה
          </Typography>
        ),
        description: (
          <>
            <Typography variant='body1'>
              הביצועים המהירים של השרתים שלנו הם הודות לחיבורי רשת של עד 10 גיגה
              ביט וטכנולוגיות מתקדמות כדי להבטיח אבחטה ברמה הגבוהה ביותר.
              <br />
              כל שרתי האחסון שלנו משתמשים בדיסקי SSD לביצועים מהירים. אנו מציעים
              גם כונני NVMe ללקוחות שרוצים את המהירות הגבוהה בעלות נוספת.
            </Typography>
          </>
        ),
        banner: '/assets/illustrations/security-rafiki.svg',
      },
      {
        title: (
          <Typography
            variant='h5'
            sx={{
              fontSize: '2.4rem',
              fontWeight: 800,
            }}
          >
            שרתים מאובטחים עם מהירות גבוהה
          </Typography>
        ),
        description: (
          <>
            <Typography variant='body1'>
              הביצועים המהירים של השרתים שלנו הם הודות לחיבורי רשת של עד 10 גיגה
              ביט וטכנולוגיות מתקדמות כדי להבטיח אבחטה ברמה הגבוהה ביותר.
              <br />
              כל שרתי האחסון שלנו משתמשים בדיסקי SSD לביצועים מהירים. אנו מציעים
              גם כונני NVMe ללקוחות שרוצים את המהירות הגבוהה בעלות נוספת.
            </Typography>
          </>
        ),
        banner: '/assets/illustrations/security-rafiki.svg',
      },
    ],
  },
];
