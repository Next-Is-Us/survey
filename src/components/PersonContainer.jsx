import styled from "styled-components"

const PersonInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`

const PersonImg = styled.img`
  width: 2.875rem;
  height: 2.875rem;
  border-radius: 2.875rem;
`

const PersonNameText = styled.p`
  color: var(--Font-02_black, #111);
  text-align: center;

  /* MO/Body/KR/B4_KR_Rg */
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */
  letter-spacing: -0.01875rem;
`

export default function PersonContainer({image, name}) {
  return (
    <PersonInfoBox>
      <PersonImg src={image} alt="profileImg" />
      <PersonNameText>{name}</PersonNameText>
    </PersonInfoBox>
  )
}