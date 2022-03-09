import styled from "@emotion/styled";

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 660px;
  height: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  background-size: cover;
  background-position: center;
  background-color: #ffdab9;
  margin-top: 20px;
  h1 {
    text-transform: uppercase;
  }
  h2 {
    margin-bottom: 10px;
    text-align: center;
  }
`;
