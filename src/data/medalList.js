import styled from "@emotion/styled";
import { FaMedal, FaStar, FaTrophy, FaCrown } from "react-icons/fa";

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${props => props.bgColor || "#f37373"};
  color: white;
  font-size: 32px;
`;

export const medalIconMap = {
  login_3: props => (
    <IconWrapper bgColor="#f7a2a2">
      <FaStar {...props} />
    </IconWrapper>
  ),
  login_7: props => (
    <IconWrapper bgColor="#f37373">
      <FaTrophy {...props} />
    </IconWrapper>
  ),
  login_30: props => (
    <IconWrapper bgColor="#ef4444">
      <FaCrown {...props} />
    </IconWrapper>
  ),

  // 누적 게시물 수
  post_1: props => (
    <IconWrapper bgColor="#fcd34d">
      <FaMedal {...props} />
    </IconWrapper>
  ),
  post_5: props => (
    <IconWrapper bgColor="#fbbf24">
      <FaMedal {...props} />
    </IconWrapper>
  ),
  post_10: props => (
    <IconWrapper bgColor="#f59e0b">
      <FaMedal {...props} />
    </IconWrapper>
  ),
  post_50: props => (
    <IconWrapper bgColor="#d97706">
      <FaTrophy {...props} />
    </IconWrapper>
  ),
  post_100: props => (
    <IconWrapper bgColor="#b45309">
      <FaTrophy {...props} />
    </IconWrapper>
  ),

  // 가입 경과일
  join_1y: props => (
    <IconWrapper bgColor="#60a5fa">
      <FaCrown {...props} />
    </IconWrapper>
  ),
  join_2y: props => (
    <IconWrapper bgColor="#3b82f6">
      <FaCrown {...props} />
    </IconWrapper>
  ),
  join_3y: props => (
    <IconWrapper bgColor="#1d4ed8">
      <FaCrown {...props} />
    </IconWrapper>
  ),

  // 글 등록 연속일수
  postStreak_7: props => (
    <IconWrapper bgColor="#a78bfa">
      <FaStar {...props} />
    </IconWrapper>
  ),
  postStreak_30: props => (
    <IconWrapper bgColor="#8b5cf6">
      <FaStar {...props} />
    </IconWrapper>
  ),
};

export const medalList = [
  // 로그인 연속일수
  { id: "login_3", name: "3일 개근상", type: "loginStreak", value: 3 },
  { id: "login_7", name: "7일 개근상", type: "loginStreak", value: 7 },
  { id: "login_30", name: "30일 개근상", type: "loginStreak", value: 30 },
  { id: "login_100", name: "100일 개근상", type: "loginStreak", value: 100 },
  { id: "login_500", name: "500일 개근상", type: "loginStreak", value: 500 },
  { id: "login_1000", name: "1000일 개근상", type: "loginStreak", value: 1000 },

  // 누적 게시물 수
  { id: "post_1", name: "첫 게시물", type: "postCount", value: 1 },
  { id: "post_5", name: "5개 작성", type: "postCount", value: 5 },
  { id: "post_10", name: "10개 작성", type: "postCount", value: 10 },
  { id: "post_50", name: "50개 작성", type: "postCount", value: 50 },
  { id: "post_100", name: "100개 작성", type: "postCount", value: 100 },
  { id: "post_500", name: "500개 작성", type: "postCount", value: 500 },

  // 가입 경과일
  { id: "join_1y", name: "가입 1주년", type: "joinDays", value: 365 },
  { id: "join_2y", name: "가입 2주년", type: "joinDays", value: 730 },
  { id: "join_3y", name: "가입 3주년", type: "joinDays", value: 1095 },

  // 글 등록 연속일수
  { id: "postStreak_7", name: "7일 연속 작성", type: "postStreak", value: 7 },
  {
    id: "postStreak_30",
    name: "30일 연속 작성",
    type: "postStreak",
    value: 30,
  },
];
