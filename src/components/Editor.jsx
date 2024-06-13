import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as ControlledEditor } from "react-codemirror2";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

const Container = styled(Box)`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px;
`;

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
`;

const Header = styled(Box)`
  display: flex;
  background: #060606;
  color: #aaaebc;
  justify-content: Space-between;
  font-weight: 700;
`;

export default function Editor({ heading, icon, color, value, onChange }) {
  const [open, setOpen] = useState(true);
  const handleChange = (Editor, data, value) => {
    onChange(value);
  };

  return (
    <Container style={open ? null : { flexGrow: 0 }}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              display: "flex",
              width: 20,
              height: 20,
              paddingBottom: 2,
              marginRight: 5,
              placeContent: "center",
              borderRadius: 5,
              color: "#000",
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        <CloseFullscreenIcon
          fontSize="small"
          style={{ alignSelf: "center" }}
          onClick={() => setOpen((prevState) => !prevState)}
        />
      </Header>
      <ControlledEditor
        className="controlled-editor"
        value={value}
        onBeforeChange={handleChange}
        options={{
          theme: "material",
          lineNumbers: true,
        }}
      />
    </Container>
  );
}
