import React from 'react';
import { reduxForm } from 'redux-form';
import { Input, createField } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from '../../redux/authReduser';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';

const SummaryErrorContainer = styled.div`
   border: red 2px solid;
   paddind: 5px;
   color: red;
`;

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit = {handleSubmit}>
                {createField('email', 'email',[required], Input)}
                {createField('password', 'password', [required], Input, {type: 'password'})}
                {createField(null ,'rememberMe',[] , Input, {type: 'checkbox'}, 'rememberMe')}
            {  error &&
                  <SummaryErrorContainer>
                  {error}
              </SummaryErrorContainer>
            }
            <div>
                <button>Login</button>
            </div>
      </form>;
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to= {'profile/'} />
    }
     
    return <div>
         <h1>Login</h1>
           <LoginReduxForm onSubmit = {onSubmit} />
        </div>;
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);