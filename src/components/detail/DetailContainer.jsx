import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getDetail } from "../../api/api";

const DetailContainer = () => {

  const type = window.location.pathname.slice(1)
  const id = window.location.search.slice(4)

  const [detail, setDetail] = useState();

  useEffect(()=>{
    getDetail(type, id)
    .then((res)=>{
      setDetail(res)
    })
  },[])

  return(
    <StDetailContainer>
      <StDetailTitle>
        {detail?.title}
      </StDetailTitle>
      <StDetailContent>
        {detail?.content}
      </StDetailContent>
    </StDetailContainer>
  )
}
export default DetailContainer

const StDetailContainer = styled.div`
  border: 1px solid #e5e7eb;
  padding: 2.5rem;
  margin-bottom: 1rem;
`

const StDetailTitle = styled.h2`
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: 2.25rem;
`

const StDetailContent = styled.p`

`