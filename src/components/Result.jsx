import React from 'react';
import Frame from '../image/Frame 1707482243.png';
import styled from 'styled-components';
import LeftAllow from '../image/allow_left.png';
import { useState } from 'react';
import Character from '../image/Frame 1707482235.png';
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
  background-color: yellow;
  flex-direction: column;
`;

const ProgressbarContainer = styled.div`
  width: calc(100% + 2.5rem);
  margin: 0 -1.25rem;
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
  color: ${({ isSelected }) => (isSelected ? '#A30FFA' : '#111')};
  height: 1.5rem;
  padding: 1.4375rem 1.75rem;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 0.75rem;
  background: ${({ isSelected }) =>
    isSelected
      ? 'rgba(163, 15, 250, 0.15)'
      : 'var(--BG-Regular_Color, #f1f1f5)'};
  cursor: pointer;
  border: ${({ isSelected }) =>
    isSelected ? '1px solid rgba(163, 15, 250, 0.50)' : 'none'};
  &:hover {
    background-color: rgba(163, 15, 250, 0.15);
  }
`;

const BlankContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;

const ChoiceP = styled.p`
  color: ${({ isSelected }) => (isSelected ? '#A30FFA' : '#111')};
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem; /* 150% */
  letter-spacing: -0.025rem;
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

  /* MO/Title/KR/T1_KR_Sb */
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.125rem; /* 141.667% */
  letter-spacing: -0.0375rem;
  margin-bottom: 1rem;
`;

const ResultExplain = styled.p`
  color: var(--Font-03_Gray, #505050);
  text-align: center;

  /* MO/Body/KR/B2_KR_Rg */
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 142.857% */
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

function Result() {
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
            src={Character}
            style={{ display: 'flex', alignItems: 'center' }}
          />

          <ResultTitle>경미한 갱년기 상태</ResultTitle>

          <ResultExplain>
            현재 경미하게 갱년기 증상을 겪고 계신 것으로
            <br /> 파악됩니다
            <br />
            <b>건강한 식사, 규칙적인 운동의 생활 습관을</b> <br />
            갖추시는 것을 추천드려요
          </ResultExplain>

          <Button>다음</Button>
        </PosTitleContainer>
      </Article>
    </Container>
  );
}

export default Result;