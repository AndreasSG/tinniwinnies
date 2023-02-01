import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item, index) => {
      if (index % 2 === 0) {
        return (
          <div key={item.text} className=" feature-hero">
            <section className="hero is-medium">
              <div className="hero-body columns">

                <div className="column">
                  <p clasName="title">
                    {item.title}
                  </p>
                  <p className="subtitle">
                    {item.text}
                  </p>
                </div>

                <div className="column">
                  <PreviewCompatibleImage imageInfo={item} />
                </div>

              </div>
            </section>
          </div>
        );

      } else {
        return (
          <div key={item.text} className=" feature-hero">
            <section className="hero is-medium">
              <div className="hero-body columns">

                <div className="column">
                  <PreviewCompatibleImage imageInfo={item} />
                </div>

                <div className="column">
                  <p clasName="title">
                    {item.title}
                  </p>
                  <p className="subtitle">
                    {item.text}
                  </p>
                </div>

              </div>
            </section>
          </div>
        );
      }
    })}
  </div >
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
