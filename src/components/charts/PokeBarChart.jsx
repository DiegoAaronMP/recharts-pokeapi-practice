import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { formatStatsNames } from '../../helpers/formatStatsNames';

export const PokeBarChart = (stats) => {
    return (
        <BarChart
            data={stats}
            layout="vertical"
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" tickFormatter={formatStatsNames} type="category" />
            <Tooltip labelFormatter={formatStatsNames} />
            <Bar dataKey="base" fill="#205781" />
        </BarChart>
    )
}
