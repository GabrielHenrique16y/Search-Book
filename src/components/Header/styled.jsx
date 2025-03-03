import styled from 'styled-components';
import * as Colors from '../../config/colors';

export const Nav = styled.nav`
    position: fixed;
    background-color: #fff;
    padding: 10px;
    width: 100%;

    li{
        list-style: none;
    }

    li a{
        color: ${Colors.primaryColor};
        font-size: 22px;
    }
`