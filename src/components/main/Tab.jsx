import styled from "styled-components"

const Tab = ({setType}) => {

  const tabBtn = ["A", "B"]

  const tabHandler = (selected) => {
    setType(selected.toLowerCase())
  }

  return(
    <StBtnWrap>
      {
        tabBtn.map((tab, i)=>{
          return(
            <button
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
  }
`