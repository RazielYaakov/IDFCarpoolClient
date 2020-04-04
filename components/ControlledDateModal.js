import React from 'react';
import { Controller } from 'react-hook-form';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

const onChange = (date, setVisibility) => {
    setVisibility(false);

    return date[0];
}

const ControlledDateModal = ({ name, control, isVisible, setVisibility, minimumDate, maximumDate, mode, rules }) =>
    <Controller as={
        <DateTimePickerModal
            isDarkModeEnabled={true}
            isVisible={isVisible}
            mode={mode}
            onConfirm={() => { }}
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
        rules={rules}
    />

export default ControlledDateModal;