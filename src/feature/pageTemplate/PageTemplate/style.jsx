import styled from '@emotion/styled';
import pageTemplateBackgroundImage from '../../../assets/images/background.png';

export const PageTemplate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100%;
  padding: 0 16px;

  background-image: url(${pageTemplateBackgroundImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
`;

export const ContentSection = styled.div`
  width: 100%;
  height: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  margin-top: 74px;

  /* 이것 때문에 카드 밖으로 내용이 뛰쳐 나가서 임시로 주석 처리하였습니다. /*
  /* line-height: 2rem; */
`;