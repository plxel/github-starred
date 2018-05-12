import React from "react";
import PropTypes from "prop-types";
import StarIcon from "react-icons/lib/go/star";
import ForkIcon from "react-icons/lib/go/repo-forked";
import "./RepoItem.css";

const RepoItem = ({ createdAt, description, fullName, stars, forks, url }) => {
  return (
    <div className="item">
      <div className="item_info">
        <div className="item_title">
          <h3>
            <a
              className="link"
              href={url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {fullName}
            </a>
          </h3>
        </div>
        <div className="item_description">{description}</div>
        <div className="item_created">
          Created: {new Date(createdAt).toLocaleDateString()}
        </div>
      </div>
      <div className="item_stats">
        <div className="item_stat_element">
          <StarIcon />
          {stars}
        </div>
        <div className="item_stat_element">
          <ForkIcon />
          {forks}
        </div>
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  id: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  description: PropTypes.string,
  fullName: PropTypes.string.isRequired,
  stars: PropTypes.number,
  forks: PropTypes.number,
  url: PropTypes.string.isRequired
};

RepoItem.defaultProps = {
  description: "",
  stars: 0,
  forks: 0
};

export default RepoItem;
