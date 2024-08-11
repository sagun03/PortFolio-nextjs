import { useEffect, useRef } from "react";

const Experience = () => {
  return (
    <section
      className="px-4 sm:mb-2  flex-wrap  text-gray-100"
    >
      <div className="mb-6 text-gray-100">
        <h3 className="text-base sm:text-lg font-sstrongibold mb-2">
          <span className="underline pb-2">
            Associate Staff Engineer at Nagarro
          </span>
          , India (Sep 2021 - August 2023)
        </h3>
        <ul className="text-sm sm:text-base list-disc font-light list-outside p-2 px-4">
          <li>
          Spearheaded development of MRV Homepage and Global Header Application for a prominent US retail client, adding multiple features and improving robustness of overall application.
          </li>
          <li>
          Accomplished <strong className="text-primary">What&apos;s New</strong> functionality leveraging React for store associates, reducing information dissemination time by <strong className="text-primary">15%</strong> and increasing decision-making capabilities
          </li>
          <li>
          Integrated all applications into the Global Header with micro frontend concepts, reducing navigation time by <strong className="text-primary">by 5-10 sec</strong> seconds across store applications and improving operational efficiency.
          </li>
          <li>
          Pioneered the implementation of <strong className="text-primary">TypeScript</strong> to boost codebase maintainability, foster collaboration, and ensure higher code quality, resulting in a 25% reduction in bug incidents
          </li>
          <li>
          Adhered to <strong className="text-primary">Agile ceremonies</strong>, conducted thorough code reviews, and tested the E2E application flow leveraging <strong className="text-primary">Cypress</strong>, resulting in a 30% improvement in test coverage and boosted overall application reliability.
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
          Led development efforts from inception of the Plan And Buy Manager Application for a prominent media client in the UK, focusing on performance optimization and increasing user experience.
          
          </li>
          <li>
          Managed <strong className="text-primary">Bryntum Scheduler</strong> to ensure seamless scheduling capabilities and enhance operational efficiency in adding events to different advertising channels.
          </li>
          <li>
          Executed routing within applications using <strong className="text-primary">React Router</strong> and collaborated closely with UI/UX designers to achieve seamless navigation and enhance user experience, resulting in a 15% improvement in user satisfaction.
          </li>
          <li>
          Created Micro-Services APIs and conducted comprehensive unit and integration tests with <strong className="text-primary">JEST and RTL</strong>J, resulting in a 25% reduction in bugs and a 90% improvement in overall application stability
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
