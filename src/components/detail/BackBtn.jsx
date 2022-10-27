import styled from "styled-components";
import { useNavigate } from "react-router";

const BackBtn = () => {
  const navigate = useNavigate();
  
  return(
    <StBtn
      onClick={()=>{
        navigate(-1)
      }}
    >
      뒤로가기
    </StBtn>
  )
}
export default BackBtn

const StBtn = styled.button`
  cursor: pointer;
  background-color: #3b82f6;
  color: #ffffff;
  padding: 0.75rem 2rem;
  font-weight: 500;
  border: none;
  border-radius: 0.375rem;
  :hover {
    transition-duration: 150ms;
    background-color: rgba(59,130,246,0.5);
    box-shadow: 2px 2px 5px #0000002b;
  }
`