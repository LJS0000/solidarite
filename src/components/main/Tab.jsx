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
 border-bottom: solid 1px #e5e7eb;
 margin-bottom: .5rem;
  & > button {
    all: unset;
    cursor: pointer;
    padding: .75rem;
    border-radius: .25rem;
  }
`