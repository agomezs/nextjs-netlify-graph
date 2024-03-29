import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Copyright from '../src/components/Copyright';
import Link from '../src/components/Link';
import type { NextPage } from 'next';
import ProTip from '../src/components/ProTip';
import Typography from '@mui/material/Typography';

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <Link href="/posts" color="secondary" sx={{ mt: 'auto' }}>
          Go to the posts page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
};

export default Home;
