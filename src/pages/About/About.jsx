import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect } from "react";
import { Page } from "../../components/Page";
import { blue, green, yellow } from "../../utils";
import { Educations, Paragraph, SkillsWrapper, Text } from "./About.styled";
import { AboutItem } from "./AboutItem";
import Skills from "./SkillBall";

import { useInView } from "react-intersection-observer";
import { useState } from "react";

export const About = () => {
  const { ref, inView } = useInView({});
  const [show, setShow] = useState(inView);
  useEffect(() => {
    setShow(inView);
  }, [inView]);

  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".about-item");
    cards.forEach((card, i) => {
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener("mouseenter", (e) => {
        if (card.classList.contains("active")) {
          return;
        }
        const state = Flip.getState(cards);
        cards.forEach((c) => {
          c.classList.remove("active");
        });
        card.classList.add("active");
        Flip.from(state, {
          duration: 0.5,
          ease: "elastic.out(1,0.9)",
          absolute: true,
        });
      });
    });
  }, []);
  return (
    <div ref={ref}>
      <Page header="About">
        <Text>
          <Paragraph>
            So, I've been tinkering with code for a while now, always chasing
            after those lightbulb moments when a problem finally clicks into a
            solution.
            <br />
            Born and bred in Bikaner, India, I guess you could say I've got a
            knack for making things from scratch—it's my version of artistic
            expression. So, here I am, just a coder trying to leave a trail of
            digital breadcrumbs wherever I go.
          </Paragraph>
          <Educations>
            <AboutItem
              color={blue}
              active
              data={{
                title: "Maharishi Markandeshwar University, Ambala",
                p: "Bachelors of Computer Engineering (2022-2026)",
                image:
                  "https://shikshaview.com/wp-content/uploads/2020/05/MMU-AMBALA-LOGO.jpg",
              }}
            />
            <AboutItem
              color={green}
              data={{
                title: "Air Force School Hindan",
                p: "Schooling (1-12)",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/1/17/Badge_of_the_Indian_Air_Force.svg",
              }}
            />
          </Educations>
        </Text>
        <SkillsWrapper>
          {show ? (
            <Canvas camera={{ position: [0, 0, 18] }}>
              <Skills />
            </Canvas>
          ) : (
            `${inView}`
          )}
        </SkillsWrapper>
      </Page>
    </div>
  );
};
