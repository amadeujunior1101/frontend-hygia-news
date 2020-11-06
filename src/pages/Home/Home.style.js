import styled from "styled-components";

const ContainerFluid = styled.div`
  background: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  /* background: blue; */
  width: 1190px;
  margin-top: 40px;
  /* margin-bottom: 40px; */
`;

const Top = styled.div`
  /* background: #ffffff; */
  /* height: 125px; */
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 5px 10px 5px;

  border-bottom: 1px solid #cccccc;

  @media (max-width: 780px) {
    margin: 0 10px 0 10px;
  }
`;

const Logo = styled.img`
  width: 197px;
  height: 75px;
  margin: 10px;
`;

const Infos = styled.div`
  /* background: brown; */
  width: 60%;
  height: 125px;
`;

const Search = styled.div`
  background: #fff;
  width: 30%;
  height: 125px;
`;

const Input = styled.input`
  max-width: 312px;
  align-items: center;
  padding-left: 12px;
  border-radius: 5px;
  height: 36px;
  width: 400px;
  background-color: #fff;
  margin-bottom: 8px;
  font: 100 20px Nunito;
  /* box-shadow: 0 0 0 0; */
  /* border: 0 none; */
  outline: 0;
`;

const First = styled.div`
  /* background: green; */
  flex: 1;
  display: flex;
  @media (max-width: 780px) {
    display: grid;
  }
`;

const Main = styled.div`
  /* background: #fff; */
  flex: 2;
  /* margin: 5px; */

  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;

  cursor: pointer;

  @media (max-width: 780px) {
    margin: 5px 10px 0 10px;
  }
`;

const TitleManchet = styled.h1`
  font-size: 40px;
  color: #333333;
  &:hover {
    color: #da0104;
  }
`;

const SubTitle = styled.p`
  font-size: 18px;
  color: #666666;
  margin-top: 10px;
`;

const PreviewContent = styled.p`
  font-size: 20px;
  color: #666666;
  margin-top: 10px;
`;

const Secundary = styled.div`
  /* background: brown; */
  background-color: #f0f0f0;
  /* padding: 10px 9px; */
  flex: 1;

  /* margin: 5px; */

  margin-top: 5px;
  margin-left: 20px;
  margin-right: 5px;

  @media (max-width: 780px) {
    margin: 5px 10px 0 10px;
  }
`;

const CardSport = styled.div`
  margin: 10px 20px 10px 20px;
  @media (max-width: 780px) {
    /* margin: 5px 10px 0 10px; */
  }
`;
const CardSportSubTitle = styled.div`
  color: #333333;
  font-size: 15px;
  @media (max-width: 780px) {
    /* margin: 5px 10px 0 10px; */
  }
`;
const CardSportTitle = styled.div`
  color: #06aa48;
  font-size: 20px;
  margin: 5.5px 0 0;
  font-weight: bold;

  @media (max-width: 780px) {
    /* margin: 5px 10px 0 10px; */
  }
`;

const CardSportRow = styled.div`
  display: flex;
  margin-top: 20px;
  border-bottom: 1px solid #cccccc;
  /* border-spacing: 15px 50px; */
  align-items: end;

  @media (max-width: 780px) {
    /* margin: 5px 10px 0 10px; */
  }
`;

const CardSportClassification = styled.div`
  color: #666666;
  font-size: 11px;
  width: 60%;
  padding-bottom: 10px;

  @media (max-width: 780px) {
    /* margin: 5px 10px 0 10px; */
  }
`;

const CardSportPoints = styled.div`
  color: #666666;
  font-size: 11px;
  width: 40%;
  text-align: right;

  @media (max-width: 780px) {
    /* margin: 5px 10px 0 10px; */
  }
`;

const CardSportLastGames = styled.div`
  color: #666666;
  font-size: 11px;
  width: 40%;
  text-align: right;

  @media (max-width: 780px) {
    /* margin: 5px 10px 0 10px; */
  }
`;

const CardSportRowClubs = styled.div`
  display: flex;
  margin-top: 20px;
  border-bottom: 1px solid #cccccc;
  border-spacing: 15px;
  align-items: center;

  @media (max-width: 780px) {
    /* margin: 5px 10px 0 10px; */
  }
`;

