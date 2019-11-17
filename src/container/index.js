import React from 'react';
import { render } from 'react-dom';
import ThemeProviderHtV1 from 'newComponents/ThemeProviderHtV1';
import AbsoluteHtV1 from 'newComponents/AbsoluteHtV1';
import BoxHtV1 from 'newComponents/BoxHtV1';
import ContainerHtV1 from 'newComponents/ContainerHtV1';
import ColHtV1 from 'newComponents/ColHtV1';
import FavHtV1 from 'newComponents/Icons/FavHtV1';
import HeadingHtV1 from 'newComponents/HeadingHtV1';
import LabelHtV1 from 'newComponents/LabelHtV1';
import RowHtV1 from 'newComponents/RowHtV1';
import TextHtV1 from 'newComponents/TextHtV1';

const Index = () => (
  <ThemeProviderHtV1>
    {/* Row */}
    <ContainerHtV1 variant="container.fluid">
      <RowHtV1 variant="row.alignCenter">
        <ColHtV1 width={[1, 1, 1 / 2]}>
          <BoxHtV1
            fontSize={16}
            width={1}
            color="white"
            bg="primary"
          >
          Column
          </BoxHtV1>
        </ColHtV1>
        <ColHtV1 width={[1, 1, 1 / 2]}>
          <BoxHtV1
            fontSize={16}
            width={1}
            color="white"
            bg="primary"
          >
            Column
          </BoxHtV1>
        </ColHtV1>
      </RowHtV1>
    </ContainerHtV1>
    <AbsoluteHtV1 top={30} right={0} bg="primary" p={30}>Absolute components</AbsoluteHtV1>
    <ContainerHtV1 variant="container.fluid">
      <RowHtV1>
        <ColHtV1 width={[1, 1, 1 / 2]}>
          <BoxHtV1 color="primary">
            Typography
          </BoxHtV1>
        </ColHtV1>
        <ColHtV1 width={[1, 1, 1 / 2]}>
          <BoxHtV1>
            <HeadingHtV1>Heading</HeadingHtV1>
            <TextHtV1>Text Secondary</TextHtV1>
            <LabelHtV1>Label</LabelHtV1>
            <FavHtV1 />
          </BoxHtV1>
        </ColHtV1>
      </RowHtV1>
    </ContainerHtV1>
  </ThemeProviderHtV1>
);

render(<Index />, document.getElementById('root'));
