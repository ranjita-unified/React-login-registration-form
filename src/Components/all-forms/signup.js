const template = {
    form_heading: 'Form Heading',
    form_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    fields: [
        {
            title: 'First Name',
            type: 'text',
            name: 'firstName',
            id: 'firstName',
            isMandatory:'true',
            validationMessage: {
                required: 'First Name is mandatory'
            }
        },
        {
            title: 'Last Name',
            type: 'text',
            name: 'lastName',
            id: 'lastName',
            isMandatory:'true',
            validationMessage: {
                required: 'Last Name is mandatory'
            }
        },        
        {
            title: 'Email',
            type: 'email',
            name: 'email',
            id: 'email',
            isMandatory:'true',
            pattern: /\S+@\S+\.\S+/,
            validationMessage: {
                required: 'Email is mandatory',
                patternMessage: "Entered value does not match email format"
            },
        },
        {
            title: 'Date of Birth',
            type: 'datepicker',
            name: '',
            id: 'dob',
            isMandatory:'false',
        },
        {
            title: 'Password',
            type: 'password',
            id: 'password',
            name: 'password',
            minLength: 5,
            isMandatory:'true',
            validationMessage: {
                required: 'Enter Password',
                lengthMessage: "Min length is 5"
            },
        },
        {
            title: 'Total Experience',
            type: 'select',
            name: 'totExp',
            id: 'totExp',
            isMandatory:'true',
            validationMessage: {
                required: 'Select Total Experience'
            },
            options:[1,2,3,4,5,6],
        },
        {
            title: 'Description',
            type: 'textarea',
            name: 'description',
            id: 'description',
            isMandatory:'true',
            validationMessage: {
                required: 'Please add description'
            }
        },
        {
            title: 'Submit',
            type: 'submit',
            name: 'submit',
            id: 'submit',
        },
        
    ]
}

export default signup