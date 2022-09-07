import React,{useState} from "react";
import Alert from "react-bootstrap/Alert";
import { useForm } from 'react-hook-form';

import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

//import template from './all-forms/signup';

let template = {
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
const renderFields = (formFields,register,errors,setStartDate,startDate) => {
    return formFields.fields.map((field,key) => {
        switch (field.type) {
            case 'text':
                return (
                    <div className="form-group" id={key}>
                        <div className="col-md-6">
                            <label htmlFor={field.id}>{field.title} {field.isMandatory?'*':''}</label>
                            <input type="text"
                                className={`form-control`} id='firstName' name='firstName'
                                {...register('firstName', {
                                    required: field.validationMessage.required,
                                })}
                            />
                        </div>
                        {errors.firstName && <span>{errors.firstName.message}</span>}
                    </div>
                )
            case 'email':
                return (
                    <div className="form-group">
                        <div className="col-md-6">
                            <label htmlFor={field.id}>Email {field.isMandatory?'*':''}</label>
                            <input type="email" className={`form-control ${errors.email ? "requiredField" : ""}`} id={field.id} name={field.name} {...register(field.id, {
                            required: field.validationMessage.required,
                            pattern: {
                                value: field.pattern,
                                message: field.validationMessage.patternMessage,
                            }
                            })}/>
                        </div>
                        {errors[field.id] && <span>{errors[field.id]['message']}</span>}
                    </div>
                )
            case 'password':
                return (
                    <div className="form-group">
                        <div className="col-md-6">
                            <label htmlFor={field.id}>{field.title} {field.isMandatory?'*':''}</label>
                            <input type="password" className={`form-control ${errors.password ? "requiredField" : ""}`} id={field.id} name={field.name} {...register(field.id, {
                            required: field.validationMessage.required,
                            minLength: {
                                value: field.minLength,
                                message: field.lengthMessage
                            }
                            })}/>
                        </div>
                        {errors[field.id] && <span>{errors[field.id]['message']}</span>}
                    </div>
                )
            case 'select':
                return (
                    <div className="form-group" style={{paddingTop:'15px'}}>
                <div className="col-md-6">
                    <div className="form-select">
                        <label htmlFor={field.id} className="form-label">{field.title} {field.isMandatory?'*':''}</label>
                        <select className={`form-control ${errors.totExp ? "requiredField" : ""}`} id={field.id} name={field.name} {...register(field.id, {
                            required: field.validationMessage.required,
                        })}>
                           {field.options.map((option) => (
                                <option key={option}>{option}</option>
                            ))}
                        
                        </select>
                        {errors[field.id] && <span>{errors[field.id]['message']}</span>}
                    </div>
                </div>
            </div>
                )
            case 'datepicker':
                return (
                    <div className="form-group">
                        <div className="col-md-6">
                            <label htmlFor="dob">{field.title} {field.isMandatory?'*':''}</label>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                maxDate={new Date()}
                                showDisabledMonthNavigation
                                className="form-control"
                                id={field.id}
                            />
                        </div>
                        {errors[field.id] && <span>{errors[field.id]['message']}</span>}              
                    </div>
                )
                case 'textarea':
                return (
                    <div className="form-group">
                        <div className="col-md-6">
                            <label htmlFor="dob">{field.title} </label>
                            <textarea className = "form-control" rows = "3" placeholder = {field.title} id={field.id} name={field.name} {...register("description", {
                                    required: 'Please add description',
                                })}></textarea>
                        </div>
                        {errors[field.id] && <span>{errors.description.message}</span>}              
                    </div>
                )
                case 'submit':
                return (
                    <div className="form-group"> 
                        <div className="col-sm-6">
                            <button type="submit" className="btn-block btn-primary btn">{field.title}</button>
                        </div>
                    </div>
                )
            default:
                return (
                    <div key={field.id}>
                        <span className="red-text">Invalid Field</span>
                    </div>
                )
        }
    })
}
const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          totExp: "",
          acceptTc: ""
        },
      });
    const [startDate, setStartDate] = useState(null);
    // const onSubmit = (data) => {
    //     if(errors['firstName']) {
    //         setError("firstName",{
    //             type:"custom"
    //         })
    //     }
    //     if(errors['lastName']) {
    //         setError("lastName",{
    //             type:"custom",
    //         })
    //     }
    //     if(errors['email']) {
    //         setError("email",{
    //             type:"custom",
    //         })
    //     }
    //     if(errors['password']) {
    //         setError("password",{
    //             type:"custom",
    //         })
    //     }
    //     if(errors['totExp']) {
    //         setError("totExp",{
    //             type:"custom",
    //         })
    //     }
    //     if(errors['acceptTc']) {
    //         setError("acceptTc",{
    //             type:"custom",
    //         })
    //     }
    //     if(errors['description']) {
    //         setError("description",{
    //             type:"custom",
    //         })
    //     }
    // };
    const onSubmit = (data) => {
        console.log(data)
     }
    return(
        <>
        <Alert
        show={true}
        variant="success"
        >This is a success Message
        </Alert>
        <h2>{template.form_heading}</h2>
        <p>{template.form_description}</p>
        
        <form className="form-card" method="post" onSubmit={handleSubmit(onSubmit)} key="formKey">
            {renderFields(template,register,errors,setStartDate,startDate)}
        </form>
        
        </>
    )
}

export default Form;
