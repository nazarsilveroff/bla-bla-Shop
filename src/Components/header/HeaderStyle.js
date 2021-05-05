import styled from "styled-components";

export const HeaderConteiner = styled.header`
  height: 60px;
  background-color: lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  .list {
    list-style: none;
    display: flex;
    align-items: center;
    margin-right: -15px;
  }

  .listItem {
    margin-right: 15px;
  }

  .link {
    text-decoration: none;
    text-transform: uppercase;
    color: slateblue;
  }
`;
