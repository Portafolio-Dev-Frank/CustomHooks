import React, { useState } from 'react'

export const useForm = (initialState = {
    name: 'francisco',
    email: 'francisco.email@email.com'
}) => {

    const [formValues, setformValues] = useState(initialState)

    const reset = () => {
        setformValues(initialState);
    }

    const handleInputChange = ({ target }) => {
        setformValues({
            ...formValues,
            [target.name]: target.value

        })
    }

    return [formValues, handleInputChange, reset];

}
