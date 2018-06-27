import { Heading1, Heading2 } from "cot-experience";
import { Box, Flex } from "grid-styled";
import React from "react";

const Index = props => {
  return (
    <Flex justify="center" mt={6} flexWrap>
      <Box bg="lightGray" mb={3} mr={3}>
        <Heading1>COT NextJs Boilerplate</Heading1>
      </Box>
      <Box>
        <Heading2>Hello World</Heading2>
      </Box>
    </Flex>
  );
};

Index.propTypes = {};

export default Index;
