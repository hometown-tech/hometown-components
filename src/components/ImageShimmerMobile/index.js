import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Div from 'components/Div';
import ImagePlaceHolder from 'components/Placeholders/ImagePlaceHolder';

const defaultImage = require('../../static/placeholder.jpg');

const ImagePlaceHolderWrapper = styled.div`
  height: ${props => props.height};
  position: relative;
  ${props => props.width && { width: props.width }}
`;

export default class ImageShimmer extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: false
    };
  }

  componentDidMount() {
    const { src } = this.props;
    this.loadImage(src);
  }

  componentWillReceiveProps(nextProps) {
    const { src } = nextProps;
    // We only invalidate the current image if the src has changed.
    if (src !== this.props.src) {
      this.setState({
        isLoaded: false,
        error: false
      });
      this.loadImage(src);
    }
  }

  componentWillUnmount() {
    if (this.image) {
      this.image.onload = null;
      this.image.onerror = null;
    }
  }

  onLoad() {
    this.setState({ isLoaded: true });
  }

  onError() {
    this.setState({
      isLoaded: false,
      error: true
    });
  }

  loadImage(src) {
    if (this.image) {
      this.image.onload = null;
      this.image.onerror = null;
    }
    const image = new Image();
    this.image = image;
    image.onload = this.onLoad.bind(this);
    image.onerror = this.onError.bind(this);
    image.src = src;
  }

  render() {
    const { children, src, height } = this.props;
    const { isLoaded, error } = this.state;
    if (!children || typeof children !== 'function') {
      throw new Error('ImageShimmer requires a function as its only child');
    }
    return (
      <ImagePlaceHolderWrapper>
        { !isLoaded && !error && <Div height={height}><ImagePlaceHolder /></Div> }
        { isLoaded && children(src, error) }
        { !isLoaded && error && children(defaultImage, error) }
      </ImagePlaceHolderWrapper>
    );
  }
}
