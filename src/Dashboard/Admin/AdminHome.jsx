import { FaFile, FaUserDoctor } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

import { PieChart, Pie, Cell } from "recharts";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const AdminHome = () => {

    

    const ProgressNumber = 76;
    const axiosPublic = useAxiosPublic()

    const { data: adminData = [] } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosPublic.get('/admin-stats')
            return res.data
        }
    })
console.log(adminData);

    // const { data: chartData = [] } = useQuery({
    //     queryKey: ['order-stats'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get('/order-stats')
    //         return res.data
    //     }
    // })

    const data = [
        {
            name: "Page A",
            uv: 4000,
            pv: 2400,
            amt: 2400
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 2290
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 2000
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 2181
        },
        {
            name: "Page F",
            uv: 2390,
            pv: 3800,
            amt: 2500
        },
        {
            name: "Page G",
            uv: 3490,
            pv: 4300,
            amt: 2100
        }
    ]

    // pie Chart 

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    const piedata = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 }
    ];

    return (
        <div>
            <div className="flex justify-evenly">
                <div className="flex flex-col items-start justify-center gap-4 w-[300px] h-[180px] border p-4 rounded-md">
                    <div className="text-4xl flex gap-10">
                        <FaUserDoctor className="text-red-500" />
                        <p>{adminData?.doctor}</p>
                    </div>
                    <div className={`flex h-2  w-[200px] items-center justify-center rounded-full bg-sky-200`}>
                        <div style={{ width: `${ProgressNumber}%` }} className={`transition-width mr-auto h-2 w-0 rounded-full  bg-red-500 duration-500`}></div>
                    </div>
                    <p className="font-semibold text-xl">Doctor</p>
                </div>

                <div className="flex flex-col items-start justify-center gap-4 w-[300px] h-[180px] border p-4 rounded-md">
                    <div className="text-4xl flex gap-10">
                        <FaUsers className="text-green-500" />
                        <p>{adminData?.user}</p>
                    </div>
                    <div className={`flex h-2  w-[200px] items-center justify-center rounded-full bg-sky-200`}>
                        <div style={{ width: `${ProgressNumber}%` }} className={`transition-width mr-auto h-2 w-0 rounded-full  bg-green-500 duration-500`}></div>
                    </div>
                    <p className="font-semibold text-xl">Patiend</p>
                </div>

                <div className="flex flex-col items-start justify-center gap-4 w-[300px] h-[180px] border p-4 rounded-md">
                    <div className="text-4xl flex gap-10">
                        <FaFile className="text-amber-400" />
                        <p>{adminData?.appointment}</p>
                    </div>
                    <div className={`flex h-2  w-[200px] items-center justify-center rounded-full bg-sky-200`}>
                        <div style={{ width: `${ProgressNumber}%` }} className={`transition-width mr-auto h-2 w-0 rounded-full  bg-amber-400 duration-500`}></div>
                    </div>
                    <p className="font-semibold text-xl">Appointment</p>
                </div>
            </div>
            <div className="flex justify-evenly mt-6">
                <div>
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </div>

                <div>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={piedata}
                            cx={200}
                            cy={200}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;