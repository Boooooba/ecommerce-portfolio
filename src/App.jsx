import HomeScreen from './screens/HomeScreen'
import Nav from './Components/Nav'
import Cart from './Components/Cart'


const App = ()=> {
    return(
        <div>
            <Nav />
            <Cart />
            <HomeScreen />
        </div>
    )
}

export default App