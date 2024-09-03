import './css/styles.css'
import './css/bootstrap.css'
import Header from './Comp/Header';
import Toptext from './Comp/Toptext';
import Ipadpro from './Comp/Ipadpro';
import Mac from './Comp/Mac';
import Iphone11 from './Comp/Iphone11';
import Icovid from './Comp/Icovid';
import AppleTv from './Comp/AppleTv';
import Card from './Comp/Card';
import Carousel from './Comp/Carousel';
import Footer from './Comp/Footer';
import Search from './Comp/Search';


function App() {

  return (
    <>
      <Header />
      <Search />
      <Toptext />
      <Ipadpro />
      <Mac />
      <Iphone11 />
      <Icovid />
      <AppleTv />
      <Card />
      <Carousel />
      <Footer />
    </>
  )
}

export default App;
