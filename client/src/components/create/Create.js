import "./Create.css";
// import girlimg from "../images/girl.png";

const Create = () => {
  return (
    <div>
      <div className="nav">
        <div className="logo">
          <p>LAUNDRY</p>
        </div>
        <div className="names">
          <div className="name1">pricing</div>
          <div className="name1">Career</div>
          <div className="name2">
            {/* <img src={girlimg} alt="girlimg" className="img" /> */}
            <span> User Name</span>
          </div>
        </div>
      </div>

      <div className="body1">
        <div className="body11">Orders | 0</div>
        <div className="body12">
          <img />
        </div>
      </div>
      <div className="body2">No Orders avaialble</div>
      <div className="body3">
        <button>Create</button>
      </div>

      <div className="footer">
        <span className="f1">2021</span>
        <span className="f2">©</span>
        <span className="f3">Laundry</span>
      </div>
    </div>
  );
};
export default Create;
