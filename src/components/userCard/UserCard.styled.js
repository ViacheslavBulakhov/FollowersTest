import styled from 'styled-components';
import backgroundImage from 'images/CardBackground.png';

export const CardBox = styled.div`
  position: relative;
  display: flex;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  padding: 36px 28px;
  flex-direction: column;
  justify-content: space-between;
`;
export const LogoWrap = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const BackgroundWrap = styled.div`
  background-image: url(${backgroundImage});
  display: inline-block;
  width: 308px;
  height: 168px;
`;
export const UserPhotoWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
export const DelimiterCardElement = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const UserInformationItem = styled.li`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: rgb(235, 216, 255);
  margin-bottom: 26px;
`;
export const FollowBtn = styled.button`
  padding: 14px 28px;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 3.43693px 3.43693px;
  border-radius: 10.3108px;
  cursor: pointer;
  width: 196px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
`;
