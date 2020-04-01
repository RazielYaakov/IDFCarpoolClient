import React from 'react';
import styled from 'styled-components';
import {Text} from 'native-base';

export const HebboText = styled(Text)`
  font-family: ${({isBold}) => isBold ? 'Heebo-Bold' : 'Heebo'};
`;

export const AssistantText = styled(Text)`
  font-family: ${({isBold}) => isBold ? 'Assitant-Bold' : 'Assitant'};
`;
