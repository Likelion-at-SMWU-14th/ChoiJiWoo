import styled, { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Card = styled.article`
  background-color: #ffffff;
  border: 1px solid #dce5d6;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(47, 74, 51, 0.08);
`;

export const CardCategory = styled.p`
  margin: 0 0 8px;
  color: #6b8f71;
  font-size: 14px;
  font-weight: 600;
`;

export const CardTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  margin: 0 0 20px;

  color: #000000;
  font-size: 18px;
  font-weight: 700;
`;

export const CardMark = styled.span`
  flex-shrink: 0;

  padding: 5px 10px;
  border-radius: 999px;

  background-color: #e8f0e4;
  color: #000000;

  font-size: 12px;
  font-weight: 600;
`;

export const CardInfo = styled.div`
  display: flex;
  gap: 16px;

  margin-bottom: 20px;
`;

export const CardText = styled.p`
  margin: 0;

  color: #626a62;
  font-size: 14px;
  line-height: 1.6;
`;

export const CardLabel = styled.p`
  margin: 0 0 6px;

  color: #000000;
  font-size: 13px;
  font-weight: 700;
`;

export const CardPrice = styled.p`
  margin: 0 0 12px;

  color: #000000;
  font-size: 18px;
  font-weight: 700;
`;

export const FormPanel = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 24px;
  background-color: #ffffff;
  border: 1px solid #dce5d6;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(47, 74, 51, 0.08);
`;

export const FormTitle = styled.h2`
  margin: 0 0 12px;
  color: #000000;
  font-size: 20px;
  font-weight: 700;
`;

export const FormLabel = styled.label`
  margin-top: 10px;
  color: #52735a;
  font-size: 13px;
  font-weight: 700;
`;

const fieldStyle = css`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #dce5d6;
  border-radius: 8px;
  background: #ffffff;
  color: #294332;
  font-size: 14px;
  font-family: inherit;
  outline: none;

  &:focus {
    border-color: #6b8f71;
    box-shadow: 0 0 0 2px rgba(107, 143, 113, 0.2);
  }
`;

export const FieldSelect = styled.select`
  ${fieldStyle}
`;

export const FieldInput = styled.input`
  ${fieldStyle}
`;

export const FieldTextarea = styled.textarea`
  ${fieldStyle}
  resize: vertical;
`;

export const PrimaryButton = styled.button`
  margin-top: 16px;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #96c49d;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
`;

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body {
    margin: 0;
    background: #ffffff;
    color: #000000;
  }
`;

export const Page = styled.main`
  width: min(960px, calc(100% - 32px));
  margin: 40px auto;
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(260px, 1fr);
  gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const ListPanel = styled.section`
  min-width: 0;
`;

export const SectionHeading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  color: #000000;
  font-size: 20px;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const EmptyMessage = styled.p`
  grid-column: 1 / -1;
  margin: 0;
  padding: 36px 16px;
  border: 1px dashed #dce5d6;
  border-radius: 12px;
  color: #626a62;
  font-size: 13px;
  text-align: center;
`;
