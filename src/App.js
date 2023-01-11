import logo from "./logo.svg";
import "./App.css";
import CartProduct from "./components/CartProduct";
import SmallMenu from "./components/SmallMenu";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />

      <CartProduct photo="girlstalk.png" category="Monday" title="GIRLS TALK" price="19.00 - 21.00" info="Listen Girls Wanna Talk" />
      <CartProduct photo="pophub.png" category="Tuesday" title="POP HUB" price="19.00 - 21.00" info="I POP U WITH THE HUB" />

      <div className="Broadcaster">
        <h1 className="meet">Meet The Broadcaster</h1>
        <div className="Parent">
          <SmallMenu photo="ridho.jpg" name="Dhior" price="Creative" location="Pop Hub" />
          <SmallMenu photo="zila.jpg" name="Zila" price="External" location="UGD" />
          <SmallMenu photo="citra.jpg" name="Citra" price="Internal" location="Scary Night" />
          <SmallMenu photo="qila.jpg" name="Aqila" price="Bendahara" location="Weekly Hits" />
          <SmallMenu photo="trissa.jpg" name="Trissa" price="Sekretaris" location="Weekly Hits" />
          <SmallMenu photo="diana.jpg" name="Diana" price="External" location="Throwback Tuesday" />
          <SmallMenu photo="heisya.jpg" name="Heisya" price="External" location="Scary Night" />
          <SmallMenu photo="narest.jpg" name="Narest" price="Station" location="Weekly Hits" />
        </div>
      </div>
    </div>
  );
}

export default App;
