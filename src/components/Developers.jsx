import styled from 'styled-components';
import PersonContainer from './PersonContainer';
import PmProfileImg from '../image/pmProfilep.png';
import designerProfileImg from '../image/designerProfile.jpeg';
import backProfileK from '../image/backProfileK.jpeg';
import backProfileL from '../image/backProfileL.jpeg';
import frontProfileL from '../image/frontProfileL.png';
import frontProfileP from '../image/frontProfileP.png';
import pencilImg from '../image/pencil.svg';
import shareImg from '../image/share.svg';
import { useNavigate } from 'react-router-dom';
import GlobalStyle from '../GlobalStyle.js';
import { useEffect } from 'react';
import imgLogo from '../image/todayHeart.png';

const Container = styled.div`
  background: #ffffff;
  /* background: black; */
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
`;

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

const PersonInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const DescribeTextContainer = styled.div`
  width: 100%;
  margin-top: 2.5rem;
`;

const DescribeMainText = styled.p`
  color: var(--Font-02_black, #111);

  /* MO/Headline/KR/H5_KR_Rg */
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.625rem; /* 144.444% */
  letter-spacing: -0.02813rem;
  text-align: left;
  margin-left: 1.25rem;
`;

const DescribeSubTextContainer = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  dispaly: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const DescribeSubText = styled.p`
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
  margin-right: 1.25rem;
`;

const ButtonComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin-top: 3.75rem;
  margin-bottom: 2rem;
`;

const ButtonComponent = styled.button`
  display: flex;
  gap: 0.25rem;
  width: 20rem;
  padding: 0.875rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.75rem;
  color: var(--Font-01_White, #fff);
  text-align: center;
  border: none;

  /* Button/BUT1_Sb */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem; /* 150% */
  letter-spacing: -0.025rem;
  background: ${(props) => {
    if (props.participate) {
      return '#A30FFA';
    } else if (props.shareButton) {
      return 'var(--System-Green-500, #4AA63C)';
    } else {
      return 'gray';
    }
  }};
`;

export default function Devlopers() {
  const personProfile = [
    { image: PmProfileImg, name: '김지은' },
    { image: designerProfileImg, name: '권기남' },
    { image: backProfileK, name: '강민서' },
    { image: backProfileL, name: '이주연' },
    { image: frontProfileL, name: '이나경' },
    { image: frontProfileP, name: '박제준' },
  ];

  const navigate = useNavigate();

  const handleBackToResult = () => {
    const isCompleted = localStorage.getItem('completed');
    if (isCompleted) {
      navigate('/result');
    } else {
      alert('You must complete all questions first.');
    }
  };

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init('bd82ff516a77ec4bafe71a92dcfd51f6');
      console.log('Kakao initialized:', window.Kakao.isInitialized());
    }
  }, []);

  const kakaoButton = () => {
    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '갱년기 자가진단 테스트',
          description: '지금 나는 갱년기일까?',
          imageUrl: 'logoImg',
          link: {
            mobileWebUrl: 'https://climacterictest.netlify.app',
            webUrl: 'https://climacterictest.netlify.app',
          },
        },
      });
    }
  };

  // const kakaoButton = () => {
  //   Kakao.Share.sendDefault({
  //     objectType: 'feed',
  //     content: {
  //               title: '갱년기 자가진단 테스트',
  //               description: '지금 나는 갱년기일까?',
  //               imageUrl: logoImg,
  //               link: {
  //                 mobileWebUrl: 'https://climacterictest.netlify.app',
  //                 webUrl: 'https://climacterictest.netlify.app',
  //               },
  //             },
  //     // buttons: [
  //     //     {
  //     //       title: '나도 테스트 하러가기',
  //     //       link: {
  //     //         mobileWebUrl: 'https://climacterictest.netlify.app',
  //     //         webUrl: 'https://climacterictest.netlify.app',
  //     //       },
  //     //     },
  //     //   ],
  //   });
  // }

  return (
    <Container>
      <GlobalStyle />
      <Article>
        <PosTitleContainer>
          <TopContainer></TopContainer>
          <IntroduceTitleTextContainer>
            <IntroduceTitleText>
              안녕하세요!
              <br />
              저희는...
            </IntroduceTitleText>
          </IntroduceTitleTextContainer>
          <IntroduceSubTextContainer>
            <IntroduceSubText>
              갱년기 케어 솔루션과 자녀와 소통을 이어줄 수 있는 <br />{' '}
              어플리케이션을 제작하고 있는 팀{' '}
              <span>[네카라쿠배그다음우리]</span> <br />
              입니다!
            </IntroduceSubText>
          </IntroduceSubTextContainer>
          <IntroduceTeamTextContainer>
            <IntroduceTeamText>[네카라쿠배그다음 우리] 팀원</IntroduceTeamText>
          </IntroduceTeamTextContainer>
          <PersonInfoContainer>
            {personProfile.map((item, index) => {
              return (
                <PersonContainer
                  key={index}
                  image={item.image}
                  name={item.name}
                />
              );
            })}
          </PersonInfoContainer>
          <DescribeTextContainer>
            <DescribeMainText>
              현재 서비스 기획을 위해 사용자들의 <br />
              목소리를 듣고 있습니다.
            </DescribeMainText>
          </DescribeTextContainer>
          <DescribeSubTextContainer>
            <DescribeSubText>
              약 3분정도 시간내셔서 아래의 설문조사에 참여해주신다면, <br />
              신규 서비스에 큰 도움이 됩니다.
            </DescribeSubText>
            <DescribeSubText>
              설문조사 중 개인정보를 받는 항목은 존재하지 않으며,
              <br />
              설문 조사 내용은 신규 서비스 기획 후 안전하게 폐기될 예정입니다.
            </DescribeSubText>
          </DescribeSubTextContainer>
          <ButtonComponentContainer>
            <ButtonComponent participate>
              <img src={pencilImg} alt="pencilImg" />
              설문조사 참여하기
            </ButtonComponent>
            <ButtonComponent shareButton onClick={kakaoButton}>
              <img src={shareImg} alt="pencilImg" />
              테스트 공유하기
            </ButtonComponent>
          </ButtonComponentContainer>
        </PosTitleContainer>
      </Article>
    </Container>
  );
}
