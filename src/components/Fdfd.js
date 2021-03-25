import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
const defaultProps = {
	"width": "300px",
	"height": "300px",
	"background": "#3620b8"
};
const overrides = {};

const Fdfd = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		{children}
	</Box>;
};

Object.assign(Fdfd, { ...Box,
	defaultProps,
	overrides
});
export default Fdfd;