import registerImage from '../../Images/Register.png';
import React, { Component } from 'react';
import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button';
import './Register.css';
import {Link} from 'react-router-dom';


class Register extends Component {
    state = {
        controls: {
            userName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'User Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            confirmPassword: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Re - Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            agreement: {
                elementType: 'input',
                elementConfig: {
                    type: 'checkbox',
                    placeholder: ''
                },
                value: '',
                label: 'Agreement',
                checkmark:'checkmark',
                validation: {
                    checked: true
                },
                valid: false,
                touched: false
            }
        },
        formIsValid:false
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.checked) {
            isValid = value !== false && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, controlName) => {
        
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: (controlName==="agreement"?event.currentTarget.checked:event.target.value),
                valid: this.checkValidity((controlName==="agreement"?event.currentTarget.checked:event.target.value), this.state.controls[controlName].validation),
                touched: true
            }
        };
        
        
        let formValid=true;
        for(let controlName in updatedControls ){
            formValid=updatedControls[controlName].valid && formValid;
        }
        this.setState({controls: updatedControls, formIsValid:formValid});
    }

    submitHandler = (event) => {
        event.preventDefault();
        //TODO:
    }

    render () {
        const formElementsArray = [];
        for ( let key in this.state.controls ) {
            formElementsArray.push( {
                id: key,
                config: this.state.controls[key]
            } );
        }

        const form = formElementsArray.map( formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                label={formElement.config.label}
                checkmark={formElement.config.checkmark}
                changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );

        return (
          <div className={"Register"}>
            <div className={"row"}>              
              <div className={"column"}>
                <form onSubmit={this.submitHandler}>
                  {form}
                  <Button btnType="Success" disabled={!this.state.formIsValid}>
                    Sign Up
                  </Button>
                  <br></br>
                  <Link to="/Signin">Have an Account?</Link>
                </form>
              </div>
              <div className={"column"}>
                <img
                  src={registerImage}
                  className="Register-Image"
                  alt="Register"
                />
              </div>
            </div>
          </div>
        );
    }
}

export default Register;