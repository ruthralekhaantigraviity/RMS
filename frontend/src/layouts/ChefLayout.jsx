import { Outlet } from 'react-router-dom';
import ChefSidebar from '../components/ChefSidebar';
import ChefTopbar from '../components/ChefTopbar';
import SubscriptionBanner from '../components/SubscriptionBanner';

const ChefLayout = () => {
    return (
        <div className="flex flex-col h-screen overflow-hidden font-sans text-gray-200 bg-[#151923]">
            <SubscriptionBanner />
            <div className="flex flex-1 overflow-hidden">
                <ChefSidebar />
            
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                <ChefTopbar />
                
                <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 bg-[#151923]">
                    <Outlet />
                </main>
            </div>
            </div>
        </div>
    );
};

export default ChefLayout;
