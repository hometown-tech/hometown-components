import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Div from 'components/Div';
import Row from 'components/Row';
import Button from 'components/Buttons';
import Spec from 'components/ProductDetails/Spec';

const SpecRow = styled(Row)`
  box-sizing: border-box;
  position: relative;
  display: block;
  clear: both;
  display: flex;
`;

const SpecHeading = styled.h4`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  font-family: regular;
  line-height: 1;
  color: rgba(0,0,0,0.7);
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;
  background-color: #f5f5f5;
  box-shadow: 7px 7px 14px -9px rgba(124,122,122,0.5);
  padding: 15px 20px;
  border: 1px solid #f5f5f5;
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    background-color: #fff;
  }
`;

const SpecListWrapper = styled.div`
  position: relative;
  width: 100%;
  float: left;
  display: initial;
  box-sizing: border-box;
  background-color: #f5f5f5;
  box-shadow: 7px 7px 14px -9px rgba(124,122,122,0.5);
  padding: 1rem 1.25rem 0.375rem;
  margin-top: 1px;
  border: 1px solid #f5f5f5;
  @media (max-width: ${props => props.theme.breakpoints('sm')}) {
    background-color: #fff;
  }
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
      <SpecRow display="block" m="0" mb="0.625rem">
        <Div col="12" mb="0">
          <SpecHeading onClick={this.handleOnclick}>
            {specName}
            <Button
              btnType="custom"
              bg="transparent"
              border="none"
              p="0"
              fl="right"
              fontSize="1.25rem"
              fontFamily="light"
              lh="0"
              height="18px"
              mt="-4px"
            >{show ? '-' : '+'}</Button>
          </SpecHeading>
          {show && <SpecListWrapper p="1rem" pb="0">
            { values.map((eachSpec, specIndex) => (
              <Spec spec={eachSpec} key={String(specIndex)} />
            )) }
          </SpecListWrapper>
          }
        </Div>
      </SpecRow>
    );
  }
}

SpecList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default SpecList;
