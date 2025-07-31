import React, { useState } from "react";
import Header from "../../components/Header";
import styled from "@emotion/styled";
import { Button, Form, Input } from "antd";
import Question from "../../images/question.svg";
import CameraAdd from "../../images/camera-pink.svg";
import Footer from "../../components/Footer";

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
  height: 710px;
  border: 0.5px solid #c2c2c2;
  border-radius: 4px;
  margin: 0 auto;
  display: flex;
`;
const JoinBoxItemWrap = styled.div`
  width: 50%;
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

const StarText = styled.p`
  color: #8f8f8f;
  font-size: 16px;
  padding-top: 40px;
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
  // 1. 비밀번호 같은지 다른지 상태저장
  const [match, setMetch] = useState(true);
  // 2. Ant Design 에서 Form 요소를 저장해 두고 참조하기
  const [form] = Form.useForm();
  // 3. 비밀번호가 바뀔 때 마다 체크함.
  const handleChangePassword = () => {
    // name 이 password 인 필드의 값, 즉 value 읽기
    const pw = form.getFieldValue("password");
    // name 이 passwordConfirm 인 필드의 값, 즉 value 읽기
    const pwConfirm = form.getFieldValue("passwordConfirm");
    if (pwConfirm) {
      setMetch(pw === pwConfirm);
    }
  };

  // jsx 자리
  return (
    <>
      <Header />
      <JoinTitleWrap>
        <JoinTitle>회원가입</JoinTitle>
      </JoinTitleWrap>
      <JoinBox>
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
          <Form
            layout="vertical"
            initialValues={initialValue}
            onFieldsChange={(field, allFields) =>
              onFiledsChange(field, allFields)
            }
            onFinish={values => onFinish(values)}
          >
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
                <JoinBoxItemInputPw placeholder="비밀번호를 입력하세요." />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                name={"passwordConfirm"}
                label={<JoinBoxItemTitel>비밀번호확인</JoinBoxItemTitel>}
                required={true}
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
          </Form>
          <StarText> `*` 는 필수 입력항목 입니다.</StarText>
        </JoinBoxItemWrap>
        <JoinBoxItemWrap>
          {/* box의 right */}
          <Form
            layout="vertical"
            initialValues={initialValue}
            onFieldsChange={(field, allFields) =>
              onFiledsChange(field, allFields)
            }
            onFinish={values => onFinish(values)}
          >
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
            <dv>
              <Form.Item
                label={<JoinBoxItemTitel>주소</JoinBoxItemTitel>}
                name={"address"}
                required={false}
                rules={[{ required: true, message: "주소를 입력해주세요." }]}
              >
                <JoinBoxItemInput placeholder="주소를 입력해주세요." />
              </Form.Item>
            </dv>
            <div>
              <Form.Item
                label={<JoinBoxItemTitel>소개글</JoinBoxItemTitel>}
                name="introduction"
                required={false}
                rules={[{ required: true, message: "소개글을 입력해주세요." }]}
                colon={false}
              >
                {/* <CustomTextArea placeholder="자기소개를 입력해주세요." /> */}
              </Form.Item>
            </div>
            <Form.Item>
              <Button htmlType="submit">가입하기</Button>
            </Form.Item>
          </Form>
        </JoinBoxItemWrap>
      </JoinBox>
      <Footer />
    </>
  );
}

export default UserJoin;
