import styled from 'styled-components';
import * as Colors from '../../config/colors';

export const InputControll = styled.div`
    width: 100%;
    margin-top: calc(5% + 53px);
    background-color: ${Colors.secondaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    input{
        width: 20%;
        height: 30px;
        outline: 0;
        border: 0;
        border-radius: 5px;
    }

    input:hover{
        border: 1px solid #363636;
    }
`;

export const BookSection = styled.section`
    width: 100%;
    background-color: ${Colors.secondaryColor};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    margin: 5% ;
    padding-bottom: 10%;

    .bookCard{
        background-color: #fff;
        padding: 10px;
        display: flex;
        align-items: start;
        justify-content: start;
    }

    .bookCard img{
        margin-top: 2px;
    }

    .bookCard .bookInfo{
        margin-left: 5px;
    }

    .bookCard .bookInfo .result{
        color: #a3a3a3;
    }

    .bookCard .bookInfo .more-btn{
        cursor: pointer;
        background: ${Colors.primaryColor};
        border: none;
        color: #fff;
        padding: 7px;
        border-radius: 4px;
        font-weight: 400;
        margin-top: 20px;
    }
`;
