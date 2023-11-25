import React from "react";
import {
  ArrowForwardBtn,
  Container,
  SettingLink,
  SettingLinkGroup,
  Title,
} from "./styled";

const Setting = () => {
  return (
    <Container>
      <Title>설정</Title>
      <SettingLinkGroup>
        <SettingLink>나의 정보 수정</SettingLink>
        <ArrowForwardBtn className='material-symbols-outlined'>
          arrow_forward
        </ArrowForwardBtn>
      </SettingLinkGroup>
      <SettingLinkGroup>
        <SettingLink>회원 탈퇴</SettingLink>
        <ArrowForwardBtn className='material-symbols-outlined'>
          arrow_forward
        </ArrowForwardBtn>
      </SettingLinkGroup>
    </Container>
  );
};

export default Setting;
