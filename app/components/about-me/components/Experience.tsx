const Experience = () => {
  return (
    <section className="px-4 sm:mb-2 experience-scroll flex-wrap sm:overflow-y-auto sm:overscroll-auto  text-gray-100">
      <div className="mb-6 text-gray-100">
        <h3 className="text-base sm:text-lg font-sstrongibold mb-2">
          <span className="underline pb-2">
            Associate Staff Engineer at Nagarro
          </span>
          , India (Sep 2021 - August 2023)
        </h3>
        <ul className="text-sm sm:text-base list-disc font-light list-outside p-2 px-4">
          <li>
            Worked on MRV Homepage and Global Header Application (
            <strong className="text-primary">Lowe&apos;s</strong>).
          </li>
          <li>
            Implemented What&apos;s New functionality suing{" "}
            <strong className="text-primary">React</strong> , so that the
            associates in stores can be up to date with the latest information.
          </li>
          <li>
            Worked on Global header to include all the apps in a single
            ecosystem which will help to reduce the time{" "}
            <strong className="text-primary">by 5-10 sec</strong> to navigate to
            different applications in stores.
          </li>
          <li>
            Implemented <strong className="text-primary">TypeScript</strong> to
            improve codebase maintainability, resulting in enhanced
            collaboration and onboarding for new team members.
          </li>
          <li>
            Participated in code reviews and other aglie ceremonies, providing
            constructive feedback and ensuring adherence to best practices and
            coding standards.
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
        {/* Experience bullet points */}
        <ul className="list-disc text-sm sm:text-base font-light list-outside p-2 px-4">
          <li>
            Worked on Plan And Buy Manager Application (
            <strong className="text-primary">Dentsu UK</strong>).
          </li>
          <li>
            Developed and maintained responsive web applications using{" "}
            <strong className="text-primary"> MERN Stack</strong>
          </li>
          <li>
            Worked on{" "}
            <strong className="text-primary">Bryntum Scheduler.</strong>
          </li>
          <li>
            Wrote comprehensive unit and integration tests using JEST and RTL,
            resulting in a significant reduction in bugs (25%) and enhancing
            overall application stability by{" "}
            <strong className="text-primary">90%.</strong>
          </li>
          <li>Created Microservices api using Express.js and Graphql.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
