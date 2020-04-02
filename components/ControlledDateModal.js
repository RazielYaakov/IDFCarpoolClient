import React from 'react';
import {Controller} from 'react-hook-form';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const onChange = (date, setVisibility) => {
    setVisibility(false);

    return date[0];
}

const ControlledDateModal = ({name, control, isVisible, setVisibility, minimumDate, maximumDate}) => 
    <Controller as={
        <DateTimePickerModal
            isVisible={isVisible}
            mode="datetime"
            onConfirm={()=>{}}
            onCancel={() => setVisibility(false)}
            minimumDate={minimumDate}
            maximumDate={maximumDate}
        />
    }
    control={control}
    name={name}
    onChange={date => onChange(date, setVisibility)}
    onChangeName={'onConfirm'}
    defaultValue={undefined}
    rules={{
        required: true, 
        validate: date => date > new Date()
    }}
    />

export default ControlledDateModal;