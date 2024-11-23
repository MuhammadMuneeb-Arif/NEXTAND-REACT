import React from 'react';
 import Image from 'next/image';
const CardLayout: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto my-12">
      {/* First Row: 2 Cards */}
      <div className="flex flex-wrap -mx-4 mb-8">
        <div className="w-full md:w-1/2 px-4 mb-4">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <Image
            src="/download.jpeg"
            alt='governor image'
            height={200}
            width={400}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 mb-4">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transition-transform transform hover:-translate-y-2">
          <Image
            src="/download.jpeg"
            alt='governor image'
            height={200}
            width={400}
            />
          </div>
        </div>
      </div>

      {/* Second Row: 3 Cards */}
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/3 px-4 mb-4">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transition-transform transform hover:-translate-y-2">
          <Image
            src="/download.jpeg"
            alt='governor image'
            height={200}
            width={400}
            />
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-4">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transition-transform transform hover:-translate-y-2">
          <Image
            src="/download.jpeg"
            alt='governor image'
            height={200}
            width={400}
            />
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-4">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transition-transform transform hover:-translate-y-2">
          <Image
            src="/download.jpeg"
            alt='governor image'
            height={200}
            width={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
