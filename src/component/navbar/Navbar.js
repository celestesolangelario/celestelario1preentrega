import carrito from './assets/carrito.svg' 
import logo from './assets/Vg.svg'


const Navbar = ()=> { 
return (
    <nav>
        <div>
        <h1>Vicios FreaK </h1>
        <img src={logo} alt="logo"/>
        </div>
        <div>
            <button>Perifericos</button>
            <button>Manga</button>
            <button>Figuras</button>
            <button>merchandising</button>
            <div>
                <img src={carrito} alt="carrito"/>
            </div>  


        
        </div>

    </nav>
)

}
export default Navbar