//Components
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

//Hooks
import useInitialState from "../Hooks/useInitialState";

//Styles
import "../assets/styles/App.scss";

const API = "http://localhost:3000/initialState";

const App = () => {
  
  const initialState = useInitialState(API);

  return initialState.videos.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="App">
      <Header />
      <Search />

      { initialState.categories.map(category => (
        initialState.videos[category].length > 0 && (

          <Categories title={category}>
            <Carousel>
              {initialState.videos[category].map(item => (
                <CarouselItem key={item.id} {...item}>

                </CarouselItem>
              ))}
            </Carousel>
          </Categories>
        )
      ))
      }
      
      <Footer />
    </div>
  );
};

export default App;
