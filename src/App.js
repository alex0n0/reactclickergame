import React from 'react';
import './App.css';


import batman from './res/batman.png';
import background from './res/background.jpg';
import logo from './res/logo.png';


import arrVillains from './utils/villains';
import ImageTile from './components/ImageTile';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currScore: 0,
      highScore: 0,
      arrImageTiles: [...arrVillains],
      arrFound: [],
      loss: false
    }
  }

  componentDidMount() {
    this.restart();
  }

  restart(loss = false) {
    var shuffledArr = this.shuffleArray(this.state.arrImageTiles);
    this.setState({
      ...this.state,
      arrImageTiles: shuffledArr,
      currScore: 0,
      arrFound: [],
      loss: loss
    });
  }

  shuffleArray(arr) {
    var arrTempImageTiles = [...arr];
    var tempElement;
    var indexA;
    var indexB;
    for (let i = 0; i < 1000; i++) {
      indexA = Math.floor(Math.random() * arr.length);
      indexB = Math.floor(Math.random() * arr.length);
      tempElement = arrTempImageTiles[indexA];
      arrTempImageTiles[indexA] = arrTempImageTiles[indexB];
      arrTempImageTiles[indexB] = tempElement;
    }
    return arrTempImageTiles;
  }

  handleImageTileClick(id) {
    var arrTempFound = [...this.state.arrFound];
    var found = arrTempFound.indexOf(id) === -1 ? false : true;
    if (found) {
      this.restart(true);
    } else {
      arrTempFound.push(id);
      var shuffledArr = this.shuffleArray(this.state.arrImageTiles);
      this.setState({
        ...this.state,
        arrImageTiles: shuffledArr,
        arrFound: arrTempFound,
        currScore: arrTempFound.length,
        highScore: arrTempFound.length > this.state.highScore ? arrTempFound.length : this.state.highScore,
        loss: false
      });
    }
 }

  render() {
    return (
      <>
        <header>
          <nav className="sectionNav container-fluid py-1">
            <a href="/">
              <img
                src={logo}
                width="auto"
                height="100%"
                style={{ filter: 'brightness(0) invert(1)' }}
                alt="logo link"
              />
            </a>
          </nav>
          <section className="sectionScore container-fluid">
            <p className="m-0">Score: {this.state.currScore}</p>
            <div className="mx-2" style={{ height: '60%', width: '2px', backgroundColor: 'black' }} />
            <p className="m-0">High Score: {this.state.highScore}</p>
          </section>
        </header>

        <main className="pt-3">
          <img
            className="position-fixed"
            src={batman}
            alt="Canvas Logo"
            width="50%"
            height="auto"
            style={{ filter: "drop-shadow(-20px 20px 10px rgba(255, 255, 255, 0.1))", zIndex: '-1', bottom: '0px', right: '-50px' }}
          />

          <div className="background" style={{ backgroundImage: 'url(' + background + ')' }}></div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="rounded p-5" style={{ background: 'url("https://images2.minutemediacdn.com/image/upload/c_crop,h_1125,w_2000,x_0,y_59/f_auto,q_auto,w_1100/v1554742075/shape/mentalfloss/559268-dccomicshed.jpg"), rgba(0, 0, 0, 1)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundBlendMode: 'screen' }}>
                  <h3 className="m-0 p-2 rounded text-white text-center   " style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>Capture each villain but <b><u>NO MORE THAN ONCE</u></b></h3>
                </div>
              </div>
            </div>
            <div className="row px-3 pt-3">
              <div className={this.state.loss ? "col-12 col-md-7 rounded shake animated infinite" : "col-12 col-md-7 rounded shake"} style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                <div className="row p-2">
                  {this.state.arrImageTiles.map(curr => {
                    return (
                      <div className="col-6 col-md-4 col-lg-3 p-2" key={curr.id}>
                        <ImageTile onClick={(id) => { this.handleImageTileClick(id) }} villain={curr} />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </main>



        <footer className="py-3">
          <ul className="m-0">
            <li>https://batman.fandom.com/wiki/Jason_Todd</li>
            <li>https://batman.fandom.com/wiki/The_Joker</li>
            <li>https://batman.fandom.com/wiki/The_Riddler</li>
            <li>https://batman.fandom.com/wiki/The_Penguin</li>
            <li>https://batman.fandom.com/wiki/Mr._Freeze</li>
            <li>https://batman.fandom.com/wiki/Bane</li>
            <li>https://batman.fandom.com/wiki/Poison_Ivy</li>
            <li>https://batman.fandom.com/wiki/Killer_Croc</li>
            <li>https://batman.fandom.com/wiki/Ra%27s_al_Ghul</li>
            <li>https://batman.fandom.com/wiki/Two-Face</li>
            <li>https://batman.fandom.com/wiki/Man-Bat</li>
            <li>https://batman.fandom.com/wiki/Poison_Ivy</li>
            <li>https://batman.fandom.com/wiki/Harley_Quinn</li>
          </ul>
        </footer>
      </>


      // <div style={{ minHeight: '200vh' }}>

      //   <div className="position-fixed" style={{ backgroundImage: 'url(' + background + ')', backgroundSize: 'cover', filter: 'opacity(50%)', top: '0px', left: '0px', height: '100vh', width: '100vw', zIndex: '-2' }}></div>
      //   <div className="position-fixed" style={{ maxWidth: '50vw', minWidth: '400px', bottom: '0px', right: '0px' }}>
      //     <img
      //       src={batman}
      //       alt="Canvas Logo"
      //       width="100%"
      //       height="auto"
      //       style={{ filter: "drop-shadow(-20px 20px 10px rgba(255, 255, 255, 0.1))" }}
      //     />
      //   </div>


      //   <header>
      //     <nav style={{ backgroundImage: 'linear-gradient(rgba(100, 100, 100, 1) 10%, rgba(30, 30, 30, 1) 80%, rgba(25, 25, 25, 1) 10%)', height: '60px' }}>
      //       <img
      //         src={logo}
      //         width="auto"
      //         height="100%"
      //         style={{ filter: 'brightness(0) invert(1)' }}
      //         alt="logo link"
      //       >
      //       </img>
      //     </nav>
      //     <div className="bg-secondary d-flex py-2 px-3">
      //       <p className="m-0 text-light">HIGHSCORE: 88 points | SCORE: 10 points</p>
      //     </div>
      //   </header>


      //   <main>
      //     <div className="container-fluid">
      //       <div className="row">



      //         <div className="col-12 col-md-7 border border-danger">
      //           <div className="row p-2">
      //             {this.state.shuffledArr.map(curr => {
      //               return (
      //                 <div className="col-6 col-md-4 col-lg-3 p-2" key={curr.id}>
      //                   <ImageTile onClick={(id) => { this.handleImageTileClick(id) }} villain={curr}/>
      //                 </div>
      //               )
      //             })}
      //           </div>
      //         </div>


      //       </div>
      //     </div>
      //   </main>


      //   <footer>asdf</footer>
      // </div>
    );
  }
}

export default App;
