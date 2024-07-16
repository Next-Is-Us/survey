import React from 'react';
import Frame from '../image/Frame 1707482243.png';
import styled from 'styled-components';
import LeftAllow from '../image/allow_left.png';
import { useState } from 'react';
import Character1 from '../image/Frame 1707482235.png';
import Character2 from '../image/Character2.png';
import Character3 from '../image/Character3.png';

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

const Button = styled.button`
  margin-top: 4.62rem;
  border-radius: 12px;
  background: ${({ isDisabled }) =>
    isDisabled ? 'rgba(163, 15, 250, 0.15)' : '#A30FFA'};
  color: #ffffff;
  &:disabled {
    cursor: not-allowed;
    background: rgba(163, 15, 250, 0.15);
  }
  display: flex;
  width: 100%;
  padding: 0.875rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
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

const ResultTitle = styled.p`
  color: var(--Font-02_black, #111);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.125rem;
  letter-spacing: -0.0375rem;
  margin-bottom: 1rem;
`;

const ResultExplain = styled.p`
  color: var(--Font-03_Gray, #505050);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: -0.02188rem;
`;

const questions = [
  <React.Fragment>
    홍조, 얼굴 화끈거림의 증상을 <br />
    가지고 계신가요?
  </React.Fragment>,
  '발현 증상을 겪고 계신가요?',
  '불면증 증상을 겪고 계신가요?',
  '신경증 증상을 겪고 계신가요?',
  '우울증 증상을 겪고 계신가요?',
  '어지럼증 증상을 겪고 계신가요?',
  '잦은 피로감을 느끼시나요?',
  '관절통, 근육통을 느끼시나요?',
  '두통 증상을 겪고 계시나요?',
  '가슴 두근거림을 겪고 계시나요?',
  <React.Fragment>
    질건조, 분비물 감소 증상을 <br />
    겪고 계시나요?
  </React.Fragment>,
];

const results = [
  {
    image: Character1,
    title: '경미한 갱년기 상태',
    explain: (
      <React.Fragment>
        현재 경미하게 갱년기 증상을 겪고 계신 것으로 <br /> 파악됩니다. <br />
        <b>건강한 식사, 규칙적인 운동의 생활 습관</b>을<br /> 갖추시는 것을
        추천드려요.
      </React.Fragment>
    ),
  },
  {
    image: Character2,
    title: '중증 갱년기 상태',
    explain: (
      <React.Fragment>
        현재, 중증 갱년기 상태로 파악됩니다
        <br />
        증상에 대한 <b>검사와 지속적인 관리</b>가<br /> 필요해요
      </React.Fragment>
    ),
  },
  {
    image: Character3,
    title: '심한 갱년기 상태',
    explain: (
      <React.Fragment>
        현재, 심한 갱년기 상태로 파악됩니다
        <br />
        <b>전문의의 치료와 지속적인 관리</b>가<br /> 필요해요
      </React.Fragment>
    ),
  },
];

function Result() {
  const [resultIndex, setResultIndex] = useState(0);

  return (
    <Container>
      <Article>
        <PosTitleContainer>
          <TopContainer>
            <img
              src={LeftAllow}
              style={{
                width: '1.75rem',
                height: '1.75rem',
                cursor: 'pointer',
              }}
            />
          </TopContainer>

          <img
            src={results[resultIndex].image}
            style={{ display: 'flex', alignItems: 'center' }}
          />

          <ResultTitle>{results[resultIndex].title}</ResultTitle>

          <ResultExplain>{results[resultIndex].explain}</ResultExplain>

          <Button>다음으로 넘어가기</Button>
        </PosTitleContainer>
      </Article>
    </Container>
  );
}

export default Result;
