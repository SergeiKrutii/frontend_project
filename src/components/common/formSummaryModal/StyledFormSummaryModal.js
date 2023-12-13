import styled from "styled-components";

const StyledFormSummaryModal = styled.div({
	width: 270,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",

	"@media screen and (min-width: 768px)": {
		width: 570,
		alignItems: "flex-start",
	},
});

const StyledFormSummaryModalBox = styled.div({
	"@media screen and (min-width: 768px)": {
		marginTop: 17,
		marginLeft: 30,
	},
});

const StyledTextSummaryModal = styled.p({
	color: "#242A37",
	fontSize: 16,
	fontWeight: 500,
	marginBottom: 10,
	marginTop: 10,
	"@media screen and (min-width: 768px)": {
		marginTop: 17,
	},
});

const StyledInputSummaryModal = styled.input({
	width: 210,
	height: 170,
	border: "1px solid #A6ABB9",

	"@media screen and (min-width: 768px)": {
		width: 510,

		justifyContent: "center",
	},
});

const StyledStarRating = styled.div({
	marginBottom: 12,
});

const StyledButtonBox = styled.div({
	marginTop: 26,
	marginBottom: 36,

	"@media screen and (min-width: 768px)": {
		display: "flex",
		justifyContent: "center",
		marginBottom: 48,
	},
});

export {
	StyledFormSummaryModal,
	StyledTextSummaryModal,
	StyledInputSummaryModal,
	StyledStarRating,
	StyledButtonBox,
	StyledFormSummaryModalBox,
};
