import React from 'react';
import {Picker, Input} from 'native-base';
import {TextInput} from 'react-native';
import {Controller} from 'react-hook-form';

const onChange = (args, handlePick) => {
  handlePick(args[0]);
  return args[0];
};

const ControlledPicker = ({control, options, name, handlePick}) => {

  return (<Controller as={
    <>
    <TextInput style={{width:200, height:50, }}/>
    <Picker mode="dialog" style={{width: 150}}>
      {convertListToPickerOptions(options)}
    </Picker>
    </>
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