import { useQuery } from "@tanstack/react-query"




export const RandomNumber = async ( ) => {
    const res = await fetch("https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new")
    .then((res) => res.text())
    
    return Number(res)
}

const AppQuery = () => {
     const RandomQuery = useQuery({
    queryKey: ["RandomNumber"],
    queryFn: RandomNumber,
    staleTime: 10000 * 60
  })

  return { RandomQuery }
  
}

export default AppQuery