import styled from "styled-components"
import { useState } from "react"
import InputBox from "./InputBox"
import Lists from "./Lists"
import Tab from "./Tab"

const MainContainer = () => {

  const [type, setTtpe] = useState('a');

  return(
    <>
      <StTitle>게시물을 검색해보세요</StTitle>
      <InputBox/>
      <StArticle>
        <Tab setType={setTtpe}/>
        <Lists type={type}/>
      </StArticle>
    </>
  )
}
export default MainContainer

const StTitle = styled.p`
  color: #6b7280;
  font-size: 1.5rem;
  text-align: center;
  margin: 35px 0;
`

const StArticle = styled.div`
  margin-top: 35px;
`
