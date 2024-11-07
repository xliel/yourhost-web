import {
  IconWorld,
  IconServer2,
  IconClockFilled,
  IconHeadset,
  IconShieldCheckFilled,
  IconAwardFilled,
} from '@tabler/icons-react';

export const whyUs = [
  {
    title: 'זמינות ואמינות',
    description:
      'השרתים שלנו מופעלים על תשתית ענן מתקדמת ומאובטחת. זמינות של 99.9%.',
    icon: <IconClockFilled size={48} stroke={2} color='#008cff' />,
  },
  {
    title: 'שירות לקוחות מעולה',
    description: 'אנו נמצאים כאן כדי לעזור לכם בכל שאלה או בעיה שתיתקלו בה.',
    icon: <IconHeadset size={48} stroke={2} color='#008cff' />,
  },
  {
    title: 'אבטחה ופרטיות',
    description: 'אבטחת מידע ופרטיות הלקוח הם חשובים לנו מאוד.',
    icon: <IconShieldCheckFilled size={48} stroke={2} color='#008cff' />,
  },
  {
    title: 'ניסיון מוכח',
    description:
      'אנו מספקים שירותים באיכות הגבוהה ביותר במשך כמה  שנים, עם למעלה מ100 לקוחות מרוצים.',
    icon: <IconAwardFilled size={48} stroke={2} color='#008cff' />,
  },
];

export const featuredPackages = [
  {
    title: 'חבילת שרת וירטואלי',
    price: 45,
    currency: '₪',
    features: ['8 גיגה ראם', '6 ליבות', '80 גיגה נפח אחסון'],
    href: '/services/virtual-servers',
  },
  {
    title: 'חבילת אחסון אתרים',
    price: 20,
    currency: '₪',
    features: [
      '7 גיגה נפח אחסון',
      '6 דטה בייסים',
      'תעבורה ללא הגבלה',
      'פאנל ניהול Plesk',
    ],
    href: '/services/virtual-servers',
  },
  {
    title: 'חבילת אחסון בוטים לדיסקורד',
    price: 18,
    currency: '₪',
    features: ['אחסון עד 10 בוטים', '10 גיגה ראם', '30 גיגה נפח אחסון'],
    href: '/services/virtual-servers',
  },
];

export const feedbacks = [
  {
    name: 'אבי כהן',
    avatar: 'https://i.pravatar.cc/100',
    title: 'מנהל חברה',
    description:
      'השירות של YourHost הוא השירות הטוב ביותר שהשתמשתי בו. אני ממליץ בחום על השירות שלהם.',
    rating: 5,
  },
  {
    name: 'שירה לוי',
    avatar: 'https://i.pravatar.cc/100',
    title: 'מנהל חברה',
    description:
      'השירות של YourHost הוא השירות הטוב ביותר שהשתמשתי בו. אני ממליץ בחום על השירות שלהם.',
    rating: 5,
  },
  {
    name: 'אלי קופטר',
    avatar: 'https://i.pravatar.cc/100',
    title: 'מנהל חברה',
    description:
      'השירות של YourHost הוא השירות הטוב ביותר שהשתמשתי בו. אני ממליץ בחום על השירות שלהם.',
    rating: 5,
  },
  {
    name: 'אבי רון',
    avatar: 'https://i.pravatar.cc/100',
    title: 'מנהל חברה',
    description:
      'השירות של YourHost הוא השירות הטוב ביותר שהשתמשתי בו. אני ממליץ בחום על השירות שלהם.',
    rating: 5,
  },
];

export const faqs = [
  {
    title: 'שאלות כלליות',
    description: 'שרתים וירטואליים בענן',
    icon: <IconWorld stroke={2} color='#0e87eb' />,
    iconBackground: 'rgba(0, 149, 255, 0.3)',
    questions: [
      {
        question: 'שאלה 1',
        answer: 'תשובה 1',
      },
      {
        question: 'שאלה 2',
        answer: 'תשובה 1',
      },
      {
        question: 'שאלה 3',
        answer: 'תשובה 1',
      },
      {
        question: 'שאלה 4',
        answer: 'תשובה 1',
      },
    ],
  },
  {
    title: 'שאלות כלליות 2',
    description: 'שרתים וירטואליים בענן',
    icon: <IconWorld stroke={2} color='#0e87eb' />,
    iconBackground: 'rgba(0, 149, 255, 0.3)',
    questions: [
      {
        question: 'שאלה 1',
        answer: 'תשובה 1',
      },
      {
        question: 'שאלה 2',
        answer: 'תשובה 1',
      },
      {
        question: 'שאלה 3',
        answer: 'תשובה 1',
      },
    ],
  },
  {
    title: 'שרתים וירטואליים',
    description: 'שרתים וירטואליים בענן',
    icon: <IconServer2 stroke={2} color='#0e87eb' />,
    iconBackground: 'rgba(0, 149, 255, 0.3)',
    questions: [
      {
        question: 'שאלה 1',
        answer: 'תשובה 1',
      },
      {
        question: 'שאלה 2',
        answer: 'תשובה 1',
      },
      {
        question: 'שאלה 3',
        answer: 'תשובה 1',
      },
      {
        question: 'שאלה 4',
        answer: 'תשובה 1',
      },
    ],
  },
];
