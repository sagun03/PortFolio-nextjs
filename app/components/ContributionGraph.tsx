import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactCalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const ContributionGraph = () => {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'https://api.github.com/graphql',
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
          response.data.data.viewer.contributionsCollection.contributionCalendar;
        setContributions(contributionData.weeks);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Transform contributions data to fit into the format required by react-calendar-heatmap
  const transformedContributions = contributions.flatMap((week: any) =>
    week.contributionDays.map((day: any) => ({
      date: day.date,
      count: day.contributionCount,
    }))
  );

  return (
    <div className='font-semibold	'>
      <h1 className="my-4">GitHub Contribution Graph</h1>
      <div className="mb-4">
        <ReactCalendarHeatmap
          startDate={new Date(
            transformedContributions[0]?.date || new Date().toISOString()
          )}
          endDate={new Date(
            transformedContributions[
              transformedContributions.length - 1
            ]?.date || new Date().toISOString()
          )}
          values={transformedContributions}
          classForValue={(value) => {
            if (!value) {
              return 'color-empty';
            }
            return `color-github-${value.count}`;
          }}
          showWeekdayLabels={true}
        />
      </div>
      </div>
  );
};

export default ContributionGraph;
