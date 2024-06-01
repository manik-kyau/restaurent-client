
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../Componants/SectionTitle/SectionTitle';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <SectionTitle
                subHeading={'---At a Glance!---'}
                heading={'PAYMENT HISTORY'}
            ></SectionTitle>

            <div>
                <div className="">
                    <h2 className="text-3xl font-semibold">Total Users: {payments.length}</h2>
                </div>
                    {/* Table */}
                <div className="overflow-x-auto mt-8">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-white text-xl font-bold ">
                            <tr className="">
                                <th></th>
                                <th>PRICE</th>
                                <th>TRANSACTION ID</th>
                                <th>STATUS</th>
                                <th>PAYMENT DATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((payment, idx) => <tr key={idx}>
                                    <th className="text-lg font-semibold">{idx + 1}</th>
                                    <td className="text-lg font-semibold">${payment.price}</td>
                                    <td className="text-lg font-semibold">{payment.transactionId}</td>
                                    <td className="text-lg font-semibold">${payment.status}</td>
                                    <th className="text-lg font-semibold"></th>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;