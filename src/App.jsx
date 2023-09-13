
import Actors from "./components/Actors/Actors";
import Salary from "./components/Salary/Salary"
import { useState } from "react"



function App() {
  const [salarys,setSalarys]=useState(0);
  const[ages,setAges]=useState(0)

  const handleSalary=(salary,age)=>{
    const newSalary=salarys+salary;
    setSalarys(newSalary)
    const addedAge = ages+age
    setAges(addedAge)
  }

  return (
    <div className="container mx-auto flex justify-around">
     <Actors handleSalary={handleSalary}></Actors>
     <Salary salarys={salarys} ages={ages}></Salary>
      </div>
  )
}

export default App
