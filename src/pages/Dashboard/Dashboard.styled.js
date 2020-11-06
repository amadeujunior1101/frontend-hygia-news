import styled from "styled-components";

const Box = styled.div`
  height: 100vh;
  /* height: 100vh; */
  font-family: Niveau;
`;

const Content = styled.div`
  display: flex;
  height: 100vh;
`;

const SidebarLeft = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContainerRigth = styled.div`
  justify-content: center;
  display: flex;
  flex: 1;
`;

const BaseForm = styled.div`
  max-height: 400px;
  width: 400px;

  @media (max-width: 780px) {
    width: 340px;
  }
`;

const Register = styled.div`
  display: inline-grid;
  margin-top: 20px;
`;

const RegisterForm = styled.div`
  display: inline-grid;
  margin-top: 20px;
`;

const BorderField = styled.div`
  border: 1px solid #858882;
  display: inline-grid;
  padding: 10px 10px 2px 10px;
  border-radius: 10px;
  background: #fff;
  height: 64px;
  transition: border-color 0.2s ease-in-out 0s;
`;

const BorderTextArea = styled.div`
  border: 1px solid #858882;
  display: inline-grid;
  padding: 10px 10px 2px 10px;
  border-radius: 10px;
  background: #fff;
  height: 80px;
  transition: border-color 0.2s ease-in-out 0s;
`;

const ImageLeft = styled.img`
  width: 100%;
  height: 700px;
  /* height: 100%; */
`;

const LabelEmail = styled.label`
  font-size: 12px;
  text-align: left;
  color: #858882;
`;

const LabelPassword = styled.label`
  font-size: 12px;
  text-align: left;
  color: #858882;
`;

const Input = styled.input`
  /* max-width: 412px; */
  align-items: center;
  /* padding-left: 12px; */
  border-radius: 5px;
  height: 36px;
  width: 100%;
  background-color: #fff;
  margin-bottom: 8px;
  font: 100 20px Nunito;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;

  @media (max-width: 780px) {
    width: 100%;
  }
`;

const TextArea = styled.textarea`
  align-items: center;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  background-color: #fff;
  margin-bottom: 8px;
  font: 100 20px Nunito;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;

  @media (max-width: 780px) {
    width: 100%;
  }
`;

const InputButton = styled.input`
  justify-content: center;
  display: flex;

  justify-content: center;

  display: flex;

  align-items: center;

  cursor: pointer;

  border-radius: 5px;
  height: 42px;
  width: 400px;
  margin-bottom: 8px;
  background-color: rgb(69, 181, 74);
  color: #fff;

  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;

  @media (max-width: 780px) {
    width: 340px;
  }

  /* max-width: 334px; */
`;

const AlertFields = styled.label`
  margin-bottom: 20px;
  visibility: hidden;
  color: #dc3545;
`;

const TitleSecundary = styled.p`
  font-size: 12px;
  text-align: center;
  color: #858882;
  margin-top: 20px;
`;

const FormLoginH1 = styled.h1`
  font: 30px Niveau;
  margin: 20px auto 20px auto;
`;

const InputFile = styled.input.attrs({ type: "file" })`
  display: none;
`;

const LabelFile = styled.label`
  background-color: #3498db;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 6px 20px;
  text-align: center;
`;

export {
  Box,
  Content,
  SidebarLeft,
  ContainerRigth,
  BaseForm,
  Register,
  RegisterForm,
  BorderField,
  ImageLeft,
  LabelEmail,
  LabelPassword,
  Input,
  InputButton,
  AlertFields,
  TitleSecundary,
  FormLoginH1,
  TextArea,
  BorderTextArea,
  LabelFile,
  InputFile,
};
