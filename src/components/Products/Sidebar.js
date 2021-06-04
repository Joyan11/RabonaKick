import { useMainContext } from "../../context/context";

export const Sidebar = () => {
  const {
    stockSort,
    fastDelivery,
    priceRange,
    teamFilter,
    sortByStock,
    sortByDelivery,
    sortBySliderRange,
    sortByTeam,
    dispatch,
  } = useMainContext();
  return (
    <>
      <div className="sidebar">
        <div className="filter">
          <div className="team-filter">
            <label htmlFor="teamfilter">Sort by Teams:</label>
            <select
              className="teamselection"
              name="teamfilter"
              id="teamfilter"
              value={teamFilter}
              onChange={(e) => sortByTeam(e)}>
              <option value="allteams">All</option>
              <option value="manutd">Manchester United</option>
              <option value="mancity">Manchester City</option>
              <option value="barcelona">Barcelona</option>
              <option value="juventus">Juventus</option>
              <option value="atlmadrid">Atletico Madrid</option>
              <option value="intermilan">Inter Milan</option>
              <option value="acmilan">AC Milan</option>
              <option value="arsenal">Arsenal</option>
              <option value="chelsea">Chelsea</option>
              <option value="dortmund">Dortmund</option>
              <option value="liverpool">Liverpool</option>
            </select>
          </div>
          <div className="stock-filter">
            <input
              type="checkbox"
              name="stockfilter"
              id="stockfilter"
              checked={stockSort === "totalstock" ? false : true}
              onChange={(e) => sortByStock(e)}
            />
            <label htmlFor="stockfilter">Only In Stock</label>
          </div>
          <div className="delivery-filter">
            <input
              type="checkbox"
              name="delivery-filter"
              id="delivery-filter"
              checked={fastDelivery === "allDeliveries" ? false : true}
              onChange={(e) => sortByDelivery(e)}
            />
            <label htmlFor="delivery-filter">Fast Delivery</label>
          </div>
          <div className="price-slider">
            <p>Price range:</p>
            <input
              min="799"
              max="2099"
              type="range"
              name="slider"
              id="slider"
              value={priceRange}
              onChange={(e) => sortBySliderRange(e)}
            />
            <p> &#8377; {priceRange}</p>
          </div>
          <div className="clearFilter">
            <button
              className="btn btn--round btn-secondary"
              onClick={() => dispatch({ type: "CLEAR_FILTER" })}>
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
