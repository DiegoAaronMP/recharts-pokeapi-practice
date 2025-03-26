import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts";
import { formatStatsNames } from "../../helpers/formatStatsNames";

export const PokeRadarChart = (stats) => {
  return (
    <RadarChart data={stats}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" tickFormatter={formatStatsNames}/>
        <PolarRadiusAxis />
        <Radar dataKey="base" stroke="#205781" fill="#205781" fillOpacity={0.6} />
    </RadarChart>
  )
}
