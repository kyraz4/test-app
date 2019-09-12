import React from 'react';
import styled from 'styled-components';
import {Field} from 'redux-form';
    
const PostsTextArea = styled.textarea`
${meta => meta.error && meta.touched ?
    `border: solid red 2px` : ``}
`;

const ErrorSpan = styled.span`
color: red;
`;


const FormControl = ({input, meta: {touched, error}, children}) => {
  return (<div>
      <div>
      {children}
      </div>
       {error && touched && <ErrorSpan>{error}</ErrorSpan>}
    </div>
);
}

export const TextArea = (props) => {
    const {input, meta, child,...restProps} = props;
  return (
  <FormControl {...props}>
      <PostsTextArea {...input} {...restProps} />
  </FormControl>
  );
}

export const Input = (props) => {
    const {input, meta, child,...restProps} = props;
    return (
        <FormControl {...props}>
          <input {...input} {...restProps} />
    </FormControl>
    );
  }


  export const createField = (placeholder, name, validators, component, props = {}, text = '') => <div>
  <Field  component = {component} 
  name = {name}
   placeholder = {placeholder}
   validate = {validators}
   {...props} /> {text}
  </div> 

