import React from 'react';
import {Picker} from 'native-base';
import {Controller} from 'react-hook-form';

const onChange = (args, handlePick) => {
  handlePick(args[0]);
  return args[0];
};

const ControlledPicker = ({control, options, name, handlePick}) => {

  return (<Controller as={
    <Picker mode="dialog" style={{width: 150}}>
      {convertListToPickerOptions(options)}
    </Picker>
  }
                      control={control}
                      name={name}
                      onChange={(selectedValue) => onChange(selectedValue, handlePick)}
                      onChangeName={'onValueChange'}
                      valueName={'selectedValue'}
                      defaultValue={"נא לבחור"}
  />);
};

const convertListToPickerOptions = list =>
    list.map(item => (<Picker.Item key={item} label={item} value={item}/>));

export default ControlledPicker;