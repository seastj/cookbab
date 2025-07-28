import styled from "@emotion/styled";
import React from "react";
const FooterWrap = styled.div``;
const FooterMain = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 80px;
  gap: 80px;
  border-top: 1px solid #c2c2c2;
  color: #757575;
  font-size: 13px;
`;
const FooterTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #757575;
`;
const FooterInfo = styled.div`
  display: block;
`;
const FooterFirstLine = styled.div`
  display: flex;
  margin-bottom: 4px;
  p:not(:last-child)::after {
    content: "·";
    margin-left: 2px;
  }
`;
const FirstLineConditions = styled.p`
  cursor: pointer;
`;
const FirstLinePersonalInformation = styled.p`
  cursor: pointer;
`;
const FirstLineOperational = styled.p`
  cursor: pointer;
`;
const FirstLineCustomerService = styled.p`
  cursor: pointer;
`;

const FooterSecondLine = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  gap: 38px;
`;
const FooterThirdLine = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  gap: 15px;
`;
const ThirdlineCall = styled.div`
  cursor: pointer;
`;
const ThirdlineFax = styled.div`
  cursor: pointer;
`;
const ThirdlineDjEmail = styled.div`
  cursor: pointer;
`;
const ThirdlineChEmail = styled.div`
  cursor: pointer;
`;
const FooterFourthLine = styled.div`
  align-items: center;
  display: flex;
`;

function Footer() {
  return (
    <FooterWrap>
      <FooterMain>
        <FooterTitle>쿡밥</FooterTitle>
        <FooterInfo>
          <FooterFirstLine>
            <FirstLineConditions>이용약관</FirstLineConditions>
            <FirstLinePersonalInformation>
              <strong>개인정보처리방침</strong>
            </FirstLinePersonalInformation>
            <FirstLineOperational>운영정책</FirstLineOperational>
            <FirstLineCustomerService>고객센터</FirstLineCustomerService>
          </FooterFirstLine>
          <FooterSecondLine>
            <p>대표자: 신동재 · 여채현</p>
            <p>주소: 서울특별시 어쩌구 어쩌로 4205길 15-1 2F</p>
          </FooterSecondLine>
          <FooterThirdLine>
            <ThirdlineCall>대표전화: 000-000-0000</ThirdlineCall>
            <ThirdlineFax>팩스: 000-000-0000</ThirdlineFax>
            <ThirdlineDjEmail>이메일: dev.seastj@gmail.com</ThirdlineDjEmail>
            <ThirdlineChEmail>dev.yachea@gmail.com</ThirdlineChEmail>
          </FooterThirdLine>
          <FooterFourthLine>
            <p>© 아주 RICE All Rights Reserved.</p>
          </FooterFourthLine>
        </FooterInfo>
      </FooterMain>
    </FooterWrap>
  );
}

export default Footer;
