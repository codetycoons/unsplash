import React, { PureComponent } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from "react-bootstrap";
class Cart extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let fav = "";
    console.log("userData",this.props.userData)
    if (this.props) {
      fav = this.props.userData;
      console.log("in render fav", fav);
    }

    const noData = (
      <div>
        <span>No any favourites</span>
      </div>
    );
    // console.log("comes here", this.props.userData.fav[0][0]);
    return (
      <>
        <Row style={{ padding: "10px" }}>
          <Col xs={12} lg={6}>
            <div className="cartHeader">
              <span>Favourites</span>
            </div>
            <div>
              {fav
                // {
                //   this.props.userData.fav.length > 0
                ? fav.map(fav => (
                  <Row key={fav.image.id}>
                    <Col xs={12}>
                      <div className="favItem">
                        <span>{fav.image.id}</span>
                        <div>
                          <img src={fav.image.urls.small} />
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <button onClick={() => this.props.onRemove(fav.image.id)}>
                        Remove {fav.image.id}
                      </button>
                    </Col>
                  </Row>
                ))
                : noData
              }
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="cartHeader">
              <span>Collection</span>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log("in cart state map", state);
  return {
    userData: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemove: id => dispatch({ type: "removeFav", val: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
