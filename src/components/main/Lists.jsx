import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useInView } from "react-intersection-observer";
import { getLists } from "../../api/api";

const Lists = ({type, inputText}) => {
  const navigate = useNavigate();

  const [lists, setLists] = useState([]);
  const [offset, setOffset] = useState(0);

  // 무한스크롤
  const [lastRef, lastArticle] = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });
  
  // 마운트 및 무한스크롤 업데이트
  useEffect(()=>{
    if (offset===0 || lastArticle) {
      getLists(offset, inputText, type)
      .then((res)=>{
        setLists([...lists, ...res])
      })
      setOffset(offset+1)
    }
  },[lastArticle])
  
  return(
    <StListsContainer>
      {
        lists?.map((article, id)=>{
          return(
            <StList 
              key={id} 
              ref={lists.length-1? lastRef : null}
              onClick={()=>{
                  navigate(`${article.type}?id=${article.id}`)
              }}
            >
              <h3>
                <span>{article.id}. </span>
                {article.title}
              </h3>
              <p>{article.content}</p>
            </StList>
          )
        })
      }
    </StListsContainer>
  )
}
export default Lists


const StListsContainer = styled.ul`
  list-style: none;
  padding: 0;

  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  padding: 1.25rem;
`
const StList = styled.li`
  cursor: pointer;
  padding: 1rem;
  :hover {
    background-color: #f3f4f6;
  }
  & > p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  & > h3 {
    font-size: 1.125rem;
    font-weight: 500;
    & > span {
      color: #3b82f6;
    }
  }
`