import React, { useState, useEffect } from "react";
import { storage } from "../../firebase/firebase";

import { v4 as uuidv4 } from "uuid";

import api from "../../services/api";

import PostValidator from "../../validators/PostValidator";

import Navbar from "../../components/Navbar";

import {
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
} from "./Dashboard.styled";

import imgSidebar from "../../assets/img-sidebar.png";

function App() {
  const [titleValue, setTitleValue] = useState("");
  const [subTitleValue, setSubTitleValue] = useState("");
  const [visibilityValue, setVisibilityValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [category, setCategory] = useState([]);
  const [authorValue, setAuthorValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [referenceUuid, setReferenceUuid] = useState("");

  const [imageAsFile, setImageAsFile] = useState("");

  const [labelFile, setLabelFile] = useState("Anexar Imagem");

  function handleTitle(e) {
    e.preventDefault();
    setTitleValue(e.target.value);
  }

  function handleSubTitle(e) {
    e.preventDefault();
    setSubTitleValue(e.target.value);
  }

  function handleVisibility(e) {
    e.preventDefault();
    setVisibilityValue(e.target.value);
  }

  function handleCategory(e) {
    e.preventDefault();
    console.log(e.target.value);
    setCategoryValue(e.target.value);
  }

  function handleContent(e) {
    e.preventDefault();
    setContentValue(e.target.value);
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  // }

  const createPost = async () => {
    const token = localStorage.getItem("@HIGYA_TOKEN");
    const author = localStorage.getItem("@HIGYA_USER");

    const response = await api.post(
      "/create-post",
      {
        title: titleValue,
        subTitle: subTitleValue,
        content: contentValue,
        visibility: visibilityValue,
        imageNameUUID: referenceUuid !== "" ? referenceUuid : "",
        imageNameReal: "",
        category: categoryValue,
        author: author,
      }
      // {
      //   headers: {
      //     Accept: "application/json",
      //     Authorization: `Bearer ${token}`,
      //   },
      // }
    );

    if (response.data.error === false) {
      handleFireBaseUpload();
    }

    cleanFields();
  };

  function cleanFields() {
    setTitleValue("");
    setSubTitleValue("");
    setContentValue("");
    setVisibilityValue("");
    setCategoryValue("");
    setImageAsFile("");
    setLabelFile("Anexar Imagem");
  }

  const categories = async () => {
    const token = localStorage.getItem("@HIGYA_TOKEN");
    const response = await api.get("/category", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    setCategory(response.data.categories);
    console.log(response.data.categories);
  };

  const handleImageAsFile = (e) => {
    e.preventDefault();
    const image = e.target.files[0];

    let extension = image.type.split("/");
    console.log(extension[1]);

    if (extension[0] !== "image") {
      console.error("Apenas imagens são suportadas");

      setImageAsFile("");
    } else {
      var parts = [image];

      let uuid = uuidv4();

      setReferenceUuid(`${uuid + "." + extension[1]}`);

      let file = new File(parts, `${uuid + "." + extension[1]}`, {
        size: image.size,
        type: image.type,
      });
      console.log(file);
      setImageAsFile(() => file);
      setLabelFile("1 imagem selecionada");
    }
  };

  const handleFireBaseUpload = (e) => {
    console.log("start of upload");

    if (imageAsFile === "") {
      return console.error(
        `not an image, the image file is a ${typeof imageAsFile}`
      );
    }

    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);
    //initiates the firebase side uploading
    uploadTask.on(
      "state_changed",
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot);
      },
      (err) => {
        //catches the errors
        console.log(err);
      }
    );
  };

  useEffect(() => {
    categories();
  }, []);

  return (
    <>
      <Box>
        <Content style={{ paddingTop: 40 }}>
          <Navbar />
          <SidebarLeft>
            <ImageLeft src={imgSidebar} alt="Iamge sideabar" />
          </SidebarLeft>
          <ContainerRigth>
            <BaseForm>
              {/* <FormLoginH1>
              <strong>Bem-vindo</strong> Crie suas postagens
            </FormLoginH1> */}

              <TitleSecundary>
                Todos os conteúdos são postados por aqui!
              </TitleSecundary>

              <Register>
                <RegisterForm action="" onSubmit={handleFireBaseUpload}>
                  <BorderField>
                    <LabelEmail htmlFor="">Título</LabelEmail>
                    <Input
                      type="text"
                      value={titleValue}
                      onChange={(e) => handleTitle(e)}
                    />
                  </BorderField>

                  <AlertFields>Obrigatório</AlertFields>

                  <BorderField>
                    <LabelEmail htmlFor="">SubTitulo</LabelEmail>
                    <Input
                      type="text"
                      value={subTitleValue}
                      onChange={(e) => handleSubTitle(e)}
                    />
                  </BorderField>
                  <AlertFields>Obrigatório</AlertFields>

                  <BorderField>
                    <LabelEmail htmlFor="">Visibilidade</LabelEmail>
                    <select
                      value={visibilityValue}
                      onChange={(e) => handleVisibility(e)}
                    >
                      {visibilityValue === "" && (
                        <>
                          <option value="selecione" id="choiseVisibility">
                            selecione
                          </option>
                        </>
                      )}
                      <option value="headline" id="choiseVisibility">
                        Manchete
                      </option>
                      <option value="featured" id="choiseVisibility">
                        Destaques
                      </option>

                      <option value="special" id="choiseVisibility">
                        Especial
                      </option>

                      <option value="several" id="choiseVisibility">
                        Diversos
                      </option>
                    </select>
                  </BorderField>
                  <AlertFields>Obrigatório</AlertFields>

                  <BorderField>
                    <LabelEmail htmlFor="">Categoria</LabelEmail>
                    <select
                      value={categoryValue}
                      onChange={(e) => handleCategory(e)}
                    >
                      {categoryValue == "" && (
                        <option value="selecione">selecione</option>
                      )}
                      {category.length > 0 &&
                        category.map((item) => (
                          <option key={item._id} value={item._id}>
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </BorderField>
                  <AlertFields>Obrigatório</AlertFields>

                  <BorderTextArea>
                    <LabelPassword htmlFor="">Conteúdo</LabelPassword>
                    <TextArea
                      type="text"
                      value={contentValue}
                      onChange={(e) => handleContent(e)}
                    />
                  </BorderTextArea>

                  <AlertFields className="alert-fields">
                    Obrigatório
                  </AlertFields>

                  <LabelFile for="selecao-arquivo">{labelFile}</LabelFile>
                  <InputFile
                    id="selecao-arquivo"
                    type="file"
                    onChange={handleImageAsFile}
                  />
                </RegisterForm>

                <div style={{ justifyContent: "center" }}>
                  <InputButton
                    type="submit"
                    value="Enviar"
                    onClick={() => {
                      PostValidator(
                        titleValue,
                        contentValue,
                        visibilityValue,
                        categoryValue,
                        () => createPost()
                      );
                    }}
                  />
                </div>
              </Register>
            </BaseForm>
          </ContainerRigth>
        </Content>
        {/* poi */}
      </Box>
    </>
  );
}

export default App;
