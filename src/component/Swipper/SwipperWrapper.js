import React from "react";
import SwipperContainer from "./SwipperContainer";

const SwipperWrapper = ({
  contents,
  count,
  xxlCount,
  xlCount,
  lgCount,
  mdCount,
  xmdCount,
  smCount,
  xsCount,
  navBtnId = "navBtn",
}) => {
  return (
    <section style={{ position: "relative" }}>
      <div className="swipper">
        <div className="swiper-container auction-active">
          <SwipperContainer
            navBtnId={navBtnId}
            contents={contents}
            count={count}
            xxlCount={xxlCount}
            xlCount={xlCount}
            lgCount={lgCount}
            mdCount={mdCount}
            xmdCount={xmdCount}
            smCount={smCount}
            xsCount={xsCount}
          />
        </div>
        <div className="nav-controller-section">
          <div
            className={`auction-button-prev ${navBtnId}-next square-nav-btn`}
            style={{
              color: "white",
              height: "40px",
              width: "40px",
              borderRadius: "8px",
              background: "transparent",
              backdropFilter: "blur(100px)",
              border: "1px solid white",
              cursor: "pointer",
            }}
          >
            <span className="arrow-left">&larr;</span>
          </div>
          <div
            className={`auction-button-next ${navBtnId}-prev square-nav-btn`}
            style={{
              height: "40px",
              width: "40px",
              color: "white",
              borderRadius: "8px",
              background: "transparent",
              backdropFilter: "blur(100px)",
              border: "1px solid white",
              cursor: "pointer",
            }}
          >
            <span className="arrow-right">&rarr;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwipperWrapper;
