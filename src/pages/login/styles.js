// eslint-disable-next-line prettier/prettier
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export const FormCont = styled.View`
  width: 60%;
  min-height: 30%;
  background: #7159c1;
  border-radius: 8px;
  flex-direction: column;
  margin-bottom: 20%;
  padding: 10px;
  box-shadow: 10px 5px 5px red;
`;

export const FormInput = styled.TextInput`
  height: 30px;
  background: #dddd;
  margin: 10px;
  margin-bottom: 3px;
  margin-top: 20px;
  border-radius: 12px;
  color: #000;
  padding: 0;
  /* padding-horizontal: 10; */
`;

export const InputText = styled.Text`
  align-self: center;
`;

export const Btn = styled(RectButton)`
  width: 80%;
  align-self: center;
  margin: 10px;
  margin-top: auto;
  padding: 10px;
  border-radius: 4px;
  background: #1569c1;
  box-shadow: 10px 5px 5px red;
`;

export const BtnText = styled.Text`
  text-align: center;
  color: #fff;
`;
