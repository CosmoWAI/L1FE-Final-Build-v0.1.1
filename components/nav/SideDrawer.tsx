
import React from 'react';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const FutureFeature: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="border border-gray-700 bg-gray-900/50 rounded-lg p-4 flex items-center gap-4 hover:border-[#5FCCB0] transition-colors">
    <span className="text-3xl">{icon}</span>
    <div>
      <h4 className="font-semibold text-white">{title}</h4>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  </div>
);

export const SideDrawer: React.FC<SideDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[#141824] border-l border-gray-800 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-display font-bold text-white">The Journey Ahead</h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Coming Soon</h3>
            <FutureFeature icon="🧭" title="The Guide" description="AI mentor for reflection and purpose." />
            <FutureFeature icon="🛡️" title="Guild Raids" description="Cooperative quests for epic rewards." />
            <FutureFeature icon="🏪" title="Marketplace" description="Trade items, cosmetics, and skills." />
            <FutureFeature icon="🎓" title="Academy" description="Master real-life skills and disciplines." />
            <FutureFeature icon="🛰️" title="AR World" description="Geolocation and augmented exploration." />
          </div>

          <div className="mt-auto text-center text-xs text-gray-600">
            <p>L1FE: The Game of Becoming vFinal</p>
          </div>
        </div>
      </div>
    </>
  );
};
