import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const Sigin: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Sign In</h1>
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Password"
        />
        <Button name="submit" type="submit">
          Login
        </Button>

        <a href="forgot">Did you forget your password?</a>
      </form>

      <a href="http://localhost">
        <FiLogIn />I Want to Join!
      </a>
    </Content>
    <Background />
  </Container>
);

export default Sigin;
