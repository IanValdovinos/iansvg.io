import styles from "./WorkExperience.module.css";

import TimelineBar from "../TimelineBar";
import WorkExperienceItem from "../WorkExperienceItem";
import ParagraphOne from "../ParagraphOne";

function WorkExperience() {
  return (
    <div className={styles.workExperiencesContainer}>
      <TimelineBar className={styles.timeline} />

      <WorkExperienceItem
        company={"General Motors"}
        position={"Software Engineer"}
        time={"2024-PRESENT"}
        location={"Warren, MI"}
        workType={"In-person"}
      >
        <ParagraphOne>
          Architected enterprise-scale, CMS-driven reusable pagebuilder blocks
          with dynamic configurability using Sanity and Contentful, enabling
          non-technical teams to manage content across 6+ production websites.
          Designed custom schemas and optimized GROQ queries, resulting in 40%
          faster content delivery.
        </ParagraphOne>
        <ParagraphOne>
          Architected enterprise-scale, CMS-driven reusable pagebuilder blocks
          with dynamic configurability using Sanity and Contentful, enabling
          non-technical teams to manage content across 6+ production websites.
          Designed custom schemas and optimized GROQ queries, resulting in 40%
          faster content delivery.
        </ParagraphOne>
        <ParagraphOne>
          Architected enterprise-scale, CMS-driven reusable pagebuilder blocks
          with dynamic configurability using Sanity and Contentful, enabling
          non-technical teams to manage content across 6+ production websites.
          Designed custom schemas and optimized GROQ queries, resulting in 40%
          faster content delivery.
        </ParagraphOne>
      </WorkExperienceItem>

      <WorkExperienceItem
        company={"General Motors"}
        position={"Software Engineer"}
        time={"2024-PRESENT"}
        location={"Warren, MI"}
        workType={"In-person"}
      >
        <ParagraphOne>
          Architected enterprise-scale, CMS-driven reusable pagebuilder blocks
          with dynamic configurability using Sanity and Contentful, enabling
          non-technical teams to manage content across 6+ production websites.
          Designed custom schemas and optimized GROQ queries, resulting in 40%
          faster content delivery.
        </ParagraphOne>
        <ParagraphOne>
          Architected enterprise-scale, CMS-driven reusable pagebuilder blocks
          with dynamic configurability using Sanity and Contentful, enabling
          non-technical teams to manage content across 6+ production websites.
          Designed custom schemas and optimized GROQ queries, resulting in 40%
          faster content delivery.
        </ParagraphOne>
        <ParagraphOne>
          Architected enterprise-scale, CMS-driven reusable pagebuilder blocks
          with dynamic configurability using Sanity and Contentful, enabling
          non-technical teams to manage content across 6+ production websites.
          Designed custom schemas and optimized GROQ queries, resulting in 40%
          faster content delivery.
        </ParagraphOne>
      </WorkExperienceItem>

      <WorkExperienceItem
        company={"General Motors"}
        position={"Software Engineer"}
        time={"2024-PRESENT"}
        location={"Warren, MI"}
        workType={"In-person"}
      >
        <ParagraphOne>
          Architected enterprise-scale, CMS-driven reusable pagebuilder blocks
          with dynamic configurability using Sanity and Contentful, enabling
          non-technical teams to manage content across 6+ production websites.
          Designed custom schemas and optimized GROQ queries, resulting in 40%
          faster content delivery.
        </ParagraphOne>
        <ParagraphOne>
          Architected enterprise-scale, CMS-driven reusable pagebuilder blocks
          with dynamic configurability using Sanity and Contentful, enabling
          non-technical teams to manage content across 6+ production websites.
          Designed custom schemas and optimized GROQ queries, resulting in 40%
          faster content delivery.
        </ParagraphOne>
        <ParagraphOne>
          Architected enterprise-scale, CMS-driven reusable pagebuilder blocks
          with dynamic configurability using Sanity and Contentful, enabling
          non-technical teams to manage content across 6+ production websites.
          Designed custom schemas and optimized GROQ queries, resulting in 40%
          faster content delivery.
        </ParagraphOne>
      </WorkExperienceItem>
    </div>
  );
}

export default WorkExperience;
