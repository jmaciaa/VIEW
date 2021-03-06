import styled from 'styled-components/macro';

export const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  @media screen and (min-device-width: 780px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    margin: auto;
  }

  @media screen and (min-device-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    margin: auto;
  }
`;

export const TopLeftIcon = styled.div`
  position: absolute;
  left: -5px;
  top: -5px;
  z-index: 1;

  @media screen and (min-device-width: 780px) {
    position: static;
  }
`;

export const MovieDetailsContainer = styled.div`
  @media screen and (min-device-width: 780px) {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 70vh;
  }
`;

export const ActionButtonsPosition = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  bottom: 0px;
  background: white;
  box-shadow: -1px -1px 10px -1px rgba(0, 0, 0, 0.22);
  width: 100%;

  @media screen and (min-device-width: 780px) {
    display: flex;
    max-height: 48px;
    width: 250px;
    background: transparent;
    box-shadow: none;
    right: 14%;
    top: 12%;
    z-index: 1;
  }
`;
