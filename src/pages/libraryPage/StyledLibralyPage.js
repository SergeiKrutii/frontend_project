import styled from "styled-components";

const StyledLibralyPage = styled.div({
	// alignItems: "center",
	background: "#F6F7FB",
	minHeight: 648,
	"@media(min-width: 768px)": {
		minHeight: 1025,
	},
	"@media(min-width: 1280px)": {
		minHeight: 850,
	},
});

export { StyledLibralyPage };
