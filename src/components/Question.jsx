import React from 'react';
import Frame from '../image/Frame 1707482243.png';
import styled from 'styled-components';
import LeftAllow from '../image/allow_left.png';
import { useState } from 'react';
const Container = styled.div`
  background: #ffffff;
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
`;

const TopContainer = styled.div`
  padding: 0.88rem 1.25rem 0.88rem 1.25rem;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const ProgressbarContainer = styled.div`
  width: 100%;
  margin-top: 0.88rem;
  height: 0.125rem;
  background-color: #d9d9d9;
  margin-bottom: 1rem;
  position: relative;
`;

const Progressbar = styled.div`
  width: ${({ progress }) => `${progress}%`};
  height: 100%;
  background-color: #a30ffa;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.p`
  color: var(--Font-02_black, #111);

  /* MO/Title/KR/T1_KR_Sb */
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.125rem; /* 141.667% */
  letter-spacing: -0.0375rem;
  text-align: left;
  margin-bottom: 3rem;
`;

const ChoiceBlank = styled.div`
  display: flex;
  height: 1.5rem;
  padding: 1.4375rem 1.75rem;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 0.75rem;
  background: var(--BG-Regular_Color, #f1f1f5);
`;

const BlankContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;

const ChoiceP = styled.p`
  color: var(--Font-02_black, #111);

  /* Button/BUT1_Sb */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem; /* 150% */
  letter-spacing: -0.025rem;
`;

const Button = styled.button`
  margin-top: 5rem;
  border-radius: 12px;
  background: #a30ffa;
  display: flex;
  width: 100%;
  padding: 0.875rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  color: var(--Font-01_White, #fff);
  text-align: center;
  border: none;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: -0.025rem;
  margin-bottom: 2rem;
`;
function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 11;

  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <Container>
      <Article>
        <PosTitleContainer>
          <TopContainer>
            <img
              src={LeftAllow}
              style={{ width: '1.75rem', height: '1.75rem', margin: 0 }}
            />

            <ProgressbarContainer>
              <Progressbar progress={progress} />
            </ProgressbarContainer>

            <Title>
              홍조, 얼굴 화끈거림의 증상을 <br />
              가지고 계신가요?
            </Title>

            <BlankContainer>
              <ChoiceBlank>
                <ChoiceP>심함</ChoiceP>
              </ChoiceBlank>
              <ChoiceBlank>
                <ChoiceP>보통</ChoiceP>
              </ChoiceBlank>
              <ChoiceBlank>
                <ChoiceP>약간</ChoiceP>
              </ChoiceBlank>
              <ChoiceBlank>
                <ChoiceP>없음</ChoiceP>
              </ChoiceBlank>
            </BlankContainer>
          </TopContainer>

          <Button>다음</Button>
        </PosTitleContainer>
      </Article>
    </Container>
  );
}

export default Question;
