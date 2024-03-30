import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { mobileChart, desctopChart } from "./ChartConfig";
import { StyledChartContainer, StyledChartParagraph } from "./StyledChart";
import { useMatchMedia } from "helpers/mediaQuery";
import LinkPageAdd from "components/common/linkPageAdd";
import goalsSelectors from "redux/goal/goalsSelectors";

const Chart = ({ pagePerDay, results }) => {
  const { isMobile, isDesktop, isTablet } = useMatchMedia();
  const isTraningBegin = useSelector(goalsSelectors.selectIsTraningBegin);
  const calcFactPage = (results) => {
    const arrFactPage = [];
    results?.map((elem) => arrFactPage.push(Number(elem.pageAmount)));

    return isMobile ? arrFactPage.slice(-3) : arrFactPage.slice(-6);
  };

  const chartDate = {
    planPages: Array.from({ length: 3 }, () => pagePerDay),
    factPagePerDay: calcFactPage(results),
  };
  const chartDateT = {
    planPages: Array.from({ length: 6 }, () => pagePerDay),
    factPagePerDay: calcFactPage(results),
  };

  return (
    <StyledChartContainer>
      <StyledChartParagraph>
        КІЛЬКІСТЬ СТОРІНОК \ ДЕНЬ {pagePerDay ? pagePerDay : "0"}
      </StyledChartParagraph>
      {isMobile && mobileChart(chartDate)}
      {isTablet && desctopChart(chartDateT, 215)}
      {isDesktop && desctopChart(chartDateT, 175)}
      {isMobile && !isTraningBegin && (
        <LinkPageAdd page={"/addtraningform"}>Go to form</LinkPageAdd>
      )}
    </StyledChartContainer>
  );
};

Chart.propTypes = {
  pagePerDay: PropTypes.number,
  results: PropTypes.array,
};

export default Chart;
