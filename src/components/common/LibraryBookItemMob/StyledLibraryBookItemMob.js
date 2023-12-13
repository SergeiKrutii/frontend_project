import styled from "styled-components";

const StyledBookItem = styled.div({
	width: "270px",
	minHeight: "120px",
	background: "white",
	marginTop: 10,
});

const StyledItemTitleBook = styled.div({
	// width: 175,
	display: "flex",
	marginLeft: 22,
	paddingTop: 13,
});

const StyledNameBook = styled.p({
	marginLeft: 13,
	fontSize: 12,
	fontWeight: 500,
	color: "#242A37",
});

const StyledTableMobile = styled.table({
	marginLeft: 55,
});

const StyledTableLine = styled.tr({
	height: 10,
});

const StyledTableChapter = styled.th({
	height: 20,
	width: 63,
	color: "#898F9F",
	fontSize: 12,
	fontWeight: 500,
	textAlign: "left",
});

const StyledTableMeaning = styled.th({
	fontSize: 12,
	fontWeight: 500,
	textAlign: "left",
});

const StyledRatingBox = styled.div({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	marginTop: 3,
});
const StyledRatingChapter = styled.div({
	height: 20,
	width: 65,
	color: "#898F9F",
	fontSize: 12,
	fontWeight: 500,
});
const StyledRatingStarsBox = styled.div({
	display: "flex",
});

export {
	StyledBookItem,
	StyledItemTitleBook,
	StyledNameBook,
	StyledTableMobile,
	StyledTableLine,
	StyledTableChapter,
	StyledTableMeaning,
	StyledRatingChapter,
	StyledRatingBox,
	StyledRatingStarsBox,
};
