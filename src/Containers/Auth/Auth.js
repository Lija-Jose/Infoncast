import React, { Component } from 'react';
import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button';
import './Auth.css';
import {Link} from 'react-router-dom';

import registerImage from '../../Images/Register.png';
import logo from '../../Images/Logo.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab); 
class Auth extends Component {

    // state={
    //     email:"eve.holt@reqres.in",
    //     password:"cityslicka",
    //     formIsValid:true
    // }
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: ''
                },
                value: '',
                label: 'Email Address',
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
                    placeholder: ''
                },
                value: '',
                label: 'Password',
                validation: {
                    required: true,
                    minLength: 6
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
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
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
        /* fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
             body: JSON.stringify({
                email: "eve.holt@reqres.in",
                password: "cityslicka"
            })
        }) //end fetch 
        .then(results => results.json())
        .then((data) => {console.log(data);})
        */
        
    }

    render () {
        const formElementsArray = [];
        for ( let key in this.state.controls ) {
            formElementsArray.push( {
                id: key,
                config: this.state.controls[key]
            } );
        }

        const Divider = ({ children }) => {
            return (
              <div className="container">
                <div className="border" />
                <span className="content">
                  {children}
                </span>
                <div className="border" />
              </div>
            );
          };

        const form = formElementsArray.map( formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                label={formElement.config.label}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );

        return (
            <div className={"Register"}>
            <div className={"row"}>
              <div className={"column"}>
                <img src={logo} className="App-logo" alt="Logo" />
                <br />
                <label className={"SignUpMessage"}>Login to Infoncast</label>
                <br/>
                <div>
                <FontAwesomeIcon icon={['fab', 'facebook-f']} className={"SocialMedia"}/>
                <FontAwesomeIcon icon={['fab', 'google']} className={"SocialMedia"}/>
                <FontAwesomeIcon icon={['fab', 'twitter']} className={"SocialMedia"}/>
                </div>
                <Divider>Or</Divider>
                <form onSubmit={this.submitHandler}>
                  {form}
                  <div className={"Centralize"}>
                    <Button
                      btnType="Success"
                      disabled={!this.state.formIsValid}
                    >
                      Login
                    </Button>

                    <br></br>
                    <label className={"PrivacyMessage"}>
                      Don't have an account?
                    </label>
                    <Link to="/Register">Sign up</Link>
                  </div>
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

export default Auth;