import { Button, Heading1, Heading2 } from "cot-experience";
import { Box, Flex } from "grid-styled";
import React, { Component } from "react";
import { connect } from "react-redux";
import { setTextColor } from "../store/settings/actions";

class Index extends Component {
  render() {
    const { textColor } = this.props;

    return (
      <section>
        <Flex justify="center" mt={6} wrap>
          <Box bg="lightGray" mb={3} mr={3}>
            <Heading1 style={{ color: textColor }}>
              COT NextJs Boilerplate
            </Heading1>
          </Box>
          <Box>
            <Heading2>Hello World</Heading2>
          </Box>
        </Flex>
        <Flex justify="center">
          <Button onClick={() => this.props.dispatch(setTextColor("red"))}>
            Make text red
          </Button>
        </Flex>
      </section>
    );
  }
}

Index.propTypes = {};

const mapStateToProps = state => {
  return { textColor: state.settings.textColor };
};

export default connect(mapStateToProps)(Index);
