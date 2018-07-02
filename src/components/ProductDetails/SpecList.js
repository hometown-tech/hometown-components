import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Div from 'components/Div';
import Button from 'components/Buttons';
import Heading from 'components/Heading';
import Spec from 'components/ProductDetails/Spec';

const SpecRow = styled.div`
  box-sizing: border-box;
  margin-right: -15px;
  margin-left: -15px;
  position: relative;
  display: block;
  clear: both;
  margin: 0;
  background-color: #f6f6f6;
  box-shadow: 7px 7px 14px -9px rgba(124, 122, 122, 0.5);
  padding: 20px;
  display: flex;
`;

class SpecList extends Component {
  state = {
    show: false
  }
  handleOnclick = () => {
    this.setState({
      show: !this.state.show
    });
  }
  render() {
    const { list } = this.props;
    const { show } = this.state;
    const specName = Object.keys(list)[0];
    const values = Object.values(list)[0];
    return (
      <Div mb="0.625rem">
        <SpecRow display="block" m="0">
          <Div col="12" mb="0">
            <Heading
              mt="0"
              mb="0"
              pb="0"
              color="textLight"
              fontSize="1em"
              fontWeight="600"
            >
              {specName}
              <Button
                btnType="custom"
                bg="transparent"
                border="none"
                p="0"
                fl="right"
                fontSize="1.5rem"
                lh="1"
                height="20px"
                onClick={this.handleOnclick}
              >{show ? '-' : '+'}</Button>
            </Heading>
            {show && <Div p="1rem" pb="0">
              { values.map((eachSpec, specIndex) => (
                <Spec spec={eachSpec} key={String(specIndex)} />
              )) }
            </Div>
            }
          </Div>
        </SpecRow>
      </Div>
    );
  }
}

SpecList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default SpecList;
