import styled from '@emotion/styled'

export const Textarea = styled.textarea`
  font-size: 34px;
  font-weight: 400;
  outline: none;
  padding: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: ${(props) =>
    props.isEdit === true ? '#f8f9fa' : 'transparent'};
  width: 100%;
  height: 48px;
  border: none;
  resize: none;
`

export const TextareaGrey = styled(Textarea)`
  background-color: #f8f9fa;
`

export const ContainerField = styled.div`
  position: relative;
`

export const Container = styled.div`
  border-bottom: 1px solid black;
`

export const Button = styled.button`
  color: turquoise;
`

export const EditStripe = styled.div`
  position: absolute;
  background-color: #4285f4;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  height: 100%;
  width: 5px;
  left: 0;
  top: 0;
  z-index: 5;
`

export const EditStripeInput = styled.div`
  position: absolute;
  height: 1px;
  width: 100%;
  bottom: 0;
  background-color: ${(props) =>
    props.isEdit === true ? 'rgba(0, 0, 0, 0.12);' : 'rgb(103, 58, 183)'};
`
