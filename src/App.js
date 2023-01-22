import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from "react";
import "./App.css";
import Filter from "./Filter";
import Movie from "./Movie";


const App = () => {

  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0)

  const { data: popular, isLoading } = useQuery({
    queryKey: ['popular'],
    queryFn: async () => {
      const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=05f2d96910794273ed15bab12fec1494&language=en-US&page=1')
      const data = await res.json()
      setFiltered(data.results)
      return data.results;
    }
  })


  if (isLoading) {
    return 'Loading...'
  }

  return (
    <div className="">
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {
            filtered.map(movie => {
              return <Movie key={movie.id} movie={movie} />
            })
          }
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
