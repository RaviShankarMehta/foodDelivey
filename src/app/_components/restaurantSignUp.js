const RestaurantSignUp = () => {
  return (
    <>
      <h3>SignUp Component</h3>
      <div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter email Id"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Enter password"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Enter confirm password"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter restaurant name"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input type="text" placeholder="Enter city" className="input-field" />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter address"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter contact number"
            className="input-field"
          />
        </div>

        <div>
          <button className="button">Login</button>
        </div>
      </div>
    </>
  );
};

export default RestaurantSignUp;
