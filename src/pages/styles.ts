import styled from '@emotion/styled';

interface ITitulo {
  colorText: string;
}

export const Titulo = styled.h2<ITitulo>`
  font-family: 'Arial';

  max-width: 20rem; //64px;
  color: ${(props) => props.colorText};
`;

export const Input = styled.input`
  padding: 1rem;
  background-color: pink;
`;

//  "Olá"
//  'Olá'
//  `olá`// emotion/styled
// Ctrl + ;
