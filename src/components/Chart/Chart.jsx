import PropTypes from "prop-types";
import { mobileChart, desctopChart } from "./ChartConfig";
import { StyledChartContainer, StyledChartParagraph } from "./StyledChart";
import { useMatchMedia } from "helpers/mediaQuery";
import { Link } from "react-router-dom";

const Chart = (props) => {
  const { isMobile, isDesktop, isTablet } = useMatchMedia();

  const chartDate = {
    planPages: [25, 25, 25],
    days: [26, 24, 26],
  };
  const chartDateT = {
    planPages: [25, 25, 25, 25, 25, 25],
    days: [26, 24, 26, 33, 21, 27],
  };

  return (
    <StyledChartContainer>
      <StyledChartParagraph>
        КІЛЬКІСТЬ СТОРІНОК \ ДЕНЬ {chartDate.planPages[0]}
      </StyledChartParagraph>
      {isMobile && mobileChart(chartDate)}
      {isTablet && desctopChart(chartDateT, 215)}
      {isDesktop && desctopChart(chartDateT, 175)}
      <Link to={"/addtraningform"}>Go to form</Link>
    </StyledChartContainer>
  );
};

Chart.propTypes = {};

export default Chart;
