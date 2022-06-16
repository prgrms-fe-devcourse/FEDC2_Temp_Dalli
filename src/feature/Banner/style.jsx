import styled from '@emotion/styled';

export const BannerContainer = styled.div`
  position: fixed;
  z-index: 2000;
  left: 0%;
  right: 0%;
  top: 0;
  height: 116px;
  padding-top: 58px;
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => props.theme.colors.skyblue[0]};
  border-radius: 0px 0px 30px 30px;

  &.hide {
    animation: down 0.4s ease-out;
    @keyframes down {
      0% {
        transform: translateY(0px);
      }
      100% {
        transform: translateY(-100px);
      }
    }
  }

  &.show {
    animation: up 0.4s ease-out;
    @keyframes up {
      0% {
        transform: translateY(-100px);
      }
      100% {
        transform: translateY(0px);
      }
    }
  }
`;
