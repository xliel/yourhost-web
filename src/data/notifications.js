import { RouterLink } from '@/routes/components';
import { Box, Typography, Link } from '@mui/material';

// severity:   success, info, warning, error
export const notifications = [
  {
    id: 'join-our-discord--XZ',
    severity: 'info',
    title: 'הצטרפו לשרת הדיסקורד שלנו וקבלו עזרה מהצוות ומהקהילה.',
    message: (
      <Box>
        <Link
          component={RouterLink}
          href='https://discord.gg/hostingil'
          target='_blank'
          rel='noopener noreferrer'
          color='inherit'
        >
          להצטרפות לשרת הדיסקורד שלנו לחץ כאן
        </Link>
      </Box>
    ),
    canHide: true,
  },
];
