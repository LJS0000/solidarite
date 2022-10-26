import styled from "styled-components"

const Lists = () => {

  return(
    <StListsWrap>
      <StList>
        <h3>
          <span>1. </span>
          Rerum voluptatibus et doloremque.
        </h3>
        <p>여기에 내용</p>
      </StList>
    </StListsWrap>
  )
}
export default Lists


const StListsWrap = styled.ul`
  list-style: none;
  padding: 0;

  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  padding: 1.25rem;
`
const StList = styled.li`
  & > h3 {
    > span {
      color: #3b82f6;
    }
  }
`