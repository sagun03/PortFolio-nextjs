const Experience = () => {
  return (
    <section
      className="px-2 sm:px-4 sm:mb-2  flex-wrap  text-gray-100"
    >
      <div className="mb-6 text-gray-100">
        <h3 className="text-base sm:text-lg font-semibold mb-2">
          <span className="underline pb-2">
            Associate Staff Engineer at Nagarro
          </span>
          , India (Sep 2021 - August 2023)
        </h3>
        <ul className="text-sm sm:text-base list-disc list-outside p-2 px-4">
          <li>
          Played a pivotal role in creation of the MRV Homepage and Global Header Application for a leading US retail client, refining feature functionality and strengthening the application&apos;s overall stability.
          </li>
          <li>
          Enhanced decision-making capabilities by <strong className="text-primary">40%</strong> through React-based <strong className="text-primary">What&apos;s New</strong> functionality for store associates.
          </li>
          <li>
          Implemented <strong className="text-primary">micro frontend concepts</strong> to integrate all applications into the Global Header, resulting in a <strong className="text-primary">5 min</strong> reduction in navigation time and improved operational efficiency.
          </li>
          <li>
          Led the successful implementation of <strong className="text-primary">TypeScript</strong>, resulting in a <strong className="text-primary">35% reduction</strong> in bug incidents, enhancing codebase maintainability.
          </li>
          <li>
          Improved test coverage from <strong className="text-primary">40% to 85%</strong> using <strong className="text-primary">Cypress</strong>, ensuring comprehensive testing and higher quality application.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-base sm:text-lg font-semibold  text-gray-100 mb-2">
          <span className="underline pb-2">
            Associate Engineer at Successive Technologies
          </span>
          , India (Jan 2019 - Sep 2021)
        </h3>
        <ul className="list-disc text-sm sm:text-base font-light list-outside p-2 px-4">
          <li>
          Played a key role in the early development of the Plan And Buy Manager Application for a leading media client in the UK, with a strong focus on performance optimization and elevating the user experience.
          </li>
          <li>
          Enhanced Bryntum Scheduler <strong className="text-primary">performance by 60%</strong>, refining scheduling capabilities and decreasing operational time, leading to improved productivity.
          </li>
          <li>
          Collaborated with UI/UX designers to optimize application routing using <strong className="text-primary">React Router</strong>, leading to a <strong className="text-primary">80%</strong> increase in user satisfaction and improved user experience.
          </li>
          <li>
          Optimized database queries and implemented caching strategies, resulting in a reduction in API response times by up to <strong className="text-primary">25%</strong> and enhancing overall application performance.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
