import React, { PureComponent } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from "react-bootstrap";
import "./app.scss";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlus, faDownload } from "@fortawesome/free-solid-svg-icons";
import { fav, collect } from "./constants";
import { connect } from "react-redux";
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Cart from './Cart'


class Homepage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imageData: [],
      client_id:
        "2bfdbdd271002544c92860b908a727aa28957fd064ab3e7573c15de13d410e19"
    };
  }

  getDataFromUnsplash() {
    const { client_id } = this.state;
    axios
      .get("https://api.unsplash.com/photos", {
        headers: { Authorization: `Client-ID ${client_id}` }
      })
      .then(response => {
        console.log(response);
        this.setState({ imageData: response.data }, () => {
          console.log(this.state.imageData);
          // this.props.resData(this.state.imageData);
        });
      })
      .catch(response => console.log(response));
  }

  AddFavCollectHandler(action, id) {
    console.log("action AddFavCollectHandler", action, id);
  }

  // { headers: {"Authorization" : `Bearer ${token}`} }
  // client_id=2bfdbdd271002544c92860b908a727aa28957fd064ab3e7573c15de13d410e19
  componentDidMount() {
    console.log("componentDidMount");
    this.getDataFromUnsplash();
  }

  render() {
    const { imageData } = this.state;

    return (
      <>
        <div className="display-flex-start">
          {imageData.map(image =>
            (
              <div className="pos-relative" key={image.id}>
                <div className="fav-strip pad5">
                  <span className="pad-5_10 border-rad10 pad10" onClick={() => this.props.addFav(image)}><i className="fa fa-heart" aria-hidden="true"></i></span>
                  <span className="pad-5_10 marg-left20 border-rad10 pad10"><i className="fa fa-plus" aria-hidden="true"></i></span>
                </div>
                <div className="fav-dw-strip pad5">
                  <span className="pad-5_10 border-rad10 pad10 marg-left20"><i className="fa fa-arrow-down" aria-hidden="true"></i></span>
                </div>
                <img src={image.urls.small} />
              </div>
            )
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addCollect: id => dispatch({ type: "add_Collect", val: id }),
    addFav: id => dispatch({ type: "add_Fav", val: id }),
    resData: data => dispatch({ type: "resData", val: data })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
