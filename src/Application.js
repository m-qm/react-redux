import React from "react";
import useFetch from "./store/actions.js";
import List from "./List";
import { deleteItem } from "./store/actions.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./index.scss";

const endpoint = "http://localhost:8000";

const Application = () => {
  const { data, loading, error } = useFetch(endpoint + "/social");

  return (
    <div className="Application">
      <header>
        <h1>Tests</h1>
      </header>
      <main>
        <section className="sidebar">
          {loading ? <p>Loading…</p> : <List items={data} />}
          {error &&
            <p className="error">
              {error.message}
            </p>}
        </section>
      </main>
    </div>
  );
};

const mapActionsToProps = dispatch => {
  return bindActionCreators(
    {
      deleteItem
    },
    dispatch
  );
};

export default connect(null, mapActionsToProps)(Application);
