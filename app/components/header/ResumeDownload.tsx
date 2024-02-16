import React from "react";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import IconButton from "@mui/material/IconButton";

const ResumeDownload = ({ isMobile }: { isMobile: boolean }) => {
  const handleDownload = () => {
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Sagun Saluja Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <IconButton
        aria-label="download resume"
        color="inherit"
        onClick={handleDownload}
        sx={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
        }}
        className="bg-secondary hover:bg-secondary-dark text-white flex font-bold py-2 px-4 rounded transition-all duration-300 shadow-sm focus:outline-none focus:shadow-outline"

      >
        <CloudDownloadIcon />
      </IconButton>
  );
};

export default ResumeDownload;
