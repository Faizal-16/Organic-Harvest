'use client';

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Faizal Ahmed",
      position: "Founder",
      image: "https://avatars.githubusercontent.com/u/200369650?v=4",
    },
  ];

  return (
    <div>
      <Head>
        <title>About Us | OrganicHarvest</title>
        <meta
          name="description"
          content="Learn about our mission to provide healthy organic produce"
        />
      </Head>

      <Header />

      <section className="about-hero">
        <div className="container">
          <h1 className="text-4xl font-bold">Our Story</h1>
          <p>From farm to table - our commitment to organic excellence</p>
        </div>
      </section>

      <section className="about-mission">
        <div className="container">
          <h2 className="section-title text-3xl">Our Mission</h2>
          <p
            className="text-center"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            At OrganicHarvest, we're dedicated to providing the freshest, most
            nutritious organic produce while supporting sustainable farming
            practices that protect our planet for future generations.
          </p>

          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>
                We use farming methods that regenerate the soil and protect
                ecosystems.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">❤️</div>
              <h3>Health</h3>
              <p>
                Our produce is grown without synthetic pesticides or GMOs for
                your family's health.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🤝</div>
              <h3>Community</h3>
              <p>
                We partner with local farmers to strengthen our regional food
                system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <h2 className="section-title text-3xl">Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                <h3 className="team-name">{member.name}</h3>
                <p className="team-position">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
