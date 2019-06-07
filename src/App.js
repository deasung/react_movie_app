import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

const moviesTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]
//https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg
//https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2017/05/full_metal_jacket_1987_3-h_2017.jpg
//https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg
//https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg
const moviesImages = [
  "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg",
  "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2017/05/full_metal_jacket_1987_3-h_2017.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",
  "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
]

const movies = [
  {
    id: 1,
    title: "Matrix",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
  },
  {
    id: 2,
    title: "Full Metal Jacket",
    poster: "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2017/05/full_metal_jacket_1987_3-h_2017.jpg"
  },
  {
    id: 3,
    title: "Oldboy",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
  },
  {
    id: 4,
    title: "Star Wars",
    poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  }
]



// function App() {
//   return (
//       <div className="App">
//         {/*<Movie title={moviesTitles[0]} poster={moviesImages[0]}/>*/}
//         {/*<Movie title={moviesTitles[1]} poster={moviesImages[1]}/>*/}
//         {/*<Movie title={moviesTitles[2]} poster={moviesImages[2]}/>*/}
//         {/*<Movie title={moviesTitles[3]} poster={moviesImages[3]}/>*/}
//         {/*{movies.map(movie => {*/}
//           {/*return <Movie title={movie.title} poster={movie.poster}/>*/}
//         {/*})}*/}
//
//         {movies.map((movie, index) => {
//           return <Movie title={movie.title} poster={movie.poster} key={index}/>
//         })}
//
//       </div>
//   );
// }


class App extends Component {


  // Render : componentWillMount -> render -> componentDidMount

  // Update : componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate

  // Delete : componentWillUnmount

  componentWillMount() {
    console.log("will mount");
  }


  componentDidMount() {
    console.log("did mount");
  }

  render() {
    console.log("did render");
    return (
        <div className="App">
          {/*<Movie title={moviesTitles[0]} poster={moviesImages[0]}/>*/}
          {/*<Movie title={moviesTitles[1]} poster={moviesImages[1]}/>*/}
          {/*<Movie title={moviesTitles[2]} poster={moviesImages[2]}/>*/}
          {/*<Movie title={moviesTitles[3]} poster={moviesImages[3]}/>*/}
          {/*{movies.map(movie => {*/}
          {/*return <Movie title={movie.title} poster={movie.poster}/>*/}
          {/*})}*/}

          {movies.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.poster} key={index}/>
          })}

        </div>
    );


  }

}


export default App;
