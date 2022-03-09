import styled from "@emotion/styled";

export const List = styled.ul`
  list-style: none;
  width: 600px;
  max-height: 310px;
  overflow-y: auto;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  p {
    font-weight: 700;
    font-size: 20px;
    color: #696969;
  }

  button {
    background-image: -webkit-linear-gradient(top, #f4f1ee, #fff);
    background-image: linear-gradient(top, #f4f1ee, #fff);
    border-radius: 50%;
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.3), inset 0px 4px 1px 1px white,
      inset 0px -3px 1px 1px rgba(204, 198, 197, 0.5);
    height: 50px;
    margin: 0 30px 0 0;
    position: relative;
    width: 50px;
    -webkit-transition: all 0.1s linear;
    transition: all 0.1s linear;
    cursor: pointer;

    &:hover:after {
      color: #eb2f2f;
      text-shadow: 0px 0px 6px #eb2f2f;
    }

    &:after {
      color: #e9e6e4;
      content: "✖";
      left: 11px;
      top: 3px;
      display: block;
      font-size: 30px;
      height: 20px;
      text-decoration: none;
      text-shadow: 0px -1px 1px #bdb5b4, 1px 1px 1px white;
      position: absolute;
      width: 20px;
    }
  }
`;
