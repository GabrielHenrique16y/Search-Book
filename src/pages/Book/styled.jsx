import styled from 'styled-components';
import * as Colors from '../../config/colors';

export const Container = styled.section`
    width: 100%;
    background-color: ${Colors.secondaryColor};
    height: 100%;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 30px;
    overflow: hidden;
`;

export const BookContainer = styled.section`
    width: 100%;
    background-color: #fff;
    height: max-content;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin: 50px 10px 0 10px;
    padding: 20px;

    img{
        margin-top: 20px;
    }

    .infoTexts{
        width: 100%;
        display: flex;
        align-items: start;
        justify-content: start;
        margin-top: 50px;
        flex-direction: column;
    }

    .infoTexts p{
        color: #403e3e;
    }

    .infoTexts .response{
        color: #a3a3a3;
        margin-left: 5px;
    }
`;

export const DescContainer = styled.section`
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 20px;
    margin: 50px 90px 0 10px;

    .descText{
        margin-top: 30px;
    }

    .btnContent{
        width: 100%;
        display: flex;
        justify-content: end;
        gap: 30px;
    }
`;