import { useEffect } from "react"

export function saveData(){
  const ul = document.querySelector('ul')
  if (ul){
    localStorage.setItem('tasks', ul.innerHTML)
  }
}

export default function List() {

  useEffect(() => {
    loadData()
  }, [])

  function loadData(){
    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks){
      const ul = document.querySelector('ul')
      if(ul){
        ul.innerHTML = storedTasks
      }
    }
  }

  function handleClick(e:React.MouseEvent<HTMLUListElement, MouseEvent>){
    const element = e.target as HTMLElement

    if(element.tagName === 'LI'){
      element.classList.toggle('checked')
      saveData()
    }else if(element.tagName === 'SPAN') {
      element.parentElement?.remove()
      saveData()
    }
  }

  return (
    <ul onClick={handleClick}>
    </ul>
  )
}
