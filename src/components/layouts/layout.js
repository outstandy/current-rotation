import styled from 'vue-styled-components';
// import 

export const Section = styled.section`
    padding: 2rem;
    height: 100%;
    @media screen and (min-width: 1000px) {
        padding: 4rem 4rem 0 6rem;
    }
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    @media screen and (min-width: 1000px) {
        flex-direction: row;
    }
`;

export const TitleFlex = styled.div`
    width: 100%;
    margin-bottom: 4rem;
    @media screen and (min-width: 1000px) {
        width: 40%;
        margin-bottom: 0;
    }
`;

export const ContentFlex = styled.div`
    width: 100%;
    padding: 0;
    @media screen and (min-width: 1000px) {
        width: 60%;
        padding: 0 0 0 4rem;
    }
`;


