import "./Chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Chart = () => {




    const data = [
        { month: "January", total: 4323 },
        { month: "February", total: 2000 },
        { month: "February", total: 3500 },
        { month: "February", total: 1400 },
        { month: "March", total: 6985 },
        { month: "April", total: 4323 },
    ]
    return (
        <div className="chart">
            <div className="title">Last 6 month Revenue</div>
            <ResponsiveContainer width="100%" aspect={3 / 1}>
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" className="chatGrid" />
                    <XAxis dataKey="month" />

                    <Tooltip />
                    <Area type="monotone" dataKey="total" stackId="1" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart