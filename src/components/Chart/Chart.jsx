import PropTypes from "prop-types";
import { mobileChart, desctopChart } from "./ChartConfig";
import { StyledChartContainer, StyledChartParagraph } from "./StyledChart";
import { useMatchMedia } from "helpers/mediaQuery";
import { Link } from "react-router-dom";
import LinkPageAdd from "components/common/LinkPageAdd";

const Chart = (props) => {
  const { isMobile, isDesktop, isTablet } = useMatchMedia();

  // const chartDate = {
  //   planPages: [25, 25, 25],
  //   days: [26, 24, 26],
  // };
  // const chartDateT = {
  //   planPages: [25, 25, 25, 25, 25, 25],
  //   days: [26, 24, 26, 33, 21, 27],
  // };
  const chartDate = {
    planPages: [],
    days: [0],
  };
  const chartDateT = {
    planPages: [],
    days: [0],
  };

  return (
    <StyledChartContainer>
      <StyledChartParagraph>
        КІЛЬКІСТЬ СТОРІНОК \ ДЕНЬ {chartDate.planPages[0]}
      </StyledChartParagraph>
      {isMobile && mobileChart(chartDate)}
      {isTablet && desctopChart(chartDateT, 215)}
      {isDesktop && desctopChart(chartDateT, 175)}
      {isMobile && (
        <LinkPageAdd page={"/addtraningform"}>Go to form</LinkPageAdd>
      )}
    </StyledChartContainer>
  );
};

Chart.propTypes = {};

export default Chart;
