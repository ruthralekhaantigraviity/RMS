import { Outlet } from 'react-router-dom';
import ManagerSidebar from '../components/ManagerSidebar';
import Topbar from '../components/Topbar';
import SubscriptionBanner from '../components/SubscriptionBanner';

const ManagerLayout = () => {
    return (
        <div className="flex flex-col h-screen overflow-hidden font-sans">
            <SubscriptionBanner />
            <div className="flex flex-1 overflow-hidden bg-gray-50">
                <ManagerSidebar />
            
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                <Topbar />
                
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-8">
                    <Outlet />
                </main>
            </div>
            </div>
        </div>
    );
};

export default ManagerLayout;
