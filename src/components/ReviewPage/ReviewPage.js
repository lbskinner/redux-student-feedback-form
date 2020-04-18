import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import axios from "axios";

class ReviewPage extends Component {
  submitFeedback = (event) => {
    const feedback = {
      feeling: this.props.store.feelingReducer.feeling,
      understanding: this.props.store.understandingReducer.understanding,
      support: this.props.store.supportReducer.support,
      comments: this.props.store.commentsReducer.comments,
    };
    axios
      .post("/feedback", feedback)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/success");
      })
      .catch((error) => {
        console.log("POST SERVER ERROR: ", error);
      });
  };

  render() {
    return (
      <div>
        <h2>Review Your Feedback</h2>
        <p>Feelings: {this.props.store.feelingReducer.feeling}</p>
        <p>
          Understanding: {this.props.store.understandingReducer.understanding}
        </p>
        <p>Support: {this.props.store.supportReducer.support}</p>
        <p>Comments: {this.props.store.commentsReducer.comments}</p>
        <Button variant="contained" onClick={this.submitFeedback}>
          SUBMIT
        </Button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ReviewPage);
