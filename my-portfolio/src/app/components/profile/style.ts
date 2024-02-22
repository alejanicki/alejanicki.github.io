import styled from "styled-components";

export const Container = styled.div`
    background: ${props => props.theme.color.containerColor};
    margin: .5% 10.5%;
    padding: 1.8% 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    gap: 20px;
`
export const Picture = styled.img`
    height: 100px;
    width: 100px;
    display: flex;
    background: ${props => props.theme.color.lightGrey};
    border: 1px solid ${props => props.theme.color.primary};
    border-radius: 50%;
`