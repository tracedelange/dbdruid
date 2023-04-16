import BlogRouteContainer from "./components/BlogRouteContainer";
import ReubeenMain from './components/reubeenApp/ReubeenMain'

function App() {

  console.log(window.location.host.split(".")[0])

  if (window.location.host.split(".")[0] === 'reubeen'){
    return <ReubeenMain />
  } else {
    //render blog app
    return (
      <div className="App">
        <BlogRouteContainer />
      </div>
    );
  }
}

export default App;
