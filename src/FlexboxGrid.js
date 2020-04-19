import styled from 'styled-components';

const FlexboxGrid = styled.div `
    display: flex;
`;

const Column = styled.div `
    margin-bottom: 1rem;
    margin-right: 1rem;
    padding: 1rem;

    &:last-child {
        margin-right: 0;
    }
`;

const ColumnOne = styled.div `
    flex: 1;
    width: 100%;
`;

const ColumnTwo = styled.div `
    flex: 2;
    width: 50%;
`;

const ColumnThree = styled.div `
    flex: 3;
    width: 33.333333333%;
`;

const ColumnFour = styled.div `
    flex: 4;
    width: 25%;
`;

const ColumnFive = styled.div `
    flex: 5;
    width: 20%;
`;

const ColumnSix = styled.div `
    flex: 6;
    width: 16.666666667%;
`;

const ColumnSeven = styled.div `
    flex: 7;
    width: 14.28571%;
`;

const ColumnEight = styled.div `
    flex: 8;
    width: 12.5%;
`;

const ColumnNine = styled.div `
    flex: 9;
    width: 11.11111%;
`;

const ColumnTen = styled.div `
    flex: 10;
    width: 10%;
`;

const ColumnEleven = styled.div `
    flex: 11;
    width: 9.09091%;
`;

const ColumnTwelve = styled.div `
    flex: 12;
    width: 8.33333%;
`;

const ColumnOneOfTwelve = styled.div `
    flex: 1;
    width: 8.33333%;
`;

const ColumnElevenOfTwelve = styled.div `
    flex: 11;
    width: 9.66666%;
`;

const ColumnTwoOfTwelve = styled.div `
    flex: 2;
    width: 16.666667%;
`;

const ColumnTenOfTwelve = styled.div `
    flex: 10;
    width: 83.333333%;
`;

const ColumnThreeOfTwelve = styled.div `
    flex: 3;
    width: 24.99999%;
`;

const ColumnFourOfTwelve = styled.div `
    flex: 4;
    width: 33.33333%;
`;

const ColumnNineOfTwelve = styled.div `
    flex: 7;
    width: 74.99999%;
`;

const ColumnEightOfTwelve = styled.div `
    flex: 8;
    width: 66.66664%;
`;

const ColumnFiveOfTwelve = styled.div `
    flex: 5;
    width: 41.66664%;
`;

const ColumnSevenOfTwelve = styled.div `
    flex: 7;
    width: 58.33331%;
`;

export default { FlexboxGrid, 
                 Column,
                 ColumnOne,
                 ColumnTwo,
                 ColumnThree,
                 ColumnFour,
                 ColumnFive,
                 ColumnSix,
                 ColumnSeven,
                 ColumnEight,
                 ColumnNine,
                 ColumnTen,
                 ColumnEleven,
                 ColumnTwelve,
                 ColumnOneOfTwelve,
                 ColumnTwoOfTwelve,
                 ColumnThreeOfTwelve,
                 ColumnFourOfTwelve,
                 ColumnFiveOfTwelve,
                 ColumnSevenOfTwelve,
                 ColumnEightOfTwelve,
                 ColumnNineOfTwelve,
                 ColumnTenOfTwelve,
                 ColumnElevenOfTwelve }