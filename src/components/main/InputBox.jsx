import styled from "styled-components"

import { IoSearchSharp } from "react-icons/io5"

const InputBox = () => {
  return(
    <StInputBox>
      <IoSearchSharp/>
      <input
        placeholder="검색어를 입력하세요"
      />
    </StInputBox>
  )
}
export default InputBox

const StInputBox = styled.div`
  display: flex;
  align-items: center;
  width: 24rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.25rem;
  margin: 0 auto;
  padding: 1rem;
  color: #b1b1b1;
  & > input {
    all: unset;
    width: 100%;
    ::placeholder {
      padding: .5rem;
      color: #b1b1b1;
    }
  }
`