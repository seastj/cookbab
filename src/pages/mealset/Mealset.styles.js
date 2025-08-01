import styled from "@emotion/styled";

export const SetBoxWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
export const SetBoxBackArrow = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 4px 12px 4px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
  cursor: pointer;
  img {
    width: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: rotate(180deg) translate(50%, 50%);
  }
`;
export const SetBox = styled.div`
  width: 1240px;
  height: 1018px;
  background-color: #fff;
  box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  margin-bottom: 82px;
`;
export const SetBoxDetailWrap = styled.div`
  position: relative;
  height: 100%;
  width: 600px;
  padding: 48px 92px;
`;
export const SetBoxFoodPictureWrap = styled.div`
  margin-bottom: 60px;
`;
export const SetBOxMainTitle = styled.p`
  font-weight: bold;
  font-size: 25px;
  color: #8e0c0c;
  margin-bottom: 30px;
`;
export const SetBoxPictureBox = styled.div`
  position: relative;
  background-color: #d9d9d9;
  width: 473px;
  height: 242px;
  border-radius: 20px;
  cursor: pointer;
`;
export const SetBoxPictureBoxTitleWrap = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  width: 100%;
  text-align: center;
  img {
    width: 41px;
  }
  p {
    font-size: 20px;
    color: #5c5c5c;
  }
`;
export const SetBoxSubTitle = styled.p`
  position: relative;
  font-size: 20px;
  color: #0f0f0f;
  margin-bottom: 19px;
`;
export const SetBoxCookNameInput = styled.input`
  width: 473px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #b3b3b3;
  padding-left: 20px;
  font-size: 16px;
`;
export const SetBoxTextWrap = styled.div`
  margin-bottom: 30px;
`;
export const SetBoxSelect = styled.select`
  width: 473px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #b3b3b3;
  padding: 0px 20px;
  font-size: 16px;
`;

export const SetBoxLevelButtonWrap = styled.div``;
export const SetBoxLevelButtonUl = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
export const SetBoxLevelButtonLi = styled.li`
  background-color: #fff;
  width: 145px;
  height: 50px;
  border: 1px solid #a8a8a8;
  color: #a8a8a8;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  font-size: 20px;
  font-weight: bold;
  flex-shrink: 0;
  cursor: pointer;
  &:hover {
    background-color: #f37373;
    color: #fff;
    border: none;
  }
`;
export const SetBoxTagWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 30px;
`;
export const SetBoxTagSpan = styled.span`
  border: 1px solid #8f8f8f;
  padding: 10px 8px;
`;

export const SetBoxCookStepsNumber = styled.div`
  background-color: #f37373;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #fff;
  font-size: 16px;
  margin-bottom: 20px;
`;
export const SetBoxCookStepsTextarea = styled.textarea`
  width: 473px;
  padding: 20px;
  resize: none;
  border-radius: 10px;
  margin-bottom: 24px;
`;
export const SetBoxPlusBox = styled.div`
  position: absolute;
  left: 50%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 4px 12px 4px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    width: 25px;
  }
`;

export const SetBoxRegistration = styled.div`
  position: absolute;
  bottom: 78px;
  left: 50%;
  transform: translateX(-50%);
`;
export const SetBoxRegistrationText = styled.button`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  padding: 15px 100px;
  background-color: #ef4444;
  border-radius: 12px;
  cursor: pointer;
  border: none;
`;
