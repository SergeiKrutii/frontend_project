import styled from "styled-components";

const StyledCategotyLibrary = styled.div({
	// paddingTop: 20,
	marginTop: 40,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
});

const StyledCategoryItemBox = styled.div({
	"@media screen and (min-width: 768px)": {
		"&:not(:first-child)": {
			marginTop: 20,
		},
	},
});

const StyledCategoryTitle = styled.h1({
	fontWeight: "600",
	fontSize: "19px",
	lineHeight: "38px",
});

export { StyledCategotyLibrary, StyledCategoryTitle, StyledCategoryItemBox };
