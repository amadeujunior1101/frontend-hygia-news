import React, { useState, useEffect } from "react";

import ImgHygia from "../../assets/logo_hygia.png";
import ImgClube1 from "../../assets/inter30.png";
import ImgClube2 from "../../assets/fla30.png";
import ImgClube3 from "../../assets/cam30.png";
import ImgClube4 from "../../assets/flu30.png";
import ImgClube5 from "../../assets/sao30.png";

import {
  ContainerFluid,
  Box,
  First,
  Main,
  TitleManchet,
  SubTitle,
  PreviewContent,
  Secundary,
  Highlighted,
  SecondLeft,
  SecondRigth,
  SecondLeftCard,
  CardImage1,
  ContentCardImage,
  BaseCard,
  ProminentArea,
  Third,
  GeneralMatters,
  GeneralMattersCards,
  GeneralCardImage,
  GeneralContentCardImage,
  Top,
  Logo,
  ThirdRigth,
  CardSport,
  CardSportSubTitle,
  CardSportTitle,
  CardSportClassification,
  CardSportPoints,
  CardSportLastGames,
  CardSportRow,
  CardSportNumber,
  CardSportImage,
  CardSportName,
  CardSportChangePosition,
  CardSportPosition,
  CardSportResume,
  CardSportRowClubs,
} from "./Home.style";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import api from "../../services/api";

