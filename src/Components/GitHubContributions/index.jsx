import GitHubCalendar from "react-github-calendar";

import styles from "./GitHubContributions.module.css";

function GitHubContributions({ year }) {
  const style = {
    fontFamily: "Inter",
  };

  return (
    <div className={styles.container}>
      <GitHubCalendar
        style={style}
        username="IanValdovinos"
        year={year}
        blockMargin={5}
        showTotalCount={true}
        hideColorLegend={false}
      />
    </div>
  );
}

export default GitHubContributions;
