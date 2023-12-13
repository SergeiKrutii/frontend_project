import styled from "styled-components";

const StyledFormMobileBox = styled.div({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",

	"@media screen and (min-width: 1280px)": {
		flexDirection: "row",
		alignItems: "flex-start",
	},
});

const StyledFormDestopBox = styled.div({
	"@media screen and (min-width: 1280px)": {
		minWidth: 594,
	},
});

const StyledForm = styled.form({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",

	"@media screen and (min-width: 768px)": {},

	"@media screen and (min-width: 1280px)": {
		display: "flex",
		flexDirection: "row",
		marginTop: 68,
	},
});

const StyledInputWrapper = styled.div({
	position: "relative",

	"&:nth-child(-n + 3)": {
		marginBottom: 48,

		"@media screen and (min-width: 1280px)": {
			marginBottom: 0,
			marginLeft: 39,
		},
	},

	"&:nth-child(n + 3):nth-child(-n + 4)": {
		"@media screen and (min-width: 768)": {
			marginLeft: 25,
		},
	},

	"&:first-child": {
		marginTop: 90,
		"@media screen and (min-width: 768px)": {
			marginTop: 0,
		},

		"@media screen and (min-width: 1280px)": {},
	},
});

const StyledInputWrapperBoxMobile = styled.div`
	display: flex;

	@media screen and (min-width: 768px) {
		// margin-bottom: 48px;
	}

	${StyledInputWrapper}:nth-child(n + 2):nth-child(-n + 3) {
		@media screen and (min-width: 768px) {
			margin-left: 27px;
		}
	}
`;

const StyledLabel = styled.label({
	position: "absolute",
	left: 0,
	bottom: 40,
	color: "#898F9F",
	fontSize: 14,
	fontWeight: 500,
	lineHeight: "38px",
});

const StyledInputName = styled.input({
	background: "inherit",
	boxShadow: "0px 1px 2px 0px rgba(29, 29, 27, 0.15) inset",
	width: 255,
	paddingLeft: 13,
	height: 42,
	border: "1px solid #A6ABB9",

	"@media screen and (min-width: 768px)": {
		width: 581,
		marginTop: 58,
	},

	"@media screen and (min-width: 1280px)": {
		width: 331,
		marginTop: 0,
	},

	"&:focus": {
		background: "#FFF",
		outline: "none",
		boxShadow: "0px 1px 2px 0px rgba(29, 29, 27, 0.15) inset",
		border: "1px solid rgba(0, 102, 204, 0)",
	},
});

const StyledInputAuthor = styled.input({
	background: "inherit",
	boxShadow: "0px 1px 2px 0px rgba(29, 29, 27, 0.15) inset",
	width: 255,
	paddingLeft: 13,
	height: 42,
	border: "1px solid #A6ABB9",

	"@media screen and (min-width: 768px)": {
		width: 235,
	},
	"&:focus": {
		background: "#FFF",
		outline: "none",
		boxShadow: "0px 1px 2px 0px rgba(29, 29, 27, 0.15) inset",
		border: "1px solid rgba(0, 102, 204, 0)",
	},
});

const StyledInputYear = styled.input({
	background: "inherit",
	boxShadow: "0px 1px 2px 0px rgba(29, 29, 27, 0.15) inset",
	width: 255,
	paddingLeft: 13,
	height: 42,
	border: "1px solid #A6ABB9",

	"@media screen and (min-width: 768px)": {
		width: 132,
	},

	"@media screen and (min-width: 1280px)": {
		width: 115,
	},
	"&:focus": {
		background: "#FFF",
		outline: "none",
		boxShadow: "0px 1px 2px 0px rgba(29, 29, 27, 0.15) inset",
		border: "1px solid rgba(0, 102, 204, 0)",
	},
});

const StyledInputPages = styled.input({
	background: "inherit",
	boxShadow: "0px 1px 2px 0px rgba(29, 29, 27, 0.15) inset",
	width: 255,
	paddingLeft: 13,
	height: 42,
	border: "1px solid #A6ABB9",

	"@media screen and (min-width: 768px)": {
		width: 132,
	},

	"@media screen and (min-width: 1280px)": {
		width: 115,
	},
	"&:focus": {
		background: "#FFF",
		outline: "none",
		boxShadow: "0px 1px 2px 0px rgba(29, 29, 27, 0.15) inset",
		border: "1px solid rgba(0, 102, 204, 0)",
	},
});

const StyledFormBtn = styled.button({
	width: 171,
	height: 42,
	border: "1px solid var(--deep-blue, #242A37)",
	background: "#F6F7FB",
	marginTop: 35,

	"@media screen and (min-width: 768px)": {
		marginTop: 0,
	},

	"@media screen and (min-width: 1280px)": {
		marginTop: 68,
		marginLeft: 45,
	},
});

export {
	StyledForm,
	StyledInputWrapper,
	StyledLabel,
	StyledFormBtn,
	StyledInputName,
	StyledInputAuthor,
	StyledInputYear,
	StyledInputPages,
	StyledFormMobileBox,
	StyledInputWrapperBoxMobile,
	StyledFormDestopBox,
};
