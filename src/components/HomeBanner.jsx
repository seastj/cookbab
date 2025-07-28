import React from "react";
import backimg from "../images/mainimg.jpg";
import commentimg from "../images/topimgp.png";
import styled from "@emotion/styled";

const BannerWrap = styled.div`
  position: relative;
  border-color: #5e4035;
  z-index: 10;
  & p {
    position: absolute;
    z-index: 100;
    top: 54%;
    left: 50%;
    transform: translate(-50%, 50%);
    color: #c2c2c2;
    font-size: 14px;
    white-space: nowrap; /* 줄바꿈 없이 한 줄로 */
    overflow: visible; /* 넘쳐도 숨기지 않음 */
    text-overflow: unset; /* 말줄임(...) 하지 않음 */
  }
`;
const BannerImgWrap = styled.div`
  position: relative;
  display: block;
  height: 600px;
  width: 100%;
  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(69, 34, 21, 0.84);
  }
`;
const BannerImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const BannerCommentWrap = styled.div`
  position: absolute;
  width: 420px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const BannerMainComment = styled.img`
  width: 100%;
  object-fit: cover;
`;

function HomeBanner() {
  return (
    <BannerWrap>
      <p>당신의 부엌에서 시작된 작지만 소중한 변화, 쿡밥이 함께 기억합니다.</p>
      <BannerImgWrap>
        <BannerImg src={backimg} alt="backimg" />
      </BannerImgWrap>
      <BannerCommentWrap>
        <BannerMainComment src={commentimg} alt="comment" />
      </BannerCommentWrap>
    </BannerWrap>
  );
}

export default HomeBanner;
