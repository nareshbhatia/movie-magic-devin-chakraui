import { movies } from './movies';
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

function MovieList() {
  const { colorMode } = useColorMode();

  return (
    <VStack align="stretch" p={4} spacing={4}>
      {movies.map((movie) => (
        <Flex
          align="center"
          bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
          borderRadius="lg"
          borderWidth={1}
          key={movie.id}
          p={4}
        >
          <Image
            alt={movie.name}
            boxSize="100px"
            mr={4}
            objectFit="cover"
            src={movie.image.url}
          />
          <Box flex={1}>
            <Text fontSize="xl" fontWeight="semibold">
              {movie.name}
            </Text>
            <Text color="gray.500" fontSize="sm">
              {movie.genres.join(', ')} | {movie.certificate}
            </Text>
          </Box>
          <Icon
            _hover={{ color: 'red.300' }}
            aria-label={`Add ${movie.name} to watchlist`}
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
