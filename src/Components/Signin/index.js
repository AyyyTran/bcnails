import React from 'react';
import {
  Container,
  FormWrap,
  FormInput,
  Form,
  FormH1,
  FormLabel,
  FormButton,
  FormContent,
  Icon,
  Text,
} from './SigninElements';
const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>BC Nails</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Book Your Appointment Today!</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required></FormInput>
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required></FormInput>
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgott Password?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
