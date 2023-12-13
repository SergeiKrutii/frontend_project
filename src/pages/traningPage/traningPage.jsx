import PropTypes from "prop-types";

import MyGoals from "components/myGoals/MyGoals";
import Chart from "components/Chart/Chart";
import Container from "components/common/container";
import AddTraningMobPage from "./addTraningMob/AddTraningMobPage";
import SpriteIcon from "components/common/spriteIcon";
import { useMatchMedia } from "helpers/mediaQuery";
import {
  StyledTraningPage,
  StyledTraningPageWrapper,
  StyledTraningTimerWrapper,
} from "./StyledTraningPage";
import Timer from "components/timer/Timer";
import AddResult from "components/addResult/AddResult";

const TraningPage = (props) => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  const isTimerShow = true;

  const start = Date.now();

  const end = (year) => {
    return new Date(year, 11, 31);
  };

  const deadline = new Date(end - start);

  const books = [
    "Властелин колец",
    "Гордость и предубеждение",
    "Тёмные начала",
    "Автостопом по галактике",
  ];

  const mobMarcup = (
    <Container>
      <StyledTraningPage>
        {isTimerShow && (
          <StyledTraningTimerWrapper>
            <Timer title={"До закінчення року залишилось"} />
            <Timer title={"До досягнення мети залишилось"} />
          </StyledTraningTimerWrapper>
        )}
        <MyGoals books={books} />
        <SpriteIcon name={"icon_traningLine"} />
        <div
          style={{
            width: "270px",
            height: "161px",
            backgroundColor: "#B1B5C2",
          }}
        >
          Component template
        </div>
        <Chart />
        <AddResult />
      </StyledTraningPage>
    </Container>
  );

  const tabletMarcup = (
    <StyledTraningPage>
      <MyGoals books={books} />
      {isTimerShow && (
        <StyledTraningTimerWrapper $timer={isTimerShow}>
          <Timer
            title={"До закінчення року залишилось"}
            style={{ marginRight: "30px" }}
          />
          <Timer title={"До досягнення мети залишилось"} />
        </StyledTraningTimerWrapper>
      )}
      <AddTraningMobPage />

      <div
        style={{
          width: "270px",
          height: "161px",
          backgroundColor: "#B1B5C2",
        }}
      >
        Component template
      </div>
      <Chart />
      <AddResult />
    </StyledTraningPage>
  );

  const desctopMarcup = (
    <Container>
      <StyledTraningPage>
        <div>
          {isTimerShow && (
            <StyledTraningTimerWrapper>
              <Timer
                title={"До закінчення року залишилось"}
                style={{ marginRight: "30px" }}
              />
              <Timer title={"До досягнення мети залишилось"} />
            </StyledTraningTimerWrapper>
          )}
          <AddTraningMobPage />

          <div
            style={{
              width: "270px",
              height: "161px",
              backgroundColor: "#B1B5C2",
            }}
          >
            Component template
          </div>
          <Chart />
        </div>
        <div style={{ marginLeft: "41px" }}>
          <MyGoals books={books} />
          <AddResult />
        </div>
      </StyledTraningPage>
    </Container>
  );

  return (
    <>
      {isMobile ? mobMarcup : null}
      {isTablet ? tabletMarcup : null}
      {isDesktop ? desctopMarcup : null}
    </>
  );
};

TraningPage.propTypes = {};

export default TraningPage;
