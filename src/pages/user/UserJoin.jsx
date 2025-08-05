import React, { useRef, useState } from "react";
import Header from "../../components/Header";
import styled from "@emotion/styled";
import { Button, Form, Input } from "antd";
import Question from "../../images/question.svg";
import CameraAdd from "../../images/camera-pink.svg";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import {
  JoinBox,
  JoinBoxItemInput,
  JoinBoxItemInputPw,
  JoinBoxItemPicture,
  JoinBoxItemPictureAdd,
  JoinBoxItemPictureWrap,
  JoinBoxItemTitel,
  JoinBoxItemWrap,
  JoinBoxSelfBox,
  JoinButton,
  JoinTitle,
  JoinTitleWrap,
  StarText,
} from "./UserJoin.styles";

function UserJoin() {
  // js 자리

  // 첫화면
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
    navigate("/user/guest");
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

  // 이미지 추가
  const [profileImg, setProfileImg] = useState(null);
  const fileInputRef = useRef(null);

  const onCameraClick = () => {
    fileInputRef.current.click();
  };

  const onProfileImgChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImg(reader.result);
      };
      reader.readAsDataURL(file);
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
                  {profileImg ? (
                    <img src={profileImg} alt="프로필" />
                  ) : (
                    <img
                      src={Question}
                      style={{ width: "30px", height: "30px" }}
                      alt="사진없음"
                    />
                  )}
                </JoinBoxItemPicture>
                <JoinBoxItemPictureAdd onClick={onCameraClick}>
                  <img src={CameraAdd} alt="사진등록" />
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    onChange={onProfileImgChange}
                  />
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
              <JoinButton htmlType="submit" disabled={!match}>
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
