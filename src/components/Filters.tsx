import { Flex, Input, Select } from '@chakra-ui/react';

function Filters() {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} gap={4} p={4}>
      <Input flex={1} placeholder="Search movies..." />
      <Select flex={1} placeholder="Categories">
        <option value="action">Action</option>
        <option value="comedy">Comedy</option>
        <option value="drama">Drama</option>
        <option value="sci-fi">Sci-Fi</option>
      </Select>
      <Select flex={1} placeholder="Certification">
        <option value="g">G</option>
        <option value="pg">PG</option>
        <option value="pg13">PG-13</option>
        <option value="r">R</option>
      </Select>
    </Flex>
  );
}

export default Filters;
