import styled from 'styled-components'

interface WrapperProps {
  backdropPath?: string
}

export const Wrapper = styled.div<WrapperProps>`
  background-image: ${(props) => `url(${props.backdropPath})`};
  background-size: cover;
  background-position-x: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  position: relative;
  padding: 1rem;
  margin: 1rem;
  min-width: 13rem;
  height: 16rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
  &:hover {
    & div:first-child {
      opacity: 0.15;
    }
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 20px;
  background: ${(props) => props.theme.background};
  opacity: 0.45;
  transition: opacity 0.2s;
`

export const Details = styled.div`
  text-align: center;
  z-index: 9;
  span {
    font-weight: 500;
    font-size: 1.2rem;
  }
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.25rem;
  h5 {
    font-weight: 500;
    font-size: 1rem;
    margin-right: 7px;
  }
`
