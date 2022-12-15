import React from "react";
import "./recs.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/all";

const RecsSection = () => {
  //console.log(item.tasks);
  return (
    <div>
      <div className="recs-section-big">
        <div className="recs-section">
          <div className="head">
            {" "}
            <h2 className="head">More items to explore</h2>
          </div>
          <div className="btn-sections">
            <div className="left-side">
              <a className="btn-next-right">
                {" "}
                <span className="arrow-btn-outer">
                  {" "}
                  <i className="arrow-btn">
                    {" "}
                    <AiOutlineLeft size="1em" />
                  </i>
                </span>{" "}
              </a>
            </div>
            <div className="items"></div>
            <div className="right-side">
              <a className="btn-next-left">
                {" "}
                <span className="arrow-btn-outer">
                  {" "}
                  <i className="arrow-btn">
                    {" "}
                    <AiOutlineRight size="1em" />
                  </i>
                </span>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecsSection;
