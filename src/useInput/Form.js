import React, { useState } from 'react';
import useInput from './useInput.js';
import styled from 'styled-components';
const Forms = () => {
  const email = useInput('');
  const password = useInput('');
  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log('email', email.value);
    console.log('password', password.value);
  };
  return (
    <div>
      <FormWrapper onSubmit={onSubmitForm}>
        <Title>Sign in</Title>
        <Input placeholder="email" {...email} />
        <Input placeholder="password .." type="password" {...password} />
        <br />
        <Button type="submit">submit</Button>
      </FormWrapper>
    </div>
  );
};
const FormWrapper = styled.form`
    display: grid;
    justify-content: center;
    gap: 20px;
    padding-bottom: 50px;
`;

const Input = styled.input`
    background: rgba(255, 255, 255, 0.2);
    border-radius: 30px;
    padding: 10px 20px;
    
    background-blend-mode: overlay;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 20px 40px rgba(31, 47, 71, 0.25), 0px 1px 5px rgba(0, 0, 0, 0.1), inset 0 0 0 0.5px rgba(255, 255, 255, 0.4);
    border: 1px solid rgba(250, 250, 250, 0.4);
    :focus {
        outline: none;
    }
`;
const Title = styled.h1`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: bold;
    padding: 10px 20px;
    font-size: 40px;
    line-height: 48px;
    color: #2fb8ff ;
    text-align: center;
`;
const Button = styled.button`
    background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
    padding: 12px 0;
    width: 200px;
    border: none;
    border-radius: 30px;
    color: white;
    font-weight: bold;
    font-family: Segoe UI, sans-serif;
    cursor: pointer;
    :focus {
        outline: none;
    }
`;

export default Forms;
