import React, { PureComponent } from 'react';
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTruckMoving, FaWallet } from "react-icons/fa";
import { FaCartShopping, FaUserGroup } from "react-icons/fa6";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Sector, ResponsiveContainer, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            return res.data;
        }
    })

    // custom shape barchart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // const dataa = [
    //     {
    //         name: 'Page A',
    //         quantity: 4000,
    //         pv: 2400,
    //         amt: 2400,
    //     },
    //     {
    //         name: 'Page B',
    //         quantity: 3000,
    //         pv: 1398,
    //         amt: 2210,
    //     },
    //     {
    //         name: 'Page C',
    //         quantity: 2000,
    //         pv: 9800,
    //         amt: 2290,
    //     },
    //     {
    //         name: 'Page D',
    //         quantity: 2780,
    //         pv: 3908,
    //         amt: 2000,
    //     },
    //     {
    //         name: 'Page E',
    //         quantity: 1890,
    //         pv: 4800,
    //         amt: 2181,
    //     },
    //     {
    //         name: 'Page F',
    //         quantity: 2390,
    //         pv: 3800,
    //         amt: 2500,
    //     },
    // ];


    // Pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    // const pieChartData = chartData.map(data=>{
    //     return { name: data.category, value: data.revenue}
    // })
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];

    return (
        <div>
            <h2 className="text-3xl font-semibold">
                <span>Hi Wellcome </span>
                {
                    user?.displayName ? user.displayName : "Back"
                }!
            </h2>

            {/*  */}
            <div className="flex gap-6 mt-6">
                <div className="flex items-center gap-4 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] px-5 py-3 rounded-lg">
                    <FaWallet className="text-5xl text-white"></FaWallet>
                    <div>
                        <h2 className="text-4xl font bold text-white">${stats.revenue}</h2>
                        <p className="text-2xl font-normal text-white">Revenue</p>
                    </div>
                </div>
                {/*  */}
                <div className="flex items-center gap-4 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] px-5 py-3 rounded-lg">
                    <FaUserGroup className="text-5xl text-white"></FaUserGroup>
                    <div>
                        <h2 className="text-4xl font bold text-white">{stats.users}</h2>
                        <p className="text-2xl font-normal text-white">Customers</p>
                    </div>
                </div>
                {/*  */}
                <div className="flex items-center gap-4 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] px-5 py-3 rounded-lg">
                    <FaCartShopping className="text-5xl text-white"></FaCartShopping>
                    <div>
                        <h2 className="text-4xl font bold text-white">{stats.menuItems}</h2>
                        <p className="text-2xl font-normal text-white">Products</p>
                    </div>
                </div>
                {/*  */}
                <div className="flex items-center gap-4 bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] px-5 py-3 rounded-lg">
                    <FaTruckMoving className="text-5xl text-white"></FaTruckMoving>
                    <div>
                        <h2 className="text-4xl font bold text-white">{stats.orders}</h2>
                        <p className="text-2xl font-normal text-white">Orders</p>
                    </div>
                </div>
            </div>

            <div className="flex">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                        <Legend></Legend>
                    </BarChart>
                </div>
                <div className="w-1/2">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
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
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;