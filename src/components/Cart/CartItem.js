import { useMainContext } from "../../context/context";

export const CartItem = () => {
  const { cart, dispatch } = useMainContext();

  return (
    <>
      {cart.map((item) => {
        return (
          <div
            key={item._id}
            className="card card--horizontal border cart--card">
            <figure className="card--image">
              <img src={item.image} alt="{item.name}" />
            </figure>
            <div className="card--body cart--card-body">
              <span className="card--title">{item.name}</span>
              <p className="card--text"> &#8377;{item.price * item.quantity}</p>
              <div className="cart--buttons-container">
                <button
                  className="cart--buttons btn btn-primary"
                  onClick={() =>
                    dispatch({ type: "DECREASE_QUANTITY", payload: item._id })
                  }>
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  className="cart--buttons btn btn-primary"
                  onClick={() =>
                    dispatch({ type: "INCREASE_QUANTITY", payload: item._id })
                  }>
                  +
                </button>
              </div>
            </div>
            <ion-icon
              class="cart-dismiss"
              name="close-circle-outline"
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: item._id })
              }></ion-icon>
          </div>
        );
      })}
    </>
  );
};
