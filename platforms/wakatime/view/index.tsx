import { ViewComponent } from "@/platforms/types";
import { SiWakatime } from "react-icons/si";
import { Metrics, Line, BarStats, IBarStats } from "@/lib/@dsvgui";

export const getAllTimeSinceToday: ViewComponent = (result, config) => {
  return (
    <Metrics
      icon={SiWakatime}
      data={[{ title: "All time since today", value: result.data.text }]}
    />
  );
};

export const getTimeWithRange: ViewComponent = (result, config) => {
  const subtitle = (config.queryConfig as any).range;
  const points = result.data.map((day: any) => day.grand_total.total_seconds);

  const lines = [
    {
      leftTitle: "Line",
      leftSubtitle: subtitle,
      points,
      rightTitle: result.cumulative_total.text,
    },
  ];
  return <Line items={lines} />;
};

export const getMostUsedLanguages: ViewComponent = (result, config) => {
  const subtitles = {
    last_7_days: "Last 7 days",
    last_30_days: "Last 30 days",
    last_6_months: "Last 6 months",
    last_year: "Last year",
    all_time: "All time",
  };

  const range: keyof typeof subtitles = (config.queryConfig as any).range;
  const { language_count } = config.viewConfig as any;

  const value = result.data.languages
    .slice(0, language_count)
    .map((lang: any) => ({
      key: lang.name,
      name: lang.name,
      value: lang.total_seconds,
    }));

  return (
    <BarStats
      title="Most used languages by Wakatime"
      subtitle={subtitles[range]}
      items={value}
    />
  );
};

export const getMostRecentProjects: ViewComponent = (result, config) => {
  const viewConfig = config.viewConfig as any;
  const range: keyof typeof subtitles = (config.queryConfig as any).range;

  const subtitles = {
    last_7_days: "Last 7 days",
    last_30_days: "Last 30 days",
    last_6_months: "Last 6 months",
    last_year: "Last year",
    all_time: "All time",
  };

  let projects = result.data.projects;
  if (viewConfig.projects && viewConfig.projects !== "all") {
    const _projects = viewConfig.projects
      .split(",")
      .map((project: string) => project.trim());
    projects = projects.filter((project: any) =>
      _projects.includes(project.name)
    );
  }

  const items: IBarStats["items"] = projects.map((project: any) => ({
    key: project.name,
    name: `${project.name} (${project.text})`,
    value: project.total_seconds,
  }));

  return (
    <BarStats
      title="Most recent projects by Wakatime"
      subtitle={subtitles[range]}
      items={items}
      items_per_row={1}
    />
  );
};
