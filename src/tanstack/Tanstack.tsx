import { useQuery } from "@tanstack/react-query"


const getRandomNumber = async () => {
  const res = await fetch("https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new")
  .then((res) => res.text())

  return Number(res)
}

const Tanstack = () => {
  const {
    data: RandomNumber,
    isLoading: Loading,
    isFetching: Fetching,
    isError: Error,
    refetch: RefreshToken
  } = useQuery({
    queryKey: ["RandomNumber"],
    queryFn: getRandomNumber,
    staleTime: 10000 * 60
  })



  return (
    < >{
      Error ?
      <h1>{Error}</h1>
      :  <div>
        {
          Fetching
          ? <h1>Loading...</h1>
          : <h1>{RandomNumber}</h1>
        }

      <span style={ {display: "block" , paddingBottom: "32px"}}>.....</span>
      </div>
    }
   
     
      <div>
          <button onClick={() => RefreshToken()}>
            Generar nuevo número
          </button>
      </div>
    </>
  )
}

export default Tanstack