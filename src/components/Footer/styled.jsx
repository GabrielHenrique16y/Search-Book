import styled from 'styled-components';
import * as Colors from '../../config/colors';

export const Footer = styled.footer`
    background-color: ${Colors.primaryDarkColor};
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    z-index: 100;
    width: 100%;

    li{
        list-style: none;
        color: #fff;
    }

    li a{
        color: ${Colors.primaryColor};
        font-size: 22px;
    }
`