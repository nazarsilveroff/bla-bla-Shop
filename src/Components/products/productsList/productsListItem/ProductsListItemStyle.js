import styled from 'styled-components'

export const ProductsListItemConteiner = styled.li`

padding: 20px;
width: 25%;

.card{
    border: 1px solid red;
    border-radius: 14px;
    padding: 20px;
}

.colorList{
    display: flex;
    list-style:none;
}

`

export const ColorsListItemContainer = styled.li`
width: 30px;
height: 30px;
border: 1px solid black;
border-radius:14px;
background-color: ${props => props.color}


`