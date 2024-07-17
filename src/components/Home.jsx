import React from 'react';
import Frame from '../image/MainImage.png';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle.js';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  background: #ffffff;
  padding: 0;
`;

const Article = styled.div`
  align-items: center;
  display: flex;
  text-align: center;
  flex-direction: column;
  margin-top: 1.75rem;
  color: #fff;
`;

const PosTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 20.9375rem;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const PosTitle = styled.p`
  color: var(--Font-02_black, #111);
  font-family: '109LeantheWall', sans-serif;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.625rem;
  letter-spacing: -0.15rem;
  text-align: left;
  align-self: flex-start;
  width: 100%;
`;

const TestName = styled.p`
  color: var(--Font-02_black, #111);
  text-align: center;
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.625rem;
  letter-spacing: -0.05rem;
  text-align: left;
  align-self: flex-start;
  width: 100%;
`;

const Images = styled.img`
  width: 100%;
  height: 22rem;
  flex-shrink: 0;
  margin-top: 4.31rem;
`;

const Button = styled.button`
  border-radius: 12px;
  background: #a30ffa;
  display: flex;
  width: 20rem;
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

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <GlobalStyle />
      <Article>
        <PosTitleContainer>
          <PosTitle>지금 나는 갱년기일까?</PosTitle>

          <TestName>
            11개 문항으로 측정하는
            <br />
            <b>갱년기</b> 자가진단 테스트
          </TestName>

          <Images src={Frame} />

          <Button onClick={() => navigate('/Question')}>시작하기</Button>
        </PosTitleContainer>
      </Article>
    </Container>
  );
}

export default Home;
