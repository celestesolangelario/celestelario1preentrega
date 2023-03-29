/*import carrito from './assets/carrito.svg' */
import logo from './assets/Vg.svg'
import Button from '../Button/Button.js'
import Cartwidget from '../Cartwidget/cartwidget.js'

const Navbar = ()=> { 
return (
    <nav>
        <div>
        <h1>Vicios FreaK </h1>
        <img src={logo} alt="logo"/>
        </div>
        <div>
            
            <Button label="Perifericos" callback={()=> console.log('Perifericos')} />
            <Button label="Manga" callback={()=> console.log('Manga')} />
            <Button label="Merchandising"callback={()=> console.log('Merchandising')} />
        </div>
        <Cartwidget/>

    </nav>
)

}
export default Navbar