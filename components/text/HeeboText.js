import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';


export const HeeboText =styled(Text)`
  font-family: ${({isBold}) => isBold ? 'Heebo-Bold' : 'Heebo' };
`;

export const AssistantText =styled(Text)`
  font-family: ${({isBold}) => isBold ? 'Assistant-Bold' : 'Assistant' };
`;
