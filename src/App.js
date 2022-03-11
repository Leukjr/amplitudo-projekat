import "./App.css";
import IdCard from "./idCard/IdCard.jsx";
import Wrapper from "./Wrapper/Wrapper.jsx";
import Movies from "./movies/Movies.jsx";
import MyBooks from "./MyBooks/MyBooks";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <div className="container">
          <IdCard
            name="Srdjan Onisko"
            dateOfBirth="25.05.1990"
            city="Herceg-Novi"
            src="./images/srdjan.jpg"
          />
          <IdCard
            name="Milica Boca"
            dateOfBirth="14.12.1990"
            city="Herceg-Novi"
            src="./images/milica.jpg"
          />
          <IdCard
            name="Nikola Lopusina"
            dateOfBirth="20.09.1990"
            city="Herceg-Novi"
            src="./images/lopusina.jpg"
          />
        </div>
        <div className="container">
          <Movies
            name="The Batman"
            year="2022"
            type={["Action", "Crime", "Drama"]}
            director="Matt Reeves"
            actors={["Robert Pattinson", "Zoe Kravitz", "Jeffrey Wright"]}
            src="./images/batman.jpg"
          />
          <Movies
            name="The Lord of the Rings: The Return of the King"
            year="2003"
            type={["Action", "Adventure", "Drama"]}
            director="Peter Jackson"
            actors={["Elijah Wood", "Viggo Mortensen", "Ian McKellen"]}
            src="./images/lotr.jpg"
          />
          <Movies
            name="The Godfather"
            year="1972"
            type={["Crime", "Drama"]}
            director="Francis Ford Coppola"
            actors={["Marlon Brando", "Al Pacino", "James Caan"]}
            src="./images/godfather.jpg"
          />
        </div>

        <div className="container">
          <MyBooks
            name="The Last Wish"
            year="1972"
            writter="Andrzej Sapkowski"
            quote='"Evil is Evil. Lesser, greater, middling… Makes no difference. The degree is arbitary. The definition’s blurred. If I’m to choose between one evil and another… I’d rather not choose at all."'
            src="./images/the_last_wish.jpg"
          />
          <MyBooks
            name="The Two Towers"
            year="1954"
            writter="J.R.R. Tolkien"
            quote='"There is some good in this world, and it’s worth fighting for."'
            src="./images/the_two_towers.jpg"
          />
          <MyBooks
            name="The Little Prince"
            year="1943"
            writter="Antoine de Saint-Exupéry"
            quote='"It is only with the heart that one can see rightly; what is essential is invisible to the eye."'
            src="./images/the_little_prince.jpg"
          />
        </div>
      </Wrapper>
      {/* <Wrapper>
        <Movies />
      </Wrapper> */}
    </div>
  );
}

export default App;
