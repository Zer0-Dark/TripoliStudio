import "./normalize.css";
import Header from "./components/Header";
import "./main.css";
import FlowButton from "./components/FlowButton";
import FlowMedia from "./components/FlowMedia";
import Head from "./components/Head";
import Section from "./components/Section";
import posters from "./data/posters";
import stickers from "./data/stickers"
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">

      <Header></Header>

      <FlowButton></FlowButton>

      <FlowMedia></FlowMedia>

      <Head></Head>


      <div className="container">
        <Section data={posters} name="Prints" description="
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Quis ipsum suspendisse ultrices gravida.
        Risus commodo viverra maecenas accumsan lacus vel facilisis. "></Section>
        <Section data={stickers} name="Tote Bags" description="
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Quis ipsum suspendisse ultrices gravida.
        Risus commodo viverra maecenas accumsan lacus vel facilisis. "></Section>
        <Section data={stickers} name="Stickers" description="
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Quis ipsum suspendisse ultrices gravida.
        Risus commodo viverra maecenas accumsan lacus vel facilisis. "></Section>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