const CardSportNumber = styled.div`
  width: 10%;
  @media (max-width: 780px) {
    /* margin: 5px 10px 0 10px; */
  }
`;
const CardSportImage = styled.img`
  width: 10%;
  text-align: center;
  margin-right: 20px;
  margin-bottom: 5px;
  /* width: 30px;
  height: 30px; */
  @media (max-width: 780px) {
    /* margin: 5px 10px 0 10px; */
  }
`;
const CardSportName = styled.div`
  width: 10%;
  @media (max-width: 780px) {
    /* margin: 5px 10px 0 10px; */
  }
`;
const CardSportChangePosition = styled.div`
  width: 30%;
  text-align: center;
  @media (max-width: 780px) {
    /* margin: 5px 10px 0 10px; */
  }
`;
const CardSportPosition = styled.div`
  width: 15%;
  text-align: center;
  @media (max-width: 780px) {
    /* margin: 5px 10px 0 10px; */
  }
`;
const CardSportResume = styled.div`
  /* width: 30%; */
  width: 7px;
  height: 7px;
  border-radius: 50px;
  background: #666666;
  /* text-align: right; */
  /* margin-right: 5px; */
  /* grid-template-columns: repeat(auto-fit, 5px);
  display: inline; */
  
  @media (max-width: 780px) {
    /* margin: 5px 10px 0 10px; */
  }
`;

const Highlighted = styled.div`
  /* background: green; */
  flex: 1;
  display: flex;

  @media (max-width: 1010px) {
    display: grid;
  }
`;

const SecondLeft = styled.div`
  /* background: brown; */
  flex: 1.8;
  margin-top: 20px;
  margin-left: 5px;
  margin-right: 5px;
  display: flex;

  @media (max-width: 780px) {
    margin: 5px 10px 0 10px;
  }
`;

const SecondLeftCard = styled.div`
  /* background: orange; */
  width: 100%;
  justify-content: space-between;
  flex: 1.2;
  display: flex;

  @media (max-width: 730px) {
    display: grid;
    justify-content: center;
  }
`;

const BaseCard = styled.div`
  /* display: grid; */
  cursor: pointer;
  cursor: pointer;
  margin-bottom: 20px;
  /* @media (max-width: 780px) {
    display: grid;
    justify-content: center;
  } */
`;

const ProminentArea = styled.p`
  color: #cb0003;
  margin-top: 10px;
  margin-bottom: 2px;
  display: block;
  text-transform: uppercase;
  font-size: 11px;
  line-height: 1.64;
  letter-spacing: 0.6px;
`;

const CardImage1 = styled.img`
  width: 230px;
  /* margin-right: 3px; */

  @media (max-width: 780px) {
    margin: 0;
  }
`;

// const CardImage2 = styled.img`
//   width: 230px;

//   @media (max-width: 780px) {
//     margin: 0;
//   }
// `;

// const CardImage3 = styled.img`
//   width: 230px;

//   @media (max-width: 780px) {
//     margin: 0;
//   }
// `;

const ContentCardImage = styled.h2`
  width: 230px;
  font-size: 22px;
  color: #000000;
  &:hover {
    color: #da0104;
  }
  /* font-family: Niveau; */
`;

const SecondRigth = styled.div`
  /* background: brown; */
  flex: 1;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 5px;
  border: 1px solid #cccccc;

  @media (max-width: 780px) {
    margin: 5px 10px 0 10px;
  }
`;

const Third = styled.div`
  /* background: green; */
  flex: 1;
  display: flex;

  @media (max-width: 1010px) {
    display: grid;
  }
`;

const ThirdRigth = styled.div`
  /* background: brown; */
  flex: 1;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 5px;
  background-color: #f0f0f0;
  /* border: 1px solid #cccccc; */

  @media (max-width: 780px) {
    margin: 5px 10px 0 10px;
  }
`;

const GeneralMatters = styled.div`
  /* background: brown; */
  /* flex: 1.8; */
  margin-top: 20px;
  margin-left: 5px;
  margin-right: 5px;
  display: flex;

  @media (max-width: 780px) {
    margin: 5px 10px 0 10px;
  }
`;

const GeneralMattersCards = styled.div`
  /* background: orange; */
  width: 100%;
  justify-content: space-between;
  /* flex: 1.2; */
  display: grid;

  grid-template-columns: repeat(auto-fit, 215px);

  @media (max-width: 730px) {
    display: grid;
    justify-content: center;
  }
`;

const GeneralCardImage = styled.img`
  width: 215px;
  /* margin-right: 3px; */

  @media (max-width: 780px) {
    margin: 0;
  }
`;

const GeneralContentCardImage = styled.h2`
  width: 215px;
  font-size: 22px;
  color: #000000;
  &:hover {
    color: #da0104;
  }
  /* font-family: Niveau; */
`;

export {
  ContainerFluid,
  Box,
  First,
  TitleManchet,
  SubTitle,
  PreviewContent,
  Main,
  Secundary,
  Highlighted,
  SecondLeft,
  SecondRigth,
  SecondLeftCard,
  CardImage1,
  // CardImage2,
  // CardImage3,
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
  Infos,
  Search,
  Input,
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
};
