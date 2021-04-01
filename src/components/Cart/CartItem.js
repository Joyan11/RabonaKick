import { useCart } from "../../context/context";

export const CartItem = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  return (
    <>
      {cart.map((item) => {
        return (
          <div key={item.id} class="card card--horizontal border cart--card">
            <figure class="card--image">
              <img src={item.image} alt="" />
            </figure>
            <div class="card--body cart--card-body">
              <span class="card--title">{item.name}</span>
              <p class="card--text"> &#8377;{item.price}</p>
              <div className="cart--buttons-container">
                <button
                  className="cart--buttons btn btn-primary"
                  onClick={() => decreaseQuantity(item.id)}>
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  className="cart--buttons btn btn-primary"
                  onClick={() => increaseQuantity(item.id)}>
                  +
                </button>
              </div>
            </div>
            <ion-icon
              class="cart-dismiss"
              name="close-circle-outline"
              onClick={() => removeFromCart(item.id)}></ion-icon>
          </div>
        );
      })}
    </>
  );
};

{
  /* <div key={item.id} class="card card--horizontal border">
  <figure class="card--image">
    <img src={item.image} alt="" />
  </figure>
  <div class="card--body">
    <span class="card--title">{item.name}</span>
    <p class="card--text">{item.price}</p>
    <button onClick={() => decreaseQuantity(item.id)}>-</button>
    <p>{item.quantity}</p>
    <button onClick={() => increaseQuantity(item.id)}>+</button>
    <button onClick={() => removeFromCart(item.id)}>Remove</button>
  </div>
</div>; */
}
