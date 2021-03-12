import styled from '@emotion/styled'

const Textarea = styled.textarea`
  ${'' /* font-size: 34px; */}
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
const Input = styled.input`
  font-size: 34px;
  font-weight: 400;
  outline: none;
  padding: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
  height: 48px;
  border: none;
  &:hover {
    color: red;
  }
`

const TextareaGrey = styled(Textarea)`
  background-color: #f8f9fa;
`

const ContainerField = styled.div`
  position: relative;
`

const Container = styled.div`
  border-bottom: 1px solid black;
`

const Button = styled.button`
  border: none;
  background: none;
`
const ButtonAddParam = styled(Button)`
  cursor: text;
  padding: 5px;
  box-size
  &:hover {
    border-bottom: 1px solid rgb(118, 118, 118);
  }
`

const EditStripe = styled.div`
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

const EditStripeInput = styled.div`
  position: absolute;
  height: 1px;
  width: 100%;
  bottom: 0;
  background-color: ${(props) =>
    props.isEdit === true ? 'rgba(0, 0, 0, 0.12);' : 'rgb(103, 58, 183)'};
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 20px;
`

const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
`
export {
  Textarea,
  Input,
  TextareaGrey,
  ContainerField,
  Container,
  Button,
  EditStripe,
  EditStripeInput,
  List,
  ListItem,
  ButtonAddParam,
}
