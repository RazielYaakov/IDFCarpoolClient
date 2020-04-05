import React from 'react';
import {Picker} from 'native-base';
import {Controller} from 'react-hook-form';

const onChange = args => args[0];

const ControlledPicker = ({control, options, name}) => {

  return (<Controller as={
    <Picker mode="dialog" style={{width: 150}}>
      {convertListToPickerOptions(options)}
    </Picker>
  }
                      control={control}
                      name={name}
                      onChange={onChange}
                      onChangeName={'onValueChange'}
                      valueName={'selectedValue'}
                      defaultValue={options[0]}
  />);
};

const convertListToPickerOptions = list =>
    list.map(item => (<Picker.Item key={item} label={item} value={item}/>));

export default ControlledPicker;