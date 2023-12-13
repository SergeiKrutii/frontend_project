import styled from "styled-components";

const StyledBookItem = styled.div({
	width: 678,
	height: 62,
	display: "flex",
	alignItems: "center",
	background: "#fff",
	marginBottom: 10,
	boxShadow: "0px 2px 3px 0px rgba(9, 30, 63, 0.10)",
});

const StyledBookTitle = styled.p((props) => ({
	fontSize: 12,
	fontWeight: 500,
	textAlign: "left",
	minWidth: props.ifResTrue ? 170 : 273,
	maxWidth: props.ifResTrue ? 170 : 273,
	overflow: "hidden",
	textOverflow: "ellipsis",
	whiteSpace: "nowrap",
	marginLeft: 15,
}));

const StyledBookAuthor = styled.p({
	fontSize: 12,
	fontWeight: 500,
	textAlign: "left",
	width: 145,
	maxWidth: 145,
	overflow: "hidden",
	textOverflow: "ellipsis",
	whiteSpace: "nowrap",
	marginLeft: 15,
});

const StyledBookYear = styled.p((props) => ({
	fontSize: 12,
	fontWeight: 500,
	textAlign: "left",
	width: 40,
	maxWidth: 40,

	marginLeft: props.ifResTrue ? 0 : 60,
}));

const StyledBookPage = styled.p((props) => ({
	fontSize: 12,
	fontWeight: 500,
	textAlign: "left",
	width: 50,
	maxWidth: 50,

	marginLeft: props.ifResTrue ? 0 : 20,
}));

export {
	StyledBookItem,
	StyledBookTitle,
	StyledBookAuthor,
	StyledBookYear,
	StyledBookPage,
};
