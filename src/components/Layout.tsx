import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
    drawerContent: React.ReactNode;
    isDrawerOpen: boolean;
    onDrawerToggle: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, drawerContent, isDrawerOpen, onDrawerToggle }) => {
    return (
        <div className="h-screen w-screen bg-gray-900 text-white overflow-hidden flex relative">

            {/* Main Content Area */}
            <div className="flex-1 h-full relative flex flex-col overflow-hidden">
                {children}

                {/* Drawer Toggle Button (if closed) */}
                {!isDrawerOpen && (
                    <button
                        onClick={onDrawerToggle}
                        className="absolute top-6 right-6 p-3 bg-gray-700 hover:bg-gray-600 rounded-full shadow-lg transition-all z-10"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                )}
            </div>

            {/* Right Drawer */}
            <div
                className={`h-full bg-gray-900 border-l border-gray-700 transition-all duration-300 ease-in-out flex flex-col absolute right-0 top-0 bottom-0 z-20 shadow-2xl ${isDrawerOpen ? 'w-[400px] translate-x-0' : 'w-[400px] translate-x-full'
                    }`}
            >
                <div className="p-4 flex justify-between items-center border-b border-gray-800">
                    <h2 className="text-xl font-bold">Settings</h2>
                    <button onClick={onDrawerToggle} className="p-2 hover:bg-gray-800 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                    {drawerContent}
                </div>
            </div>

        </div>
    );
};

export default Layout;
