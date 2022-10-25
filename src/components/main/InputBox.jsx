import styled from "styled-components"

const InputBox = () => {
  return(
    <StInput
      placeholder="검색어를 입력하세요"
    />
  )
}
export default InputBox

const StInput = styled.input`
  display: block;
  width: 24rem;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid rgba(229,231,235);
  border-radius: 0.25rem;
`