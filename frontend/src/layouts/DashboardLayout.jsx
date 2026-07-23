import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { useAuth } from '../context/AuthContext';
import VerificationBlockedOverlay from '../components/VerificationBlockedOverlay';

const DashboardLayout = () => {
    const { restaurant } = useAuth();
    const location = useLocation();

    const isUnverified = restaurant && restaurant.verificationStatus !== 'Verified';
    const isVerificationPage = location.pathname === '/admin/verification';

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
            <Sidebar />
            
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                <Topbar />
                
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 md:p-8">
                    {isUnverified && !isVerificationPage ? (
                        <VerificationBlockedOverlay />
                    ) : (
                        <Outlet />
                    )}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
