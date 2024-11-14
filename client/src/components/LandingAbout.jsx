import React, { useState } from 'react';

const LandingAbout = () => {
    const [hoveredStat, setHoveredStat] = useState(null);

    const stats = [
        { icon: 'M3 3h18v18H3V3zm16 16V5H5v14h14zm-5-7v-3h3v3h-3zm0 5v-3h3v5h-5v-2h2zm-9-5h3v5H5v-5zm0-4h3v3H5V8zm4 0h3v3H9V8zm4 4h3v3h-3v-3z', title: '150+', subtitle: 'Number of stores' },
        { icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', title: '4', subtitle: 'Countries' },
        { icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', title: '4000+', subtitle: 'Products' },
        { icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z', title: '45', subtitle: 'Varieties of Premium dates' },
    ];

    return (
      <div>
            <section className="bg-gradient-to-br from-purple-900 to-indigo-800 text-white py-16 relative overflow-hidden px-6 md:px-12 lg:px-24">
                <div className="container mx-auto relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">NUTTY DATES AND NUTS</h2>
                    <div className="max-w-3xl mx-auto mb-8 md:mb-12 text-center">
                        <p className="text-base md:text-lg leading-relaxed">
                            Welcome to NUTTY, where an unwavering commitment with a heritage of quality spans over 40 years. Indulge in our unique
                            assortment of dates, harvested from our own organic farm in the Middle East, featuring over 40 exquisite varieties.
                        </p>
                    </div>
                    <div style={{padding:'0px 15%'}}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="text-center transform transition-all duration-300 ease-in-out hover:scale-105"
                                    onMouseEnter={() => setHoveredStat(index)}
                                    onMouseLeave={() => setHoveredStat(null)}
                                >
                                    <div className={`inline-block p-3 md:p-4 rounded-full mb-3 md:mb-4 transition-colors duration-300 ${hoveredStat === index ? 'bg-amber-400' : 'bg-amber-500'}`}>
                                        <svg className="w-8 h-8 md:w-10 md:h-10 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">{stat.title}</h3>
                                    <p className="text-xs md:text-sm text-amber-300">{stat.subtitle}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 bg-purple-900 opacity-50" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </section>
      </div>
    );
};

export default LandingAbout;
