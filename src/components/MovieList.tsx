import {
  Box,
  Image,
  Text,
  Icon,
  Flex,
  VStack,
  useColorMode,
} from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';

// Mock data for movies
const mockMovies = [
  {
    id: 1,
    title: 'Inception',
    imageUrl: 'https://example.com/inception.jpg',
    categories: ['Sci-Fi', 'Action', 'Thriller'],
    certification: 'PG-13',
  },
  {
    id: 2,
    title: 'The Shawshank Redemption',
    imageUrl: 'https://example.com/shawshank.jpg',
    categories: ['Drama'],
    certification: 'R',
  },
  {
    id: 3,
    title: 'The Dark Knight',
    imageUrl: 'https://example.com/dark-knight.jpg',
    categories: ['Action', 'Crime', 'Drama'],
    certification: 'PG-13',
  },
  {
    id: 4,
    title: 'Pulp Fiction',
    imageUrl: 'https://example.com/pulp-fiction.jpg',
    categories: ['Crime', 'Drama'],
    certification: 'R',
  },
  {
    id: 5,
    title: 'Forrest Gump',
    imageUrl: 'https://example.com/forrest-gump.jpg',
    categories: ['Drama', 'Romance'],
    certification: 'PG-13',
  },
  {
    id: 6,
    title: 'The Matrix',
    imageUrl: 'https://example.com/the-matrix.jpg',
    categories: ['Sci-Fi', 'Action'],
    certification: 'R',
  },
  {
    id: 7,
    title: 'Jurassic Park',
    imageUrl: 'https://example.com/jurassic-park.jpg',
    categories: ['Adventure', 'Sci-Fi'],
    certification: 'PG-13',
  },
  {
    id: 8,
    title: 'The Lion King',
    imageUrl: 'https://example.com/lion-king.jpg',
    categories: ['Animation', 'Adventure', 'Drama'],
    certification: 'G',
  },
  {
    id: 9,
    title: 'Goodfellas',
    imageUrl: 'https://example.com/goodfellas.jpg',
    categories: ['Crime', 'Drama'],
    certification: 'R',
  },
  {
    id: 10,
    title: 'The Silence of the Lambs',
    imageUrl: 'https://example.com/silence-of-the-lambs.jpg',
    categories: ['Crime', 'Drama', 'Thriller'],
    certification: 'R',
  },
];

function MovieList() {
  const { colorMode } = useColorMode();

  return (
    <VStack align="stretch" p={4} spacing={4}>
      {mockMovies.map((movie) => (
        <Flex
          align="center"
          bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
          borderRadius="lg"
          borderWidth={1}
          key={movie.id}
          p={4}
        >
          <Image
            alt={movie.title}
            boxSize="100px"
            mr={4}
            objectFit="cover"
            src={movie.imageUrl}
          />
          <Box flex={1}>
            <Text fontSize="xl" fontWeight="semibold">
              {movie.title}
            </Text>
            <Text color="gray.500" fontSize="sm">
              {movie.categories.join(', ')} | {movie.certification}
            </Text>
          </Box>
          <Icon
            _hover={{ color: 'red.300' }}
            aria-label={`Add ${movie.title} to watchlist`}
            as={FaPlus}
            boxSize={6}
            color="red.500"
            cursor="pointer"
          />
        </Flex>
      ))}
    </VStack>
  );
}

export default MovieList;
