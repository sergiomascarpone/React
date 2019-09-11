import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content:center;
flex: 1;
background-color: greenyellow;
margin-right: auto;
`;

export const Title = styled.span`
font-size: 24px;
font-weight: 600;
`;

export const Label = styled.span`
font-size: 12px;
font-weight: 400;
display: block;
${({ error }) => error ? 'color: red' : ''}
`;

export const Input = styled.span`
font-size: 14px;
font-weight: 400;
`;