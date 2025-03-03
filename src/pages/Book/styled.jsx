import styled from 'styled-components';
import * as Colors from '../../config/colors';

export const Container = styled.section`
    width: 100%;
    background-color: ${Colors.secondaryColor};
    height: calc()100% + 88px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 30px;
    overflow: hidden;
    padding: 20px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
        overflow: auto;
    }
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
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    img {
        margin-top: 20px;
        max-width: 100%;
        height: auto;
        border-radius: 8px;
    }

    .infoTexts {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 30px;
    }

    .infoTexts p {
        color: #403e3e;
        font-size: 1rem;
    }

    .infoTexts .response {
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
    align-items: flex-start;
    justify-content: start;
    padding: 20px;
    margin: 50px 90px 0 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    .descText {
        margin-top: 30px;
        font-size: 1rem;
    }

    .btnContent {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        gap: 20px;
        margin-top: 20px;

        @media (max-width: 768px) {
            justify-content: center;
            gap: 10px;
        }
    }

    @media (max-width: 768px) {
        margin: 30px 10px 100px 10px;
    }
`;
