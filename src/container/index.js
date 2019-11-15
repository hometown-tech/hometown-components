import React from 'react';
import { render } from 'react-dom';
import ThemeProviderHtV1 from 'newComponents/ThemeProviderHtV1';
import BoxHtV1 from 'newComponents/BoxHtV1';
import ColHtV1 from 'newComponents/ColHtV1';
import RowHtV1 from 'newComponents/RowHtV1';
import AbsoluteHtV1 from 'newComponents/AbsoluteHtV1';
import Section from 'components/Section';

const Index = () => (
  <ThemeProviderHtV1>
    {/* Row */}
    <RowHtV1>
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
    <AbsoluteHtV1 top={30} right={0} bg="primary" p={30}>Absolute components</AbsoluteHtV1>
    <Section>Test</Section>
  </ThemeProviderHtV1>
);

render(<Index />, document.getElementById('root'));
