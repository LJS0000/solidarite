import styled from "styled-components"
import { useEffect, useState } from "react"
import { getLists } from "../../api/api"
import { useInView } from "react-intersection-observer";

const Lists = () => {
  const [lists, setLists] = useState([]);
  const [offset, setOffset] = useState(0);
  const [type, setType] = useState('a');

  // 무한스크롤
  const [lastRef, lastArticle] = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });
  

  useEffect(()=>{
    console.log("요청")
    console.log(lastArticle);
if(offset===0 || lastArticle) {
  getLists(offset, type)
  .then((res)=>{
    setLists([...lists, ...res])
  })
  setOffset(offset+1)
}  
      
    
    
  },[lastArticle])

  return(
    <StListsWrap>
      {
        lists?.map((article, id)=>{
          return(
            
            <StList 
              key={id} 
              ref={lists.length-1? lastRef : null}
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
  padding: 1rem;
  & > p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  & > h3 {
    > span {
      color: #3b82f6;
    }
  }
`