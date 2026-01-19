import React from 'react';
import { motion } from 'framer-motion';
import { Settings, X } from 'lucide-react';

interface LayoutProps {
    children: React.ReactNode;
    drawerContent: React.ReactNode;
    isDrawerOpen: boolean;
    onDrawerToggle: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, drawerContent, isDrawerOpen, onDrawerToggle }) => {
    return (
        <div className="flex h-screen w-screen overflow-hidden bg-gray-50 text-gray-900">
            {/* Main Content Area */}
            <main className="flex-1 h-full relative overflow-hidden flex flex-col">
                {children}
            </main>

            {/* Right Drawer */}
            <aside>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isDrawerOpen ? 400 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="h-full bg-white border-l border-gray-200 shadow-xl overflow-hidden flex flex-col z-20"
                >
                    <div className="w-[400px] h-full overflow-y-auto p-6">
                        {drawerContent}
                    </div>
                </motion.div>
            </aside>

            {/* Toggle Button (Floating) */}
            <button
                onClick={onDrawerToggle}
                aria-label={isDrawerOpen ? "Close settings" : "Open settings"}
                className="absolute top-6 right-6 z-30 p-3 bg-white hover:bg-gray-100 text-gray-700 rounded-full shadow-lg transition-all border border-gray-200"
            >
                {isDrawerOpen ? <X size={24} /> : <Settings size={24} />}
            </button>
        </div>
    );
};

export default Layout;
