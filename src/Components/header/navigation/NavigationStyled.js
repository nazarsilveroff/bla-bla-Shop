import styled from 'styled-components'

export const NavigationContainer = styled.nav`
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

  .activeLink{
      color: green;
  }
`