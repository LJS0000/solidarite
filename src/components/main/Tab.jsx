import styled from "styled-components"

const Tab = ({setType, type}) => {

  const tabBtn = ["A", "B"]

  const tabHandler = (selected) => {
    setType(selected.toLowerCase())
  }

  const upper = type.toUpperCase();

  return(
    <StBtnWrap>
      {
        tabBtn.map((tab, i)=>{
          return(
            <button
              className={tab===upper? "selected" : null}
              key={tab}
              onClick={()=>{
                tabHandler(tab)
              }}
            >
              {tab} Posts
            </button>
          )
        })
      }
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
    font-weight: 500;
    :hover {
      color: #3b82f67f;
      background-color: #e5e7eb;
      transition-duration: 150ms;
    }
  }
  .selected {
    color: #3b82f6;
  }
`