
const Tabs = ({ activeTab, setActiveTab }) => {

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <div className="tabs text-base border-b-4">
            <a
                className={`tab  ${activeTab === 1
                    ? 'text-[#FF5757] text-base font-semibold border-b-4 border-[#FF5757]'
                    : ''
                    }`}
                onClick={() => handleTabClick(1)}
            >
                Active
            </a>
            <a
                className={`tab  ml-8 ${activeTab === 2
                    ? 'text-[#FF5757] font-semibold border-b-4 border-[#FF5757]'
                    : ''
                    }`}
                onClick={() => handleTabClick(2)}
            >
                Completed
            </a>
            <a
                className={`tab  ml-8 ${activeTab === 3
                    ? 'text-[#FF5757] text-base font-semibold border-b-4 border-[#FF5757]'
                    : ''
                    }`}
                onClick={() => handleTabClick(3)}
            >
                Cancelled
            </a>
        </div>
    );
};

export default Tabs;