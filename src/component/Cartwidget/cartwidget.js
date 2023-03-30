import carrito from './assets/carrito.svg'

const cartwidget = ()=> {
    return(
        <div class="text-light bg-dark">
            <img src={carrito} class="rounded float-end" alt="carrito" width="50" height="40"/>    
            0
        </div>

    )
}
export default cartwidget