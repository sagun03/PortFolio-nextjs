import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactCalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { contributionState } from "../store/atoms/githubContibution";

export interface ContributionDay {
  contributionCount: number;
  date: string;
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

const ContributionGraph = () => {
  const setContributions = useSetRecoilState(contributionState);
  const { contributions } = useRecoilValue(contributionState);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  console.log("contributions", contributions);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://api.github.com/graphql",
          {
            query: `
              query {
                viewer {
                  contributionsCollection {
                    contributionCalendar {
                      totalContributions
                      weeks {
                        contributionDays {
                          contributionCount
                          date
                        }
                      }
                    }
                  }
                }
              }
            `,
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
            },
          }
        );

        const contributionData =
          response.data.data.viewer.contributionsCollection
            .contributionCalendar;
        setContributions({ contributions: contributionData.weeks });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (contributions.length === 0) fetchData();
  }, [contributions, setContributions]);

  const handleDayClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const calculateTotalContributions = (): number => {
    return contributions.reduce(
      (total, week) =>
        total +
        week.contributionDays.reduce(
          (weekTotal, day) => weekTotal + day.contributionCount,
          0
        ),
      0
    );
  };

  const ReactCalenderHeatMap = () => (
    <ReactCalendarHeatmap
      startDate={
        new Date(
          contributions[0]?.contributionDays[0]?.date ||
            new Date().toISOString()
        )
      }
      endDate={
        new Date(
          contributions[contributions.length - 1]?.contributionDays[6]?.date ||
            new Date().toISOString()
        )
      }
      values={contributions.flatMap((week) =>
        week.contributionDays.map((day) => ({
          date: day.date,
          count: day.contributionCount,
        }))
      )}
      classForValue={(value) => {
        if (!value) {
          return "color-empty";
        }
        return `color-github-${value.count}`;
      }}
      showWeekdayLabels={true}
      onClick={handleDayClick}
    />
  );

  return (
    <div className="font-semibold">
      {contributions?.length > 0 && (
        <>
          <h1 className="my-2 font-normal">
            <strong className="text-primary">GitHub </strong> Contribution:{" "}
            <strong className="text-primary">
              {calculateTotalContributions()}{" "}
            </strong>
          </h1>
          <p className="my-2 font-normal"></p>
          <div className="mb-4 transition-all duration-300 focus:outline-none transform hover:scale-120">
            {ReactCalenderHeatMap()}
          </div>
        </>
      )}

      <Modal open={isModalOpen} disableAutoFocus onClose={closeModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800, // Adjust the width as needed
            bgcolor: "#0E1117",
            border: "2px solid #F78066",
            "&:focus": {
              border: "2px solid #F78066", // Green background color on focus
            },
            boxShadow: 24,
            p: 4,
          }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">
              Total Contributions: {calculateTotalContributions()} in the last
              year
            </h2>
            <Button onClick={closeModal} color="primary">
              <CloseIcon style={{ color: "#F78066" }} />
            </Button>
          </div>
          {ReactCalenderHeatMap()}
        </Box>
      </Modal>
    </div>
  );
};

export default ContributionGraph;
