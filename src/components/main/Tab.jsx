import styled from "styled-components"

const Tab = () => {
  return(
    <StBtnWrap>
      <button>A Posts</button>
      <button>B Posts</button>
    </StBtnWrap>
  )
}
export default Tab

const StBtnWrap = styled.div`
 border-bottom: solid 1px rgba(229,231,235);
 margin-bottom: .5rem;
  & > button {
    all: unset;
    cursor: pointer;
    padding: 0.75rem;
    border-radius: 0.25rem;
    font-weight: 500;
    color: rgba(59, 130, 246);
  }
`