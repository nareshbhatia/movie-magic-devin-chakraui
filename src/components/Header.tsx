import {
  Box,
  Flex,
  Icon,
  Text,
  HStack,
  Link,
  IconButton,
  Avatar,
  useColorMode,
} from '@chakra-ui/react';
import { FaFilm, FaSun, FaMoon } from 'react-icons/fa';

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="header"
      bg={colorMode === 'dark' ? 'gray.800' : 'white'}
      boxShadow="md"
      color={colorMode === 'dark' ? 'white' : 'gray.800'}
      height="56px"
    >
      <Flex align="center" h="100%" justify="space-between" px={4}>
        {/* Left section */}
        <Flex align="center">
          <Icon as={FaFilm} boxSize={6} color="red.500" mr={2} />
          <Text fontSize="xl" fontWeight="bold" mr={6}>
            Movie Magic
          </Text>
          <HStack spacing={4}>
            <Link _hover={{ color: 'red.500' }} href="#">
              Movies
            </Link>
            <Link _hover={{ color: 'red.500' }} href="#">
              Watchlist
            </Link>
          </HStack>
        </Flex>

        {/* Right section */}
        <Flex align="center">
          <IconButton
            aria-label={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
            color={colorMode === 'dark' ? 'yellow.300' : 'blue.700'}
            icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
            mr={4}
            onClick={toggleColorMode}
            variant="ghost"
          />
          <Avatar size="sm" src="https://bit.ly/broken-link" />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
