import React, { useState } from 'react';


export const useForm = (initialState: any) => {
    const [dataForm, setDataForm] = useState(initialState);

    const handleOnDataForm = (field: any, data: String) => {
        setDataForm({ ...dataForm, [field]: data });
    }

    return {
        dataForm,
        handleOnDataForm
    }
};