export default function Home() {
  const [headline, setHeadline] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [special, setSpecial] = useState([]);
  const [several, setSeveral] = useState([]);

  const postsAll = async () => {
    const response = await api.get("/posts");

    if (response.data.headline.lenght === 0) {
      console.log("Publique uma manchete");
    } else {
      let arrHeadline = [];
      arrHeadline = response.data.headline;
      setHeadline(arrHeadline);

      let arrFeatured = [];
      arrFeatured = response.data.featured;
      setFeatured(arrFeatured);

      let arrSpecial = [];
      arrSpecial = response.data.special;
      setSpecial(arrSpecial);

      let arrSeveral = [];
      arrSeveral = response.data.several;
      setSeveral(arrSeveral);
    }
  };

  useEffect(() => {
    postsAll();
  }, []);

  return (
    <>
      <ContainerFluid>
        <Navbar />
        <Box>
          <Top>
            <Logo src={ImgHygia} alt="Logo" />
            teste tecnico
          </Top>
          <First>
            {headline.map((item) => (
              <Main key={item._id}>
                <ProminentArea>{item.category.name}</ProminentArea>
                <TitleManchet>{item.title}</TitleManchet>
                <SubTitle>{item.subTitle}</SubTitle>
                <PreviewContent>{item.content}</PreviewContent>
                <span>secundary</span>
              </Main>
            ))}

            <Secundary>
              <CardSport>
                <CardSportSubTitle>Rodada 20</CardSportSubTitle>
                <CardSportTitle>Campeonato Brasileiro 2020</CardSportTitle>
                <CardSportRow>
                  <CardSportClassification>
                    CLASSIFICAÇÃO
                  </CardSportClassification>
                  <CardSportPoints>P</CardSportPoints>
                  <CardSportLastGames>ÚLT. JOGOS</CardSportLastGames>
                </CardSportRow>

                <CardSportRowClubs>
                  <CardSportNumber>1</CardSportNumber>
                  <CardSportImage src={ImgClube1} alt="Imagem Clube" />
                  <CardSportName>INT</CardSportName>
                  <CardSportChangePosition>0</CardSportChangePosition>
                  <CardSportPosition>35</CardSportPosition>
                  <div
                    style={{
                      justifyContent: "space-between",
                      display: "flex",
                      width: "22%",
                    }}
                  >
                    <CardSportResume />
                    <CardSportResume />
                    <CardSportResume />
                    <CardSportResume />
                    <CardSportResume />
                  </div>
                </CardSportRowClubs>

                <CardSportRowClubs>
                  <CardSportNumber>2</CardSportNumber>
                  <CardSportImage src={ImgClube2} alt="Imagem Clube" />
                  <CardSportName>FLA</CardSportName>
                  <CardSportChangePosition>0</CardSportChangePosition>
                  <CardSportPosition>35</CardSportPosition>
                  <div
                    style={{
                      justifyContent: "space-between",
                      display: "flex",
                      width: "22%",
                    }}
                  >
                    <CardSportResume />
                    <CardSportResume />
                    <CardSportResume />
                    <CardSportResume />
                    <CardSportResume />
                  </div>
                </CardSportRowClubs>

                <CardSportRowClubs>
                  <CardSportNumber>3</CardSportNumber>
                  <CardSportImage src={ImgClube3} alt="Imagem Clube" />
                  <CardSportName>CAM</CardSportName>
                  <CardSportChangePosition>0</CardSportChangePosition>
                  <CardSportPosition>32</CardSportPosition>
                  <div
                    style={{
                      justifyContent: "space-between",
                      display: "flex",
                      width: "22%",
                    }}
                  >
                    <CardSportResume />
                    <CardSportResume />
                    <CardSportResume />
                    <CardSportResume />
                    <CardSportResume />
                  </div>
                </CardSportRowClubs>

                <CardSportRowClubs>
                  <CardSportNumber>4</CardSportNumber>
                  <CardSportImage src={ImgClube4} alt="Imagem Clube" />
                  <CardSportName>FLU</CardSportName>
                  <CardSportChangePosition>0</CardSportChangePosition>
                  <CardSportPosition>32</CardSportPosition>
                  <div
                    style={{
                      justifyContent: "space-between",
                      display: "flex",
                      width: "22%",
                    }}
                  >
                    <CardSportResume />
                    <CardSportResume />
                    <CardSportResume />
                    <CardSportResume />
                    <CardSportResume />
                  </div>
                </CardSportRowClubs>

                <CardSportRowClubs>
                  <CardSportNumber>5</CardSportNumber>
                  <CardSportImage src={ImgClube5} alt="Imagem Clube" />
                  <CardSportName>FLU</CardSportName>
                  <CardSportChangePosition>0</CardSportChangePosition>
                  <CardSportPosition>30</CardSportPosition>
                  <div
                    style={{
                      justifyContent: "space-between",
                      display: "flex",
                      width: "22%",
                    }}
                  >
                    <CardSportResume />
                    <CardSportResume />
                    <CardSportResume />
                    <CardSportResume />
                    <CardSportResume />
                  </div>
                </CardSportRowClubs>
              </CardSport>
            </Secundary>
          </First>

          <Highlighted>
            <SecondLeft>
              <SecondLeftCard>
                {featured.map((item) => (
                  <BaseCard key={item._id}>
                    {item.imageNameUUID === "" ? (
                      <CardImage1
                        src={"http://via.placeholder.com/400x300"}
                        alt="Imagem 1"
                        height="130"
                      />
                    ) : (
                      <CardImage1
                        src={`https://firebasestorage.googleapis.com/v0/b/higya-bank.appspot.com/o/images%2F${item.imageNameUUID}?alt=media`}
                        alt="Imagem 1"
                        height="130"
                      />
                    )}
                    <ProminentArea>{item.subTitle}</ProminentArea>
                    <ContentCardImage>{item.title}</ContentCardImage>
                  </BaseCard>
                ))}
              </SecondLeftCard>
            </SecondLeft>
            <SecondRigth>
              <span>Mercado de trabalho(em desenvolvimento)</span>
            </SecondRigth>
          </Highlighted>

          <Third>
            <SecondLeft>
              <SecondLeftCard>
                {special.map((item) => (
                  <BaseCard key={item._id}>
                    {item.imageNameUUID === "" ? (
                      <CardImage1
                        src={"http://via.placeholder.com/400x300"}
                        alt="Imagem 1"
                        height="130"
                      />
                    ) : (
                      <CardImage1
                        src={`https://firebasestorage.googleapis.com/v0/b/higya-bank.appspot.com/o/images%2F${item.imageNameUUID}?alt=media`}
                        alt="Imagem 1"
                        height="130"
                      />
                    )}
                    <ProminentArea>{item.subTitle}</ProminentArea>
                    <ContentCardImage>{item.title}</ContentCardImage>
                  </BaseCard>
                ))}
              </SecondLeftCard>
            </SecondLeft>
            <ThirdRigth>
              <span>Colunistas(em desenvolvimento)</span>
            </ThirdRigth>
          </Third>

          <GeneralMatters>
            <GeneralMattersCards>
              {several.map((item) => (
                <BaseCard key={item._id}>
                  {item.imageNameUUID === "" ? (
                    <GeneralCardImage
                      src={"http://via.placeholder.com/400x300"}
                      alt="Imagem 1"
                      height="130"
                    />
                  ) : (
                    <GeneralCardImage
                      src={`https://firebasestorage.googleapis.com/v0/b/higya-bank.appspot.com/o/images%2F${item.imageNameUUID}?alt=media`}
                      alt="Imagem 1"
                      height="130"
                    />
                  )}
                  <ProminentArea>{item.category.name}</ProminentArea>
                  <GeneralContentCardImage>
                    {item.title}
                  </GeneralContentCardImage>
                </BaseCard>
              ))}
            </GeneralMattersCards>
          </GeneralMatters>
        </Box>
      </ContainerFluid>
      <Footer />
    </>
  );
}
