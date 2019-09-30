import styled from 'styled-components';
// import { width, height } from 'window-size';

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

export const Modal = styled.span`
position: absolute;
top: 10%;
left: 35%;
width: 300px;
height: 250px;
background-color: green;
border: 2px solid black;
box-shadow: 1px 1px 1px 1px ReadableStream;
visibility: ${ ModalWindow => ModalWindow};
`;

export const ModalWindow = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-color: grey;
opacity: 0,7;
visibility: ${ ModalWindow => ModalWindow};
`;
