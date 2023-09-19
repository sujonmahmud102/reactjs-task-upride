import { useEffect, useState } from "react";
import TabContent1 from "./TabContent/TabContent1";
import TabContent2 from "./TabContent/TabContent2";
import TabContent3 from "./TabContent/TabContent3";
import Pagination from "../Pagination/Pagination";
import Tabs from "../Tabs/Tabs";

const Bookings = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [bookings, setBookings] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);


    // Function to handle tab change
    const handleTabChange = (tabNumber) => {
        // Reset the current page to 1 when switching tabs
        setCurrentPage(1);
        setActiveTab(tabNumber);
    };



    useEffect(() => {
        const firebaseURL = 'https://upride-internships-default-rtdb.firebaseio.com/.json';

        fetch(firebaseURL)
            .then((response) => response.json())
            .then((data) => {
                const allBookings = [];

                // Check if online_bookings is an object and add its values to allBookings
                if (data.online_bookings && typeof data.online_bookings === 'object') {
                    allBookings.push(...Object.values(data.online_bookings));
                }

                // Check if offline_bookings is an object and add its values to allBookings
                if (data.offline_bookings && typeof data.offline_bookings === 'object') {
                    allBookings.push(...Object.values(data.offline_bookings));
                }

                setBookings(allBookings);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // filter bookings

    const activeBookings = bookings.filter(b => b.bookingStatus === "SUCCESS");
    const completedBookings = bookings.filter(b => b.bookingStatus === "COMPLETED");
    const cancelBookings = bookings.filter(b => b.bookingStatus === "CANCELLED");

    // pagination process

    // active items
    const itemsPerPage = 10;
    const totalItemsActive = activeBookings.length;
    const totalPagesActive = Math.ceil(totalItemsActive / itemsPerPage);

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Simulate fetching data for the current page
    const fetchItemsForActive = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const items = activeBookings.slice(startIndex, endIndex);
        return items;
    };

    const activeBookingsForPage = fetchItemsForActive();

    // completed items
    const totalItemsCompleted = completedBookings.length;
    const totalPagesCompleted = Math.ceil(totalItemsCompleted / itemsPerPage);


    // Simulate fetching data for the current page
    const fetchItemsForCompleted = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        let endIndex = startIndex + itemsPerPage;
        if (endIndex > completedBookings.lenth) {
            endIndex = startIndex;
        }

        console.log(currentPage, itemsPerPage, endIndex)
        const items = completedBookings.slice(startIndex, endIndex);
        return items;

    };

    const completedBookingsForPage = fetchItemsForCompleted();


    // cancelled items
    const totalItemsCancelled = cancelBookings.length;
    const totalPagesCancel = Math.ceil(totalItemsCancelled / itemsPerPage);


    // Simulate fetching data for the current page
    const fetchItemsForCancel = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const items = cancelBookings.slice(startIndex, endIndex);
        return items;
    };

    const cancelBookingsForPage = fetchItemsForCancel();


    return (
        <div>
            <div>
                <Tabs
                    activeTab={activeTab}
                    setActiveTab={handleTabChange} />
            </div>
            <div className="tab-content">
                {activeTab === 1 && (
                    <>
                        <TabContent1 activeBookings={activeBookingsForPage} />
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPagesActive}
                            onPageChange={onPageChange} />
                    </>
                )}

                {activeTab === 2 && (
                    <>
                        <TabContent2 completedBookings={completedBookingsForPage} />
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPagesCompleted}
                            onPageChange={onPageChange} />
                    </>
                )}

                {activeTab === 3 && (
                    <>
                        <TabContent3 cancelBookings={cancelBookingsForPage} />
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPagesCancel}
                            onPageChange={onPageChange} />
                    </>
                )}
            </div>
        </div>
    );
};

export default Bookings;