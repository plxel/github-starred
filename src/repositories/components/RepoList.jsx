import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getAll } from "../selectors";
import { load } from "../actions";
import RepoItem from "./RepoItem";

class RepoList extends React.Component {
  componentDidMount() {
    this.props.load();
  }

  render() {
    const { items } = this.props;
    return (
      <div>
        {items.map(item => (
          <RepoItem
            key={item.id}
            createdAt={item.created_at}
            description={item.description}
            fullName={item.full_name}
            stars={item.stargazers_count}
            forks={item.forks_count}
            url={item.html_url}
          />
        ))}
      </div>
    );
  }
}

RepoList.propTypes = {
  items: PropTypes.array.isRequired
};

export default connect(
  createStructuredSelector({
    items: getAll
  }),
  { load }
)(RepoList);
