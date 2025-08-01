import React, { useState } from "react";
import Header from "../../components/Header";
import styled from "@emotion/styled";
import { Button, Form, Input } from "antd";
import Question from "../../images/question.svg";
import CameraAdd from "../../images/camera-pink.svg";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const JoinTitleWrap = styled.div`
  padding-top: 60px;
  margin-bottom: 76px;
`;
const JoinTitle = styled.p`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 31px;
  color: #ef4444;
`;
const JoinBox = styled.div`
  width: 1200px;
  border: 0.5px solid #c2c2c2;
  border-radius: 4px;
  margin: 0 auto;
  margin-bottom: 50px;
`;
const JoinBoxItemWrap = styled.div`
  padding: 79px 61px;
`;
const JoinBoxItemTitel = styled.p`
  font-size: 25px;
  font-weight: bold;
`;
const JoinBoxItemInput = styled(Input)`
  width: 473px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #b3b3b3;
  font-size: 16px;
`;
const JoinBoxItemInputPw = styled(Input.Password)`
  width: 473px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #b3b3b3;
  font-size: 16px;
`;
const JoinBoxItemPictureWrap = styled.div`
  position: relative;
  left: 40%;
  margin-bottom: 25px;
`;
const JoinBoxItemPicture = styled.div`
  position: relative;
  width: 111px;
  height: 111px;
  background-color: #d9d9d9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 31px;
  }
`;
const JoinBoxItemPictureAdd = styled.div`
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
const JoinButton = styled(Button)`
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

const StarText = styled.p`
  color: #8f8f8f;
  font-size: 16px;
  padding-top: 40px;
`;

const JoinBoxSelfBox = styled(Input.TextArea)`
  border-radius: 10px;
  color: #8f8f8f;
  font-size: 16px;
  resize: none;
  height: 200px;
`;

function UserJoin() {
  // js 자리
  const initialValue = {
    userId: "",
    userPass: "",
    nickName: "",
    email: "",
    address: "",
  };
  const onFiledsChange = (field, allFields) => {
    console.log(field[0].value);
  };
  const onFinish = values => {
    console.log(values);
  };
  const [match, setMatch] = useState(true);
  const [form] = Form.useForm();
  const handleChangePassword = () => {
    const pw = form.getFieldValue("userPass");
    const pwConfirm = form.getFieldValue("passwordConfirm");
    if (pwConfirm) {
      setMatch(pw === pwConfirm);
    }
  };
  // 가입하기 클릭시 userguest 로 이동
  const navigate = useNavigate();
  const handClick = () => {
    navigate("/user/guest");
  };

  // jsx 자리
  return (
    <>
      <Header />
      <JoinTitleWrap>
        <JoinTitle>회원가입</JoinTitle>
      </JoinTitleWrap>
      <JoinBox>
        <Form
          form={form}
          layout="vertical"
          style={{ display: "flex" }}
          initialValues={initialValue}
          onFieldsChange={(field, allFields) =>
            onFiledsChange(field, allFields)
          }
          onFinish={values => onFinish(values)}
        >
          <JoinBoxItemWrap>
            {/* box의 left */}
            <div>
              <JoinBoxItemTitel>이미지등록</JoinBoxItemTitel>
              <JoinBoxItemPictureWrap>
                <JoinBoxItemPicture>
                  <img src={Question} alt="사진없음" />
                </JoinBoxItemPicture>
                <JoinBoxItemPictureAdd>
                  <img src={CameraAdd} alt="사진등록" />
                </JoinBoxItemPictureAdd>
              </JoinBoxItemPictureWrap>
            </div>
            <div>
              <Form.Item
                label={<JoinBoxItemTitel>아이디</JoinBoxItemTitel>}
                name={"userId"}
                required={true}
                rules={[
                  { required: true, message: "아이디는 필수입니다." },
                  { min: 4, message: " 아이디는 4자 이상입니다." },
                  { max: 8, message: "아이디는 최대 8자입니다." },
                ]}
                colon={false}
              >
                <JoinBoxItemInput placeholder="아이디를 입력하세요." />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                label={<JoinBoxItemTitel>비밀번호</JoinBoxItemTitel>}
                name={"userPass"}
                required={true}
                rules={[
                  { required: true, message: "비밀번호는 필수입니다." },
                  {
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                    message:
                      "비밀번호는 최소 8자 이상이며, 대소문자, 숫자를 포함해야 합니다.",
                  },
                ]}
                colon={false}
              >
                <JoinBoxItemInputPw
                  placeholder="비밀번호를 입력하세요."
                  onChange={handleChangePassword}
                />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                name={"passwordConfirm"}
                label={<JoinBoxItemTitel>비밀번호확인</JoinBoxItemTitel>}
                required={true}
                rules={[
                  { required: true, message: "비밀번호 확인은 필수입니다." },
                ]}
                colon={false}
              >
                <JoinBoxItemInputPw
                  placeholder="비밀번호를 확인하시오."
                  onChange={handleChangePassword}
                />
              </Form.Item>
              {!match && (
                <div style={{ color: "red" }}>비밀번호가 다릅니다.</div>
              )}
            </div>

            <StarText> `*` 는 필수 입력항목 입니다.</StarText>
          </JoinBoxItemWrap>
          <JoinBoxItemWrap>
            {/* box의 right */}
            <div>
              <Form.Item
                label={<JoinBoxItemTitel>이메일</JoinBoxItemTitel>}
                name={"email"}
                required={true}
                rules={[
                  { required: true, message: "이메일은 필수요소입니다." },
                  { type: "email", message: "이메일 형식에 맞지 않습니다." },
                ]}
                colon={false}
              >
                <JoinBoxItemInput placeholder="이메일을 입력하세요." />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                label={<JoinBoxItemTitel>주소</JoinBoxItemTitel>}
                name={"address"}
                required={false}
              >
                <JoinBoxItemInput placeholder="주소를 입력해주세요." />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                label={<JoinBoxItemTitel>소개글</JoinBoxItemTitel>}
                name="introduction"
                required={false}
                colon={false}
              >
                <JoinBoxSelfBox
                  placeholder="자기소개를 입력해주세요."
                  rows={6}
                />
              </Form.Item>
            </div>
            <Form.Item>
              <JoinButton
                htmlType="submit"
                disabled={!match}
                onClick={handClick}
              >
                가입하기
              </JoinButton>
            </Form.Item>
          </JoinBoxItemWrap>
        </Form>
      </JoinBox>
      <Footer />
    </>
  );
}

export default UserJoin;
