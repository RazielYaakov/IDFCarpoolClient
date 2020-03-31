import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';


export const HebboText =styled(Text)`
  font-family: ${({isBold}) => isBold ? 'Hebbo-Bold' : 'Hebbo' };
`;

export const AssistantText =styled(Text)`
  font-family: ${({isBold}) => isBold ? 'Assitant-Bold' : 'Assitant' };
`;
