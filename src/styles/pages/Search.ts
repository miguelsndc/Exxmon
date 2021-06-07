import styled from 'styled-components'

export const Controllers = styled.div`
  text-align: center;

  hr {
    border: 0;
    height: 1px;
    background: ${(props) => props.theme.primary};
    opacity: 0.75;
    margin-bottom: 1.75rem;
  }
`
export const ResultsFeedback = styled.div`
  margin: 1.75rem 0;

  font-weight: 500;
`
export const ErrorMessage = styled.div`
  color: ${(props) => props.theme.primary};
  font-weight: 500;
  margin-top: 1rem;
`
