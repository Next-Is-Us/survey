import React from 'react';
import styled from 'styled-components';
import { useLocation, Navigate, useNavigate } from 'react-router-dom';
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

const Button = styled.button`
  margin-top: 3.13rem;
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
  margin-bottom: 0.75rem;
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
  margin-bottom: 1rem;
`;

const ResultNotice = styled.p`
  color: var(--Font-03_Gray, #505050);
  text-align: center;

  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: -0.02188rem;
`;

function Result() {
  const location = useLocation();
  const finalScore = location.state?.finalScore;
  const navigate = useNavigate();

  if (finalScore == null) {
    return <Navigate to="/" />;
  }

  const getResult = (score) => {
    if (score >= 15) {
      return {
        image: Character3,
        title: '심한 갱년기 상태',
        explain: (
          <React.Fragment>
            현재, 심한 갱년기 상태로 파악됩니다
            <br />
            <b>전문의의 치료와 지속적인 관리</b>가<br /> 필요해요
          </React.Fragment>
        ),
      };
    } else if (score >= 10) {
      return {
        image: Character2,
        title: '중증 갱년기 상태',
        explain: (
          <React.Fragment>
            현재, 중증 갱년기 상태로 파악됩니다
            <br />
            증상에 대한 <b>검사와 지속적인 관리</b>가<br /> 필요해요
          </React.Fragment>
        ),
      };
    } else {
      return {
        image: Character1,
        title: '경미한 갱년기 상태',
        explain: (
          <React.Fragment>
            현재 경미하게 갱년기 증상을 겪고 계신 것으로 <br /> 파악됩니다.{' '}
            <br />
            <b>건강한 식사, 규칙적인 운동의 생활 습관</b>을<br /> 갖추시는 것을
            추천드려요.
          </React.Fragment>
        ),
      };
    }
  };

  const result = getResult(finalScore);

  return (
    <Container>
      <Article>
        <PosTitleContainer>
          <img
            src={result.image}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '1.25rem',
            }}
          />
          <ResultTitle>{result.title}</ResultTitle>
          <ResultExplain>{result.explain}</ResultExplain>
          <ResultNotice>
            * 해당 테스트는 쿠퍼만 지수를 바탕으로 제작되었습니다.
          </ResultNotice>
          <Button onClick={() => navigate('/Developers')}>
            다음으로 넘어가기
          </Button>
        </PosTitleContainer>
      </Article>
    </Container>
  );
}

export default Result;
