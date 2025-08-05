import styled from "@emotion/styled";
import { Button, Input } from "antd";

export const JoinTitleWrap = styled.div`
  padding-top: 60px;
  margin-bottom: 76px;
`;
export const JoinTitle = styled.p`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 31px;
  color: #ef4444;
`;
export const JoinBox = styled.div`
  width: 1200px;
  border: 0.5px solid #c2c2c2;
  border-radius: 4px;
  margin: 0 auto;
  margin-bottom: 50px;
`;
export const JoinBoxItemWrap = styled.div`
  padding: 79px 61px;
`;
export const JoinBoxItemTitel = styled.p`
  font-size: 25px;
  font-weight: bold;
`;
export const JoinBoxItemInput = styled(Input)`
  width: 473px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #b3b3b3;
  font-size: 16px;
`;
export const JoinBoxItemInputPw = styled(Input.Password)`
  width: 473px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #b3b3b3;
  font-size: 16px;
`;
export const JoinBoxItemPictureWrap = styled.div`
  position: relative;
  left: 40%;
  margin-bottom: 25px;
`;
export const JoinBoxItemPicture = styled.div`
  position: relative;
  width: 111px;
  height: 111px;
  background-color: #d9d9d9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const JoinBoxItemPictureAdd = styled.div`
  position: absolute;
  bottom: -5px;
  left: 85px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 4px 12px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    width: 25px;
    height: 25px;
  }
`;
export const JoinButton = styled(Button)`
  width: 140px;
  height: 50px;
  background-color: #ef4444;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  right: 0;
  border: none;
  border-radius: 12px;
  &:hover {
    border: 1px solid #ef4444 !important;
    color: #ef4444 !important;
  }
`;

export const StarText = styled.p`
  color: #8f8f8f;
  font-size: 16px;
  padding-top: 40px;
`;

export const JoinBoxSelfBox = styled(Input.TextArea)`
  border-radius: 10px;
  color: #8f8f8f;
  font-size: 16px;
  resize: none;
  height: 200px;
`;
