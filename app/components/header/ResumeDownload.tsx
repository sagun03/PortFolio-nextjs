import React from "react";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const ResumeDownload = ({  isMobile }: { isMobile: boolean}) => {
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
    <div className={`text-center ${!isMobile && 'mr-4'} `}>
      <button
        onClick={handleDownload}
        className="bg-secondary  hover:bg-secondary-dark text-white flex font-bold py-2 px-4 rounded transition-all duration-300 shadow-sm focus:outline-none focus:shadow-outline"
      >
        <CloudDownloadIcon className={`${!isMobile && 'mr-2'}`} />
      {!isMobile && 'Resume' }  
      </button>
    </div>
  );
};

export default ResumeDownload;
