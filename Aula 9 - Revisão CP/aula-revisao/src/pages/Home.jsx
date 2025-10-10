import { useEffect, useState } from "react";
import Card from "../components/Card";



export default function Home() {
  const [reactRepos, setReactRepos] = useState([])

  useEffect(()=>{
    fetch("https://api.github.com/search/repositories?q=react&per_page=5")
    .then(res => res.json())
    .then(data => setReactRepos(data.items))
  },[])
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">GitHub Repositories Explorer</h1>
      <div className="flex w-full flex-wrap">
        {reactRepos.map((item)=>{
          return(<Card key={item.id}{...item}></Card>)
        })}
      </div>
    </div>
  );
}
