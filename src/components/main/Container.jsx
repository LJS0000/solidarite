import styled from "styled-components"

import InputBox from "./InputBox"
import Lists from "./Lists"
import Tab from "./Tab"

const Container = () => {

  return(
    <div>
      <StTitle>게시물을 검색해보세요</StTitle>
      <InputBox/>
      <StArticle>
        <Tab/>
        <Lists/>
      </StArticle>
    </div>
  )
}
export default Container

const StTitle = styled.p`
  color: #6b7280;
  font-size: 21px;
  text-align: center;
  margin: 35px 0;
`

const StArticle = styled.div`
  margin-top: 35px;
`
