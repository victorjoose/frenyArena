import styled from "styled-components";
import { LeftMenu } from "../components/LeftMenu";
import { GameCanva } from "../components/GameCanva";
import { Ranking } from "../components/Ranking";

const StyleMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export function MainPage() {
    return (
        <StyleMain>
            <LeftMenu />
            <GameCanva />
            <Ranking />
        </StyleMain>
    );
}
