import styled from "styled-components";
import DatePicker from "react-datepicker";

export const Title = styled.div`
  font-family: "Noto Sans Display", sans-serif;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  margin: 30px 0;
`;

export const HorizontalLine = styled.div`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
  margin-bottom: 50px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const CustomDatePicker = styled(DatePicker)`
  width: 300px;
  height: 50px;
  font-size: 1rem;
  text-align: center;
  border: 3px solid black;

  &:hover {
    cursor: pointer;
  }
`;

export const LocationSearch = styled.button`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border: 3px solid black;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: transparent;
  }
`;

export const Location = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border: 3px solid black;
  background-color: transparent;
`;

export const ResetLocation = styled.span`
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.9rem;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`;

export const SaveLocationBtn = styled.button`
  width: 400px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border: 3px solid black;
  border-radius: 10px;
  background-color: transparent;
  margin-top: 10px;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: transparent;
  }
`;

export const Select = styled.select`
  width: 300px;
  height: 50px;
  font-size: 1rem;
  text-align: center;
  border: 3px solid black;

  &:hover {
    cursor: pointer;
  }
`;

export const Option = styled.option``;

export const KakaoMapLink = styled.a`
  color: black;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  margin-top: 10px;
`;

export const KakaoMapNotice = styled.div`
  margin-top: 5px;
`;

export const CustomLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const SearchInput = styled.input`
  width: 200px;
  height: 50px;
  border: 3px solid black;
  padding-left: 10px;
  font-size: 1rem;
`;

export const SearchBtn = styled.button`
  width: 95px;
  height: 50px;
  border: 3px solid black;
  background-color: transparent;
  margin-left: 5px;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: transparent;
  }
`;

export const MapNotice = styled.div`
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 700;
`;

export const Input = styled.input`
  width: 300px;
  height: 50px;
  font-size: 1rem;
  text-align: center;
  border: 3px solid black;
`;

export const TextArea = styled.textarea`
  width: 300px;
  font-size: 1rem;
  border: 3px solid black;
  padding: 10px;
`;

export const RegisterBtn = styled.button`
  width: 300px;
  height: 50px;
  font-size: 1.5rem;
  font-weight: 700;
  border: 3px solid black;
  border-radius: 5px;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  &:active {
    opacity: 1;
  }
`;
