const SeeComplain = () => {
  return (
    <>
      <div class="main-dash">
        <h1 class="main-dash-heading">STATUS</h1>
        <div class="cards-dash">
          <div id="row">
            <div class=" one">
              <div class="in-stock">
                <h2 class="card-data-dash">In Stock</h2>
                <div class="number">100</div>
              </div>
            </div>

            <div class="two">
              <div class="in-stock">
                <h2 class="card-data-dash">Available</h2>
                <div class="number">84</div>
              </div>
            </div>

            <div class="three">
              <div class="in-stock">
                <h2 class="card-data-dash">Not Available</h2>
                <div class="number">14</div>
              </div>
            </div>

            <div class="four">
              <div class="in-stock">
                <h2 class="card-data-dash">Total Bookings</h2>
                <div class="number">26</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SeeComplain;