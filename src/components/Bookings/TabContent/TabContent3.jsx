

const TabContent3 = ({ cancelBookings }) => {


    const formatDate = (epochTime) => {
        const date = new Date(epochTime);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };


    return (
        <div className="overflow-x-auto my-5 rounded-t-xl rounded-b-xl border">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="bg-base-200 ">
                        <th>Name</th>
                        <th>Date</th>
                        <th>Package Details</th>
                        <th>Payment Mode</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row  */}
                    {
                        cancelBookings.map((b, i) => (
                            <tr key={i}>
                                <td className="flex items-center gap-4">
                                    <img className="w-6 h-6 rounded-full" src={b.workshopImage} alt="" />
                                    {b.workshopTitle}
                                </td>
                                <td>{formatDate(b.bookingEpochTime)}</td>
                                <td>{b.packageTitle} </td>
                                <td className={`text-white rounded-3xl  ${b.offlineBooking ? "bg-yellow-500" : "bg-[#35DBA2]"}`} >{`${b.offlineBooking ? "Offline Payment" : "Online Payment"}`} </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TabContent3;