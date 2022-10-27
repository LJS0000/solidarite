import styled from "styled-components"
import { IoSearchSharp } from "react-icons/io5"
import { VscChromeClose } from "react-icons/vsc"
import { useRef } from "react"

const InputBox = ({setInputText, inputText}) => {

  const clear = useRef();

  const cancelBtnHandler = () => {
    setInputText('')
    clear.current.value = ''
  }

  return(
    <StInputBox>
      <IoSearchSharp/>
      <StTextArea>
        <input
          ref={clear}
          id="search"
          onChange={(e)=>{
            setInputText(e.target.value)
          }}
          placeholder="검색어를 입력하세요"
        />
        {
          inputText === '' ? null : 
          <button onClick={cancelBtnHandler}> 
            <VscChromeClose/> 
          </button>
        }
      </StTextArea>
    </StInputBox>
  )
}
export default InputBox

const StInputBox = styled.label`
  display: flex;
  align-items: center;
  width: 24rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.25rem;
  margin: 0 auto;
  padding: 1rem;
  color: #b1b1b1;
  :hover {
    border-color: #3b82f67f;
    transition-duration: 150ms;
  }
  :focus-within {
    box-shadow: 1px 1px 5px #00000033;
    transition-duration: 150ms;
  }
`

const StTextArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: #ffffff;
  & > input {
    all: unset;
    cursor: text;
    width: 100%;
    margin-left: .5rem;
    color: #000000;
    ::placeholder {
      color: #b1b1b1;
    }
  }
  & > button {
    all: unset;
    cursor: pointer;
  }
  :hover {
    color: #000000;
  }
`