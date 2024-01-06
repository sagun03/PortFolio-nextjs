const IntroSection = () => {
  return (
    <section className="bg-gray-900 rounded-lg shadow-md p-8 mb-6">
      <div className="text-lg">
        {/* Introduction */}
        <p className="mb-4">
          <span role="img" aria-label="Wave">
            👋
          </span>{" "}
          Hey there! I'm Sagun Saluja, a passionate Software Developer based in
          Mississauga, Ontario.{" "}
        </p>
        <p className="text-base font-light">
          <span role="img" aria-label="Rocket">
            🚀
          </span>{" "}
          My tech odyssey began during my Btech years when coding was just a
          distant concept. However, everything changed during my final semester
          internship at{" "}
          <strong className="text-primary">Smalt and Beryl</strong>, where{" "}
          <strong className="text-primary">Angular</strong> became my gateway to
          the world of programming. 🌐 That pivotal experience ignited a fervent
          passion for front-end development, leading me to set my sights on
          companies wholly dedicated to this domain. Stepping into{" "}
          <strong className="text-primary">Successive Technologies</strong>{" "}
          opened up the expansive universe of the{" "}
          <strong className="text-primary">MERN Stack</strong>, transforming my
          curiosity into a full-blown love for web development.
          <br />
          <br />
          🚀 At <strong className="text-primary">Nagarro</strong>, collaborating
          on projects with <strong className="text-primary">Lowe's</strong>, a
          Fortune 50 giant, heightened my frontend expertise, shaping me into a
          more seasoned developer. The challenges and experiences I've
          encountered have been instrumental in empowering me to excel in React
          and Next.js
          <br />
          <br />
          🌟 Currently enrolled in a comprehensive{" "}
          <strong className="text-primary">Full Stack Development</strong>{" "}
          course in Canada, I'm enriching my skill set and have honed my
          expertise in backend technologies like MongoDB, Node.js, and Python.
          Meanwhile, I've strongbarked on exhilarating journeys into{" "}
          <strong className="text-primary">
            Competitive programming and open-source{" "}
          </strong>
          contributions.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
