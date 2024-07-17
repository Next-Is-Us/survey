import styled from "styled-components";
import LeftAllow from "../image/allow_left.png";

const Container = styled.div`
  // background: #ffffff;
  background: black;
  padding: 0;
`;

const Article = styled.div`
  align-items: center;
  display: flex;
  text-align: center;
  flex-direction: column;
  color: #fff;
`;

const PosTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 22.5rem;
  flex-direction: column;
  align-items: center;
  background: white;
`;

const TopContainer = styled.div`
  padding: 0.88rem 1.25rem 0.88rem 1.25rem;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const IntroduceTitleTextContainer = styled.div`
  margin-top: 3.15rem;
  width: 100%;
  // display: flex;
`;

const IntroduceTitleText = styled.p`
  color: var(--Font-02_black, #111);

  /* MO/Headline/KR/H1_KR_Sb */
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.625rem; /* 131.25% */
  letter-spacing: -0.05rem;
  text-align: left;
  margin-left: 1.25rem;
`;

const IntroduceSubTextContainer = styled.div`
  margin-top: 0.75rem;
  width: 100%;
`;

const IntroduceSubText = styled.p`
  color: var(--Font-03_Gray, #505050);

  /* MO/Body/KR/B2_KR_Rg */
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 142.857% */
  letter-spacing: -0.02188rem;
  text-align: left;
  margin-left: 1.25rem;

  & span {
    font-weight: 600;
  }
`;

const IntroduceTeamTextContainer = styled.div`
  margin-top: 1.25rem;
  width: 100%;
`

const IntroduceTeamText = styled.p`
  text-align: left;
  margin-left: 1.25rem;
  color: var(--Font-02_black, #111);

  /* MO/Headline/KR/H6_KR_Rg */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
  letter-spacing: -0.025rem;
`;

export default function Devlopers() {
  return (
    <Container>
      <Article>
        <PosTitleContainer>
          <TopContainer>
            <img
              src={LeftAllow}
              style={{
                width: "1.75rem",
                height: "1.75rem",
                cursor: "pointer",
              }}
            />
          </TopContainer>
          <IntroduceTitleTextContainer>
            <IntroduceTitleText>
              안녕하세요!
              <br />
              저희는...
            </IntroduceTitleText>
          </IntroduceTitleTextContainer>
          <IntroduceSubTextContainer>
            <IntroduceSubText>
              갱년기 케어 솔루션과 자녀와 소통을 이어줄 수 있는 <br />{" "}
              어플리케이션을 제작하고 있는 팀{" "}
              <span>[네카라쿠배그다음우리]</span> <br />
              입니다!
            </IntroduceSubText>
          </IntroduceSubTextContainer>
          <IntroduceTeamTextContainer>
            <IntroduceTeamText>[네카라쿠배그다음 우리] 팀원</IntroduceTeamText>
          </IntroduceTeamTextContainer>
        </PosTitleContainer>
      </Article>
    </Container>
  );
}
