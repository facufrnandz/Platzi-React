//Components
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import { connect } from "react-redux";
import Header from '../components/Header';

//Hooks

//Styles
import "../assets/styles/App.scss";

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Header/>
      <Search isHome/>

      {myList.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {myList.map((item) => (
              <CarouselItem key={item.id}
               {...item}
               isList
               ></CarouselItem>
            ))}
          </Carousel>
        </Categories>
      )}

      {trends.length > 0 && (
        <Categories title="Tendencias">
          <Carousel>
            {trends.map((item) => (
              <CarouselItem key={item.id} {...item}></CarouselItem>
            ))}
          </Carousel>
        </Categories>
      )}

      {originals.length > 0 && (
        <Categories title="Originales de Platzi Video">
          <Carousel>
            {originals.map((item) => (
              <CarouselItem key={item.id} {...item}></CarouselItem>
            ))}
          </Carousel>
        </Categories>
      )}
      
    </>
  );
};

const mapStateToProp = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProp, null)(Home);
