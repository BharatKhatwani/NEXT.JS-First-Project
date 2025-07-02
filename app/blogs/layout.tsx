import React from 'react';


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="w-full border-b border-gray-700">
        <div className="flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold tracking-tight">Medium</h1>
          <div className="flex items-center gap-4">
            <button
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition font-semibold cursor-pointer"
              type="button"
            >
              Add Blog
            </button>
            
          </div>
        </div>
      </div>

      {/* Page Content */}
      <main className="p-6">{children}</main>
    </div>
  );
};

export default Layout;
