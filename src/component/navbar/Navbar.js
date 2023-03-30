/*import carrito from './assets/carrito.svg' */
import logo from './assets/logo.svg'
import Button from '../Button/Button.js'
import Cartwidget from '../Cartwidget/cartwidget.js'

const Navbar = ()=> { 
return (
    <nav class="navbar bg-dark"  data-bs-theme="dark"  >
         
        <div class="container">
        
                <img src={logo}alt="logo"width="100" height="80" class="d-inline-block align-text-top" />
            
        </div>
        <h1 class="text-start text-light bg-dark">Vicios FreaK</h1>
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