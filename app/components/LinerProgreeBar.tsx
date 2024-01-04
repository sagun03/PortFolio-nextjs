import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearDeterminate() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }

        return oldProgress + 10;
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 9999,
      }}
    >
      <LinearProgress variant="determinate" value={progress} sx={{ backgroundColor: 'transparent' }}  />
    </Box>
  );
}
