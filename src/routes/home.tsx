import Filters from '@/components/Filters';
import Header from '@/components/Header';
import MovieList from '@/components/MovieList';
import { Box, VStack } from '@chakra-ui/react';

export function HomePage() {
  return (
    <Box minHeight="100vh">
      <VStack align="stretch" spacing={0}>
        <Header />
        <Filters />
        <MovieList />
      </VStack>
    </Box>
  );
}
