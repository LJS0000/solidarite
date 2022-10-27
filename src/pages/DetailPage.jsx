import styled from "styled-components"
import DetailContainer from "../components/detail/DetailContainer"
import BackBtn from "../components/detail/BackBtn"

const DetailPage = () => {
  return(
    <StDetailWrap>
      <DetailContainer/>
      <BackBtn/>
    </StDetailWrap>
  )
}
export default DetailPage

const StDetailWrap = styled.div`
  margin: 5rem auto;
`