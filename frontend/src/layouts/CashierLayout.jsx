import { Outlet } from 'react-router-dom';
import CashierSidebar from '../components/CashierSidebar';
import CashierTopbar from '../components/CashierTopbar';
import SubscriptionBanner from '../components/SubscriptionBanner';

const CashierLayout = () => {
    return (
        <div className="flex flex-col h-screen overflow-hidden font-sans">
            <SubscriptionBanner />
            <div className="flex flex-1 overflow-hidden bg-gray-50">
                <CashierSidebar />
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                <CashierTopbar />
                <main className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                    <div className="h-full">
                        <Outlet />
                    </div>
                </main>
            </div>
            </div>
        </div>
    );
};

export default CashierLayout;
