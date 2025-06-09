import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); // State to manage current active page

  // Function to render the correct page based on state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'musicCompositionSales':
        return <MusicCompositionSalesPage />; // Music Composition Sales page now handles its sub-pages
      case 'musicTuition':
        return <MusicTuitionPage />; // Music Tuition page now handles its sub-pages
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />; // Default to home page
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md p-4 sticky top-0 z-10">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-indigo-700 mb-4 sm:mb-0">
            Winston Holford Music
          </div>
          <ul className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
            <li>
              <button
                onClick={() => setCurrentPage('home')}
                className={`py-2 px-4 rounded-lg transition-colors duration-200 ${
                  currentPage === 'home'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-indigo-700 hover:bg-indigo-100'
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('about')}
                className={`py-2 px-4 rounded-lg transition-colors duration-200 ${
                  currentPage === 'about'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-indigo-700 hover:bg-indigo-100'
                }`}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('musicCompositionSales')}
                className={`py-2 px-4 rounded-lg transition-colors duration-200 ${
                  currentPage === 'musicCompositionSales'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-indigo-700 hover:bg-indigo-100'
                }`}
              >
                Music Composition and Sales
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('musicTuition')}
                className={`py-2 px-4 rounded-lg transition-colors duration-200 ${
                  currentPage === 'musicTuition'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-indigo-700 hover:bg-indigo-100'
                }`}
              >
                Music Tuition
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('contact')}
                className={`py-2 px-4 rounded-lg transition-colors duration-200 ${
                  currentPage === 'contact'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-indigo-700 hover:bg-indigo-100'
                }`}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
          {renderPage()} {/* Render the selected page component */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-700 text-white p-4 text-center">
        <div className="container mx-auto">
          &copy; {new Date().getFullYear()} Winston Holford Music. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-800 mb-4">
        Welcome to Winston Holford Music!
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
        Your destination for exceptional music composition, sales, and dedicated tuition.
        Explore our offerings and discover the world of music with us.
      </p>
      <div className="mt-8">
        <img
          src="https://placehold.co/600x300/a78bfa/ffffff?text=Homepage+Hero"
          alt="Homepage Hero"
          className="rounded-lg shadow-lg w-full max-w-xl mx-auto"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x300/a78bfa/ffffff?text=Image+Load+Error"; }}
        />
      </div>
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  return (
    <div className="py-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-800 mb-6 text-center">
        About Winston Holford Music
      </h1>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
          <div className="text-lg text-gray-700 leading-relaxed">
            <p className="mb-4">
              Winston Holford is a musician with over **thirty years experience** hailing from the
              Caribbean island of **Barbados**.
            </p>
            <p className="mb-4">
              A proficient **trombonist**, Winston graduated from the Barbados Community College
              with an Associate degree in Applied Arts (Music).
            </p>
          </div>
          <div>
            <img
              src="uploaded:190_25269025318_3154_n.jpg-37496845-ef40-4621-a6e5-044aee730442"
              alt="Winston Holford with Trombone"
              className="rounded-lg shadow-lg w-full mb-4"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/818cf8/ffffff?text=Image+Load+Error"; }}
            />
            <p className="text-sm text-gray-600 text-center">Winston Holford, proficient trombonist.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
          <div>
            <img
              src="uploaded:24323_402680677518_3621111_n.jpg-9a44f36f-b77c-45d1-aa62-97bc550a5439"
              alt="Winston Holford Performing"
              className="rounded-lg shadow-lg w-full mb-4"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/818cf8/ffffff?text=Image+Load+Error"; }}
            />
             <p className="text-sm text-gray-600 text-center">Winston Holford performing.</p>
          </div>
          <div className="text-lg text-gray-700 leading-relaxed">
            <p className="mb-4">
              He is also a trained teacher with a Bachelors degree in Educational Leadership
              and Management and a Master's degree in Management and Educational Leadership.
            </p>
            <p>
              Over the years, he has performed with top Barbadian entertainers and groups such as
              **Arturo Tappin**, the **Boogie Knights Band**, and lately, the **Troubadours**.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
          <div className="text-lg text-gray-700 leading-relaxed">
            <p className="mb-4">
              Winston is currently the **organist and choir director** at the Bethlehem Moravian Church
              where his myriad experiences complement the church's eclectic approach to its
              worship and music ministry.
            </p>
            <p>
              His diverse background enriches the musical landscape of the church, blending traditional
              and contemporary styles seamlessly.
            </p>
          </div>
          <div>
            <img
              src="uploaded:Me on the organ.jpg-b6044d35-d2b8-4452-be71-4a9b1bdc61a3"
              alt="Winston Holford on the Organ"
              className="rounded-lg shadow-lg w-full mb-4"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/818cf8/ffffff?text=Image+Load+Error"; }}
            />
            <p className="text-sm text-gray-600 text-center">Winston Holford as organist.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
          <div>
            <img
              src="uploaded:Me Preaching.jpg-3ecf8f01-f431-4a86-80ef-54b4c5f7a47b"
              alt="Winston Holford Preaching"
              className="rounded-lg shadow-lg w-full mb-4"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/818cf8/ffffff?text=Image+Load+Error"; }}
            />
            <p className="text-sm text-gray-600 text-center">Winston Holford sharing a message.</p>
          </div>
          <div className="text-lg text-gray-700 leading-relaxed">
            <p className="mb-4">
              His leadership in the music ministry extends beyond playing, fostering a vibrant
              and inclusive musical experience for the congregation.
            </p>
            <p>
              Winston Holford has a similar approach to his **compositions and arrangements**
              where you may find pieces with Western Art Music, Caribbean folk and pop influences.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 items-start mb-8 w-full max-w-2xl">
          <img
            src="uploaded:20191127_203034.jpg-fc436c47-2083-4df7-8920-f5e9eb53622b"
            alt="Winston Holford with Choir"
            className="rounded-lg shadow-lg w-full"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/818cf8/ffffff?text=Image+Load+Error"; }}
          />
          <p className="text-sm text-gray-600 text-center">Winston Holford leading a group.</p>
        </div>
      </div>
    </div>
  );
};

// Music Composition & Sales Sub-Page: Policy
const MusicCompositionArrangingPolicyPage = () => {
  return (
    <div className="py-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4 text-center">
        Music Composition & Arranging Policy
      </h2>
      <div className="prose max-w-none text-left mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Our policy outlines the terms and conditions for engaging Winston Holford Music for composition and arranging services.
          We strive for clarity and mutual understanding in all our collaborations.
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
          <li><strong>Project Scope:</strong> All projects begin with a detailed agreement on the scope, style, and delivery timelines.</li>
          <li><strong>Revisions:</strong> A specified number of revisions are included in the initial quote. Additional revisions may incur extra charges.</li>
          <li><strong>Copyright & Usage:</strong> Ownership and usage rights will be clearly defined in the service agreement for each project.</li>
          <li><strong>Payment Terms:</strong> Payment schedules will be agreed upon upfront, typically involving an initial deposit and final payment upon completion.</li>
          <li><strong>Confidentiality:</strong> All client information and project details are treated with the utmost confidentiality.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          For custom composition or arranging inquiries, please contact us for a personalized consultation.
        </p>
      </div>
    </div>
  );
};

// Music Composition & Sales Sub-Page: Samples of published compositions and arrangements
const PublishedSamplesPage = () => {
  return (
    <div className="py-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4 text-center">
        Samples of Published Compositions & Arrangements
      </h2>
      <div className="prose max-w-none text-center mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Explore a selection of Winston Holford's published works, showcasing a diverse range
          of compositions and arrangements across various genres and instrumentation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Breath of God</h3>
            <p className="italic text-gray-700 mb-2">Simply Beautiful - Roger Gittens</p>
            <p className="text-gray-700 mb-4">Genre: Classical, Instrumentation: String Quartet</p>
            <img
              src="https://placehold.co/400x200/c7d2fe/3730a3?text=Breath+of+God"
              alt="Music Sample 1"
              className="rounded-lg shadow-sm w-full mb-4"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x200/c7d2fe/3730a3?text=Image+Load+Error"; }}
            />
            <p className="text-gray-600 text-sm">A brief description of the piece, its inspiration, and critical reception.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Praise the Lord who Reigns Above</h3>
            <p className="italic text-gray-700 mb-2">arranged for the Bethlehem Moravian Church in 2024 for their annual harvest celebrations.</p>
            <p className="text-gray-700 mb-4">Original: Folk Song, Arrangement for: Concert Band</p>
            <img
              src="https://placehold.co/400x200/a5b4fc/3730a3?text=Praise+the+Lord"
              alt="Music Sample 2"
              className="rounded-lg shadow-sm w-full mb-4"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x200/a5b4fc/3730a3?text=Image+Load+Error"; }}
            />
            <p className="text-gray-600 text-sm">Details about the arrangement process and its intended ensemble.</p>
          </div>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mt-8">
          More samples are continually being added. Check back soon for updates!
        </p>
      </div>
    </div>
  );
};

// Music Composition & Sales Sub-Page: Store Page
const MusicStorePage = () => {
  return (
    <div className="py-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4 text-center">
        Online Store
      </h2>
      <div className="prose max-w-none text-center mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Purchase Winston Holford's compositions and arrangements directly from our partners.
          Click the links below to browse our available scores and parts.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-8">
          <a
            href="https://www.jwpepper.com/sheet-music/search.jsp?keywords=ArrangeMe+by+Hal+Leonard"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-lg shadow-md bg-white hover:bg-gray-50 transition-colors duration-200 text-center flex flex-col items-center w-full sm:w-1/2 md:w-1/3"
          >
            <img
              src="https://placehold.co/150x75/4f46e5/ffffff?text=ArrangeMe"
              alt="ArrangeMe by Hal Leonard Logo"
              className="mb-4 rounded-md"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x75/4f46e5/ffffff?text=Image+Load+Error"; }}
            />
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">ArrangeMe by Hal Leonard</h3>
            <p className="text-gray-600 text-sm">
              Discover arrangements available through Hal Leonard's ArrangeMe platform.
            </p>
          </a>
          <a
            href="https://www.scoreexchange.com/profiles/WinstonHolford"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-lg shadow-md bg-white hover:bg-gray-50 transition-colors duration-200 text-center flex flex-col items-center w-full sm:w-1/2 md:w-1/3"
          >
            <img
              src="https://placehold.co/150x75/4338ca/ffffff?text=Score+Exchange"
              alt="Score Exchange Logo"
              className="mb-4 rounded-md"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x75/4338ca/ffffff?text=Image+Load+Error"; }}
            />
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Score Exchange</h3>
            <p className="text-gray-600 text-sm">
              Browse and purchase scores directly from Winston Holford's Score Exchange profile.
            </p>
          </a>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mt-8">
          Links will open in a new tab. Happy browsing!
        </p>
      </div>
    </div>
  );
};


// Music Composition and Sales Page Component (now acting as a hub for sub-pages)
const MusicCompositionSalesPage = () => {
  const [currentSubPage, setCurrentSubPage] = useState('overview'); // State for composition sub-pages

  const renderCompositionSalesSubPage = () => {
    switch (currentSubPage) {
      case 'policy':
        return <MusicCompositionArrangingPolicyPage />;
      case 'samples':
        return <PublishedSamplesPage />;
      case 'store':
        return <MusicStorePage />;
      case 'overview':
      default:
        return (
          <div className="py-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-800 mb-6">
              Music Composition & Sales
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Winston Holford Music offers comprehensive music composition and arranging services,
              along with a catalog of published works available for purchase.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">Our Policy</h3>
                <p className="text-gray-600 mb-4">Understand our terms for composition and arranging services.</p>
                <button
                  onClick={() => setCurrentSubPage('policy')}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  View Policy
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">Published Samples</h3>
                <p className="text-gray-600 mb-4">Explore a selection of our compositions and arrangements.</p>
                <button
                  onClick={() => setCurrentSubPage('samples')}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  View Samples
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">Online Store</h3>
                <p className="text-gray-600 mb-4">Purchase our sheet music through our trusted partners.</p>
                <button
                  onClick={() => setCurrentSubPage('store')}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Go to Store
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="py-4">
      {/* Sub-navigation for Music Composition and Sales */}
      <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mb-8">
        <button
          onClick={() => setCurrentSubPage('overview')}
          className={`py-2 px-4 rounded-lg text-sm transition-colors duration-200 ${
            currentSubPage === 'overview'
              ? 'bg-green-600 text-white shadow-md'
              : 'text-green-700 hover:bg-green-100'
          }`}
        >
          Comp. & Sales Overview
        </button>
        <button
          onClick={() => setCurrentSubPage('policy')}
          className={`py-2 px-4 rounded-lg text-sm transition-colors duration-200 ${
            currentSubPage === 'policy'
              ? 'bg-green-600 text-white shadow-md'
              : 'text-green-700 hover:bg-green-100'
          }`}
        >
          Policy
        </button>
        <button
          onClick={() => setCurrentSubPage('samples')}
          className={`py-2 px-4 rounded-lg text-sm transition-colors duration-200 ${
            currentSubPage === 'samples'
              ? 'bg-green-600 text-white shadow-md'
              : 'text-green-700 hover:bg-green-100'
          }`}
        >
          Published Samples
        </button>
        <button
          onClick={() => setCurrentSubPage('store')}
          className={`py-2 px-4 rounded-lg text-sm transition-colors duration-200 ${
            currentSubPage === 'store'
              ? 'bg-green-600 text-white shadow-md'
              : 'text-green-700 hover:bg-green-100'
          }`}
        >
          Online Store
        </button>
      </div>

      {renderCompositionSalesSubPage()}
    </div>
  );
};

// CVQ Music Performance Level 1 Page (new component based on provided HTML)
const CVQMusicPerformanceLevel1Page = () => {
  const units = [
    { id: 'ECEMUS0021A', title: 'Follow health, safety and security procedures', descriptor: 'This unit deals with the skills and knowledge required to follow health, safety and security procedures and applies to all individuals operating in the music industry.', elements: [
        {
            title: 'Follow occupational health and safety procedures',
            criteria: [
                { pc: '1.1', text: 'Health and safety procedures are complied with in accordance with organisational policies and safety plans.', knowledge: ['Major safety requirements for work locations', 'Organisational health, safety and security procedures', 'Relevant industry safety guidelines'], skills: ['Follow health, safety and security procedures'] },
                { pc: '1.2', text: 'Breaches of health, safety and security procedures are identified and promptly reported to the appropriate parties.', knowledge: ['Designated personnel responsible for OHS'], skills: ['Identify and appropriately deal with security risks'] },
                { pc: '1.3', text: 'It is ensured that all work activities are undertaken in a safe manner and do not present a hazard to others.', knowledge: ['Major causes of accidents', 'Major hazards in the workplace'], skills: ['Identify major causes of workplace accidents'] }
            ]
        },
        {
            title: 'Deal with emergency situations',
            criteria: [
                { pc: '2.1', text: 'Potential emergency situations are recognised and the required action is determined and taken within scope of individual responsibility.', knowledge: ['Emergency evacuation procedures'], skills: ['Follow health, safety and security procedures'] },
                { pc: '2.2', text: 'Emergency procedures are correctly followed in accordance with organisational policies and procedures.', knowledge: ['Organisational health, safety and security procedures'], skills: ['Follow established safety procedures'] },
                { pc: '2.3', text: 'Assistance is promptly sought from colleagues and/or supervisors where appropriate.', knowledge: [], skills: ['Communicate effectively'] },
                { pc: '2.4', text: 'Details of emergency situations are accurately reported in accordance with organisational policies and procedures.', knowledge: ['Safety report and safety implementation reports'], skills: ['Explain safety procedures to others'] }
            ]
        },
        {
            title: 'Maintain personal safety standards',
            criteria: [
                { pc: '3.1', text: 'Appropriate safety clothing, footwear and, where relevant, personal protection equipment are used to ensure own and others health and safety.', knowledge: ['Relevant industry safety guidelines'], skills: ['Use personal protective equipment'] },
                { pc: '3.2', text: 'Appropriate measures are undertaken to prevent injury or impairment related to workplace activities and to control workplace hazards.', knowledge: ['Major hazards that exist in the workplace'], skills: ['Control workplace hazards'] },
                { pc: '3.3', text: 'Safe manual handling and lifting are carried out to avoid back strain and other injuries in accordance with the relevant safety policies and procedures.', knowledge: ['Posture requirements to avoid strain or injury'], skills: ['Safe manual handling and lifting'] },
                { pc: '3.4', text: 'Correct posture is maintained and ergonomics are consistently practiced in all work environments.', knowledge: ['Posture requirements to avoid strain or injury'], skills: ['Maintain correct posture'] },
                { pc: '3.5', text: 'Appropriate actions are taken that contributes to maintaining a safe and secure work environment.', knowledge: ['Major safety requirements for entertainment venues'], skills: ['Follow health, safety and security procedures'] },
                { pc: '3.6', text: 'The health and safety standards of music industry venues and equipment are complied with.', knowledge: ['Relevant national OHS legislation and codes of practice'], skills: ['Follow established safety procedures'] }
            ]
        },
        {
            title: 'Take steps to minimise the potential risk of noise and loud music',
            criteria: [
                { pc: '4.1', text: 'The risks for people exposed to excessive sound/noise levels and possible responses to such risks are identified.', knowledge: ['Noise control methods'], skills: ['Identify risks associated with noise'] },
                { pc: '4.2', text: 'Methods of protecting hearing and the corresponding hearing protection devices are identified.', knowledge: ['Noise control methods'], skills: ['Identify hearing protection methods'] },
                { pc: '4.3', text: 'Hearing protection devices are evaluated and the appropriate device is used correctly.', knowledge: ['Noise control methods'], skills: ['Use hearing protection devices correctly'] },
                { pc: '4.4', text: 'A sound level meter is used at music industry venues to ensure appropriate sound level in accordance with health and safety procedures.', knowledge: ['Noise control methods'], skills: ['Use a sound level meter'] }
            ]
        },
        {
            title: 'Provide feedback on health, safety and security',
            criteria: [
                { pc: '5.1', text: 'Occupational health and safety issues requiring attention are promptly identified.', knowledge: ['Designated personnel responsible for OHS'], skills: ['Identify OHS issues'] },
                { pc: '5.2', text: 'Occupational health and safety issues are raised with the designated person in accordance with organisation and legislative requirements.', knowledge: ['Relevant national OHS legislation'], skills: ['Communicate effectively with designated personnel'] }
            ]
        }
    ]},
    { id: 'ECECOR0121A', title: 'Communicate in the workplace', descriptor: 'This unit deals with the skills and knowledge required to communicate in the workplace.', elements: [
        {
            title: 'Gather, convey and receive instructions, information and ideas',
            criteria: [
                { pc: '1.1', text: 'Verbal/written instructions received and responded to with correct actions.', knowledge: ['Organisation\'s policies, plans and procedures'], skills: ['Identify work requirements and process workplace documentation'] },
                { pc: '1.2', text: 'Information to achieve work responsibilities is collected from appropriate sources.', knowledge: ['Sources of information on work processes'], skills: ['Organise work priorities'] },
                { pc: '1.3', text: 'Input from internal and external sources is sought and used to develop and refine new ideas and approaches.', knowledge: ['Types of communication'], skills: ['Request advice, receive feedback and work with a team'] },
                { pc: '1.6', text: 'Effective listening and speaking skills are used in oral communication.', knowledge: ['Principles of effective communication'], skills: ['Apply questioning and active listening techniques'] },
                { pc: '1.8', text: 'Questions are used to gain extra information and clarification.', knowledge: ['Principles of effective communication'], skills: ['Apply questioning and active listening techniques'] }
            ]
        },
        {
            title: 'Carry out face-to-face routine communication',
            criteria: [
                { pc: '2.2', text: 'Appropriate language and tone is used and the effect of personal body language is considered.', knowledge: ['Principles of effective communication in relation to non-verbal communication'], skills: ['Communicate non-verbally in a clear and precise manner'] },
                { pc: '2.4', text: 'Cultural and social differences are identified and sensitivity to differences is displayed.', knowledge: ['Relevant legislation regarding anti-discrimination'], skills: ['Relate to people from a range of social, cultural and ethnic backgrounds'] }
            ]
        },
        {
            title: 'Draft routine correspondence',
            criteria: [
                { pc: '4.1', text: 'Written information and ideas are presented in clear and concise language and the information is presented in a manner that is easily understood by the recipient(s).', knowledge: ['Correct spelling, grammar and punctuation'], skills:['Demonstrate literacy skills in regard to basic workplace documents'] },
                { pc: '4.2', text: 'Correspondence is drafted and presented within designated timelines.', knowledge: ['Standard turnaround times'], skills:['Organise work priorities and arrangements'] }
            ]
        }
    ]},
    { id: 'ECECOR0031A', title: 'Manage own work and learning', descriptor: 'This unit deals with skills and knowledge for self-management in the workplace.', elements: [
        {
            title: 'Develop personal time management skills',
            criteria: [
                { pc: '1.2', text: 'Time is managed and work is planned so that tasks are completed according to order of priority and within established deadlines.', knowledge: ['Time management techniques'], skills: ['Plan own work'] },
                { pc: '1.3', text: 'Work is rescheduled and re-prioritised work where necessary to accommodate important variations in the workload.', knowledge: ['Time management techniques'], skills: ['Set personal goals'] }
            ]
        },
        {
            title: 'Manage own learning',
            criteria: [
                { pc: '2.1', text: 'Own learning needs to achieve set goals are identified in consultation with the appropriate personnel.', knowledge: ['Career paths within the relevant industry context', 'Skill requirements for different job roles'], skills: ['Assess personal achievement'] },
                { pc: '2.2', text: 'Opportunities to meet learning needs are identified and the appropriate course of action is taken in consultation with the appropriate personnel.', knowledge: ['Skill requirements for different job roles'], skills: ['Assess personal achievement'] }
            ]
        },
        {
            title: 'Receive and act constructively on personal feedback',
            criteria: [
                { pc: '3.2', text: 'Feedback given on performance is assessed and applied appropriately to improve own work performance.', knowledge: ['General stress management techniques', 'Effective communication techniques'], skills: ['Communicate effectively and precisely'] }
            ]
        }
    ]},
    { id: 'ECECOR0041A', title: 'Work with others', descriptor: 'This unit deals with the skills and knowledge needed to work harmoniously and effectively with team members.', elements: [
        {
            title: 'Participate in the work/group process',
            criteria: [
                { pc: '1.2', text: 'Own role and role of each individual in meeting work requirements are correctly identified and own role is performed to expectations.', knowledge: ['Individual roles and responsibilities'], skills: ['Apply teamwork principles'] },
                { pc: '1.5', text: 'Work place activities are conducted in compliance with the organization\'s work policies, procedures and conventions covering acceptable workplace conduct.', knowledge: ['Acceptable workplace conduct'], skills: ['Manage own work'] },
                { pc: '1.7', text: 'Strengths of individuals are utilised to develop others in the group and the sharing of knowledge is incorporated in the group/process activities.', knowledge: ['Team work principles'], skills: ['Apply teamwork principles'] }
            ]
        },
        {
            title: 'Contribute to the flow of information and ideas',
            criteria: [
                { pc: '2.1', text: 'Work outcomes are enhanced by sharing information and ideas relevant to the work activity with others.', knowledge: ['Effective communication techniques'], skills: ['Communicate effectively'] },
                { pc: '2.3', text: 'Information and ideas required to assist in the achievement of work requirements are sought from the appropriate persons when required.', knowledge: ['Effective communication techniques'], skills: ['Apply listening and questioning skills'] }
            ]
        },
        {
            title: 'Deal effectively with issues, problems and conflicts',
            criteria: [
                { pc: '3.2', text: 'Issues, problems and conflicts are discussed with team members and solutions are suggested or they are referred to the appropriate person.', knowledge: ['Conflict resolution techniques'], skills: ['Work harmoniously with others'] }
            ]
        }
    ]},
    // ... all other unit data objects from the previous script ...
    { id: 'ECECOR0051A', title: 'Work in a culturally diverse environment', descriptor: 'This unit deals with the skills and knowledge to work successfully with people from diverse social and cultural backgrounds.', elements: [
        {
            title: 'Communicate with individuals from diverse backgrounds',
            criteria: [
                { pc: '1.1', text: 'Individuals and groups from different backgrounds, cultures and languages are treated with respect and sensitivity.', knowledge: ['Principles that underpin cultural awareness', 'General characteristics of the different cultural groups'], skills: ['Demonstrate sensitivity to cultural differences'] },
                { pc: '1.3', text: 'An effort is made to communicate using gestures, simple words and other appropriate methods where language barriers exist.', knowledge: ['Cultures of immigrants and relevant cultural protocols'], skills: ['Use appropriate gestures and phrases to overcome language difficulties'] }
            ]
        },
        {
            title: 'Deal with cross cultural misunderstandings',
            criteria: [
                { pc: '2.1', text: 'Issues, which may cause conflict or misunderstanding in the workplace, are identified.', knowledge: ['Principles and techniques for resolution of cross-cultural communication difficulties'], skills: ['Identify and deal with issues in the workplace that may cause conflict/misunderstanding'] },
                { pc: '2.4', text: 'Every effort is made to resolve misunderstandings, taking account of cultural considerations.', knowledge: ['Principles of equal employment opportunity and anti-discrimination legislation'], skills: ['Communicate with people from a range of social and cultural background'] }
            ]
        }
    ]},
    { id: 'ECECOR0111A', title: 'Deal with conflict and resolve complaints', descriptor: 'This unit describes the skills and knowledge required to handle difficult interpersonal situations with both customers and colleagues.', elements: [
        {
            title: 'Identify conflict situations',
            criteria: [
                { pc: '1.1', text: 'Identify potential for conflict quickly and take swift and tactful action to prevent escalation.', knowledge: ['Types of conflict in the workplace and typical causes', 'Conflict theory, including signs, stages, levels, factors involved, results'], skills: ['Conflict resolution skills'] }
            ]
        },
        {
            title: 'Resolve conflict situations',
            criteria: [
                { pc: '2.4', text: 'Use accepted conflict resolution techniques to manage the conflict situation and develop solutions.', knowledge: ['Conflict resolution skills and strategies incorporating communication skills', 'Group processes and roles people play'], skills: ['Negotiation', 'Problem solving'] }
            ]
        },
        {
            title: 'Resolve escalated complaints',
            criteria: [
                { pc: '3.3', text: 'Convey an empathetic and helpful attitude using active listening and questioning.', knowledge: ['Procedures for handling customer complaints'], skills: ['Assertiveness', 'Listening', 'Non-verbal communication'] }
            ]
        }
    ]},
    { id: 'ECECOR0141A', title: 'Use and adapt to changes in technology', descriptor: 'This unit deals with evaluating and adapting to technological changes within the entertainment and culture industry.', elements: [
        {
            title: 'Evaluate information about new technology',
            criteria: [
                { pc: '1.1', text: 'Where necessary, information is sought about the current technological changes that apply to the relevant industry.', knowledge: ['Relevant information sources on technology', 'Information gathering methodologies'], skills: ['Access information about new technology'] }
            ]
        },
        {
            title: 'Adapt to changes in the new technology',
            criteria: [
                { pc: '2.1', text: 'Appropriate training on new technology is undertaken to improve work practices when required.', knowledge: ['Relevant technologies'], skills: ['Undertake training in new technology'] },
                { pc: '2.4', text: 'The new technology is implemented in current work practices.', knowledge: ['Impact of technology on relevant industry', 'Features and capabilities of equipment'], skills: ['Incorporate the use of new technology into current work practices'] }
            ]
        }
        ,
        {
            title: 'Update knowledge of new technology',
            criteria: [
                { pc: '3.2', text: 'Current changes in technology are monitored and those changes are implemented when required.', knowledge: [], skills: ['Monitor changes in technology'] },
                { pc: '3.3', text: 'Updated knowledge is shared with colleagues and the relevant information is incorporated into day-to-day work activities.', knowledge: [], skills: ['Communicate information accurately'] }
            ]
        }
    ]},
    { id: 'ECECOR0081A', title: 'Share ideas in the workplace', descriptor: 'This unit deals with sharing ideas with others in the workplace.', elements: [
        {
            title: 'Clarify idea/s for communication',
            criteria: [
                { pc: '1.2', text: 'Information relevant to the idea/s is gathered with consideration of intellectual property, moral rights and copyright requirements.', knowledge: ['Sources of information relevant to ideas', 'Intellectual property, moral rights and copyright requirements'], skills: ['Methods of access and gather information'] }
            ]
        },
        {
            title: 'Prepare to communicate idea',
            criteria: [
                { pc: '2.2', text: 'Suitable communication method is selected based on audience.', knowledge: ['Appropriate communication methods', 'Presentation techniques'], skills: ['Apply presentation skills'] }
            ]
        },
        {
            title: 'Share idea/s',
            criteria: [
                { pc: '3.2', text: 'Feedback is sought, discussed and accepted.', knowledge: ['Feedback mechanism'], skills: ['Accept positive and negative feedback', 'Listen to ideas and opinions of others with an open mind'] },
                { pc: '3.3', text: 'Idea/s is/are modified accordingly.', knowledge: ['Basic evaluation and review procedures'], skills: ['Experiment with ideas and modify them'] }
            ]
        }
    ]},
    { id: 'ECEGEN0021A', title: 'Move and set up instrument and equipment', descriptor: 'This unit deals with loading and transporting instruments and/or equipment to a venue.', elements: [
        {
            title: 'Plan for the safe manual handling of instruments and equipment',
            criteria: [
                { pc: '1.1', text: 'The correct placing of equipment and instruments is determined through communications with performers, head of technical crew and/or musical director as required.', knowledge: ['Relevant principles and regulations of occupational health and safety'], skills: ['Communicate clearly to achieve planned outcomes', 'Work effectively with others'] }
            ]
        },
        {
            title: 'Load and/or unload a van or truck with equipment',
            criteria: [
                { pc: '3.1', text: 'Verification is made of all the items to be packed and packaging is done in a manner to minimise movement in transit.', knowledge: ['Transporting and packaging procedures', 'Care and security of instruments and equipment'], skills: ['Ensure the care and security of instruments and equipment'] }
            ]
        },
        {
            title: 'Move and set up instruments and equipment',
            criteria: [
                { pc: '4.2', text: 'Assistance is given to the setting up of the instruments and equipment according to agreed plans and in ensuring the safety of players, crew, front of house staff and the public.', knowledge: ['Rigging and de-rigging equipment', 'Relevant installation procedures'], skills: ['Follow simple technical cues', 'Install and test instruments/equipment'] }
            ]
        }
    ]},
    { id: 'ECEMUS0691A', title: 'Develop basic skills for playing or singing music', descriptor: 'This unit deals with the skills and knowledge required to begin to practise as a performing musician.', elements: [
        {
            title: 'Identify the range and capability of the instrument',
            criteria: [
                { pc: '1.3', text: 'The mechanism by which the sound is produced in the selected instrument/voice and musical style is identified.', knowledge: ['Method to produce sound in relevant instrument', 'Sound production mechanism in selected instrument or voice'], skills: ['Discriminate pitch and/or rhythm'] }
            ]
        },
        {
            title: 'Maintain and care for the instrument',
            criteria: [
                { pc: '2.1', text: 'Appropriate methods are used to care for, move and store the instrument in accordance with established procedures and manufacturers\' instructions.', knowledge: ['Parts of the instrument', 'Occupational Health and Safety requirements'], skills: ['Use available and appropriate printed or audio tutoring resources'] }
            ]
        },
        {
            title: 'Prepare to produce basic notes, rhythms and/or chords',
            criteria: [
                { pc: '3.4', text: 'A practice plan to develop technical skills is developed.', knowledge: [], skills: ['Plan practice time and setting realistic technical development goals'] },
                { pc: '3.5', text: 'The correct posture is used to extend technique and to develop healthy performance habits in line with Occupational Health and Safety principles.', knowledge: ['Occupational Health and Safety requirements'], skills: [] }
            ]
        },
        {
            title: 'Identify the musical elements of the selected style',
            criteria: [
                { pc: '4.1', text: 'Simple melodies, chords or rhythm patterns that are characteristic of selected repertoire are identified and played/sang.', knowledge: ['Basic repertoire relevant to the selected instrument and musical style'], skills: ['Reproduce basic musical patterns', 'Use basic instrumental techniques'] }
            ]
        }
    ]},
    { id: 'ECEMUS0651A', title: 'Develop music knowledge and listening skills', descriptor: 'This unit deals with the development of music knowledge and listening skills in selected music styles.', elements: [
        {
            title: 'Develop music knowledge and experience of a range of repertoire',
            criteria: [
                { pc: '1.3', text: 'Printed or electronic sources of information about music in various music styles are identified and this information is used to develop an awareness of music.', knowledge: ['Relevant resources to broaden musical experience and knowledge'], skills: ['Source and access information'] }
            ]
        },
        {
            title: 'Develop music listening skills',
            criteria: [
                { pc: '2.2', text: 'Different styles of music are compared in terms of: chord patterns and keys, scales, melody and themes, texture and tone colours, instruments/voices used, instrumental/vocal styles of playing, dynamics/volume, structure/form of the music, commercial success and/or potential.', knowledge: ['Selected styles and conventions in performance', 'Chords and scales, forms, textures, performance techniques'], skills: ['Listen critically', 'Discern musical styles'] }
            ]
        },
        {
            title: 'Develop understanding of music products and artists',
            criteria: [
                { pc: '3.1', text: 'Reliable sources of information are used to develop knowledge of music products, their creators and musicians.', knowledge: ['The work of successful musicians in selected musical styles or genres'], skills: ['Source and access information'] }
            ]
        },
        {
            title: 'Develop awareness of music production',
            criteria: [
                { pc: '4.2', text: 'A range of live and recorded music is listened to in order to identify the contribution of technical and sound design to the success of the product.', knowledge: ['Technology used for producing or enhancing music', 'Music production'], skills: ['Listen critically'] }
            ]
        }
    ]},
    { id: 'ECCMUS0051A', title: 'Prepare self for performance', descriptor: 'This unit deals with the skills and knowledge required to demonstrate the technical and creative skills developed through rehearsal and private practice.', elements: [
        {
            title: 'Plan for performance',
            criteria: [
                { pc: '1.1', text: 'A plan is prepared for performance to ensure performance readiness to required standard.', knowledge: ['Performance and rehearsal protocols'], skills: ['Work within established timeframes'] },
                { pc: '1.6', text: 'Appearance is planned to meet the musical context and/or requirements of the presenter.', knowledge: ['Solo and ensemble protocols'], skills: ['Match repertoire with identified target audience'] }
            ]
        },
        {
            title: 'Practise instrument and/or act',
            criteria: [
                { pc: '2.3', text: 'Instrumental/voice techniques are developed to improve performance outcomes.', knowledge: ['Vocabulary relevant to area of specialisation', 'Instrument knowledge'], skills: ['Apply and extend appropriate repertoire knowledge'] }
            ]
        },
        {
            title: 'Observe OHS principles in private practice',
            criteria: [
                { pc: '4.4', text: 'Principles of Occupational Health and Safety are applied in physical stance and posture during practice sessions and performance.', knowledge: ['Reading and writing music', 'Improvisation in performance'], skills: [] }
            ]
        }
    ]},
    { id: 'ECEMUS0991A', title: 'Care and maintain instruments', descriptor: 'This unit deals with the skills and knowledge required to care and maintain musical instruments.', elements: [
        {
            title: 'Prepare for maintenance activities',
            criteria: [
                { pc: '1.2', text: 'Correct methods for caring and maintaining instruments are determined from manufacturer\'s specifications and enterprise policies and procedures.', knowledge: ['Sources of information on instrument care and maintenance', 'Organisational policies and procedures'], skills: ['Read and interpret technical information'] }
            ]
        },
        {
            title: 'Maintain instrument',
            criteria: [
                { pc: '2.1', text: 'Instruments and accessories are inspected for damages.', knowledge: ['Common defects resulting from improper maintenance', 'Accessories associated with particular instrument'], skills: ['Identify and rectify faults'] },
                { pc: '2.4', text: 'Appropriate procedures are followed in the caring for and maintaining instruments and associated accessories in accordance with manufacturer\'s instructions and enterprise policies and procedures.', knowledge: ['Cleaning and maintenance requirements of the instrument'], skills: ['Apply cleaning and maintenance procedures'] }
            ]
        },
        {
            title: 'Store instrument',
            criteria: [
                { pc: '4.4', text: 'Instrument is safely stored in required storage area in accordance with manufacturer\'s instructions and enterprise policies and procedures.', knowledge: ['Instrument storage requirements'], skills: ['Prepare and store instrument'] }
            ]
        }
    ]},
    { id: 'ECEMUS0462A', title: 'Compose a simple song or tune', descriptor: 'This unit deals with the skills and knowledge required for the development of technical and expressive skills to foster innovative expression in song or tune writing.', elements: [
        {
            title: 'Determine the artistic purpose of the song/tune and use appropriate song writing tools',
            criteria: [
                { pc: '1.1', text: 'The outcomes of the song/tune are identified to reflect, where required, an understanding of audience and market requirements and commercial viability.', knowledge: ['Repertoire knowledge in area of specialisation'], skills: ['Match creative work with target, potential or existing audience'] }
            ]
        },
        {
            title: 'Compose a melody to express the lyrics of a song',
            criteria: [
                { pc: '3.1', text: 'Appropriate harmonic/chord or sequences in the melody are used to promote the meaning and style/mood of the lyrics.', knowledge: ['Using musical elements effectively such as harmony, melody, rhythm and form', 'Chords and scales, forms, textures or other elements of musical organisation'], skills: ['Understanding appropriate intonation, dynamics, phrasing, rhythm, instrumentation, voicing and expression'] },
                { pc: '3.5', text: 'Melodic techniques that enhance the expression of concepts in the lyrics are used.', knowledge: ['Understanding and achieving appropriate/coherent musical nuance'], skills: ['Experiment with musical elements and styles to develop own voice'] }
            ]
        },
        {
            title: 'Set down the song',
            criteria: [
                { pc: '4.2', text: 'The song is set down in a format that reflects performance practice and custom of the style.', knowledge: ['Using musical protocols appropriate to the style', 'Setting down creative work effectively for performers'], skills: ['Demonstrate originality and innovative approaches in the creation of music'] }
            ]
        }
    ]},
    { id: 'ECCART0012A', title: 'Develop self as an artist (e)', descriptor: 'This unit deals with the skills and knowledge required for the development of technical and conceptual skills required to work as a practising artist (e).', elements: [
        {
            title: 'Acquire and develop technical skills',
            criteria: [
                { pc: '1.4', text: 'The capabilities of materials, tools and equipment to develop technical skills are tested.', knowledge: ['Physical properties and capabilities of materials, tools and equipment and their applications'], skills: ['Produce works of art'] }
            ]
        },
        {
            title: 'Develop conceptual skills and ideas',
            criteria: [
                { pc: '2.3', text: 'The work of others is studied to stimulate conceptual and technical skills development.', knowledge: ['Knowledge about theoretical and historical contexts relevant to the area(s) of specialisation(s)'], skills: ['Discern and listen to advice from appropriate colleagues, experts and audiences'] }
            ]
        },
        {
            title: 'Evaluate own work',
            criteria: [
                { pc: '4.1', text: 'Constructive criticism is sought from others and applied to the improvement of own work.', knowledge: [], skills: ['Evaluate own work'] }
            ]
        },
        {
            title: 'Research work opportunities',
            criteria: [
                { pc: '5.1', text: 'Sources of information relating to work opportunities are correctly identified.', knowledge: ['Sources of information relating to work opportunities and career planning'], skills: ['Source and access information', 'Build networks'] }
            ]
        }
    ]},
    { id: 'ITICOR0011A', title: 'Carry out data entry and retrieval procedures', descriptor: 'This unit deals with the skills and knowledge required to operate computer to enter, manipulate and retrieve data.', elements: [
        {
            title: 'Initiate computer system',
            criteria: [
                { pc: '1.2', text: 'The hardware components of the computer and their functions are correctly identified.', knowledge: ['Computer hardware and software systems'], skills: ['Identify computer hardware'] }
            ]
        },
        {
            title: 'Enter data',
            criteria: [
                { pc: '2.2', text: 'Input devices selected and used are appropriate for the intended operations.', knowledge: ['Using input devices'], skills: ['Manipulate data input devices'] },
                { pc: '2.6', text: 'Data is accurately entered in the appropriate files using specified procedure and format.', knowledge: ['The operation of the data entry management system', 'Regard for accuracy and security of information'], skills: ['Key-in and format reports and letters'] }
            ]
        },
        {
            title: 'Retrieve data',
            criteria: [
                { pc: '3.3', text: 'Files and data are correctly located and accessed.', knowledge: ['Methods of locating files', 'Organisation\'s standards applicable to accessing files'], skills: ['Access data', 'Retrieve data'] }
            ]
        },
        {
            title: 'Access and transmit information via the Internet',
            criteria: [
                { pc: '7.2', text: 'Evidence of the ability to negotiate web sites to locate and access specified information and other services is efficiently demonstrated.', knowledge: ['Functions on the internet'], skills: ['Search and receive data from the internet'] }
            ]
        }
    ]},
    { id: 'ECEMUS0041A', title: 'Transfer sound', descriptor: 'This unit deals with the skills and knowledge required to transfer recorded sound from one medium to another for a production.', elements: [
        {
            title: 'Determine requirements of sound transfer',
            criteria: [
                { pc: '1.1', text: 'Liaison is established with the relevant personnel to find out equipment and sound requirements for transfer.', knowledge: ['Operational knowledge of a range of sound equipment'], skills: ['Ability to work with others'] }
            ]
        },
        {
            title: 'Transfer sound',
            criteria: [
                { pc: '2.4', text: 'Sound is transferred according to organizational procedures and in compliance with Occupational and Safety requirements.', knowledge: ['Occupational Health and Safety procedures', 'Sound transfer techniques'], skills: ['Work safely', 'Transfer sound'] },
                { pc: '2.6', text: 'Checks are made to ensure that transfer has been carried out correctly and according to organisational requirements.', knowledge: ['Simple fault finding techniques and procedures'], skills: ['Perform tests and checks'] }
            ]
        }
    ]},
    { id: 'ECEMUS0722A', title: 'Rehearse music for performance', descriptor: 'This unit deals with skills and knowledge required to organise the rehearsal process and to organise and prepare the music to the standard required.', elements: [
        {
            title: 'Confirm rehearsal details',
            criteria: [
                { pc: '1.2', text: 'The repertoire and required performance standard are confirmed.', knowledge: ['Repertoire', 'Appropriate musical terminology'], skills: ['Demonstrate reliability and punctuality'] }
            ]
        },
        {
            title: 'Contribute to a rehearsal culture',
            criteria: [
                { pc: '2.1', text: 'Communication is carried out in a manner that contributes to a constructive rehearsal culture relevant to the music and the group.', knowledge: [], skills: ['Use effective interpersonal skills', 'Work creatively with individual differences'] }
            ]
        },
        {
            title: 'Respond accurately to the directions and suggestions of the producer/director and/or peers',
            criteria: [
                { pc: '5.5', text: 'Relevant advice and criticism are incorporated into own playing to advance quality in performance.', knowledge: [], skills: ['Listen critically to the performance of others', 'Respond to other players and adjusting own performance'] }
            ]
        },
        {
            title: 'Perform to the required professional standard in rehearsal',
            criteria: [
                { pc: '7.3', text: 'Effective contribution is made to shared response to work and own playing is integrated to the style of the performing group.', knowledge: ['Music in a variety of styles'], skills: ['Adapt own performance to suit the overall performance', 'Demonstrate musical rapport in ensemble'] }
            ]
        }
    ]},
    { id: 'ECEMUS0852A', title: 'Perform music as a soloist', descriptor: 'This unit deals with the skills and knowledge required to demonstrate the technical, expressive, communication and stage skills required to perform for an audience as a soloist.', elements: [
        {
            title: 'Perform work',
            criteria: [
                { pc: '2.2', text: 'The technical instrumental/vocal standard required of the performance is maintained.', knowledge: ['Instrument relevant to selected area of specialisation', 'Music analyses and research'], skills: ['Use a range of instrumental techniques', 'Use a variety of scales, chord sequences'] }
            ]
        },
        {
            title: 'Perform as a soloist',
            criteria: [
                { pc: '3.1', text: 'Music is interpreted effectively and in style to make a valid musical statement.', knowledge: ['Musical forms, systems, practices and customs', 'Repertoire in selected area of specialisation'], skills: ['Demonstrate understanding of chosen genres', 'Use relevant performance protocols and customs'] },
                { pc: '3.8', text: 'Appropriate intonation dynamics, phrasing, rhythm and expression are demonstrated to produce the required sound.', knowledge: [], skills: ['Phrase and shape music appropriately', 'Understand and express appropriate musical nuance'] }
            ]
        },
        {
            title: 'Evaluate performance',
            criteria: [
                { pc: '4.4', text: 'Feedback and criticism are assessed and used for possible adjustment to future work.', knowledge: [], skills: ['Plan practice and use feedback to identify strengths and weaknesses'] }
            ]
        }
    ]},
    { id: 'ECEMUS0802A', title: 'Perform music as part of a group', descriptor: 'This unit deals with the skills and knowledge required to perform for an audience as part of a group.', elements: [
        {
            title: 'Perform work',
            criteria: [
                { pc: '2.8', text: 'A performing style that is appropriate to the context of the music and the performance is used.', knowledge: ['Repertoire relevant to area of specialisation'], skills: ['Perform appropriately for the context of venues'] }
            ]
        },
        {
            title: 'Perform in a group',
            criteria: [
                { pc: '3.3', text: 'Balance is demonstrated in dynamics and style with other players.', knowledge: ['Solo and ensemble protocols in selected area of specialisation'], skills: ['Respond to other players and adjusting own performance in ensemble'] }
            ]
        },
        {
            title: 'Interact with other performers',
            criteria: [
                { pc: '4.6', text: 'Constructive contribution is made to the dynamics of the group to ensure best performance outcome.', knowledge: [], skills: ['Work constructively with others to achieve agreed outcomes', 'Identify and deal constructively with conflict'] }
            ]
        },
        {
            title: 'Analyse live performance',
            criteria: [
                { pc: '6.5', text: 'Audience reaction is analysed to determine ways in which communication with the audience can be improved or special audience needs can be more effectively met.', knowledge: [], skills: [] }
            ]
        }
    ]},
    { id: 'ECEMUS0772A', title: 'Contribute to back-up accompaniment for a performance', descriptor: 'This unit deals with the skills and knowledge required to perform for an audience as part of a backup group.', elements: [
        {
            title: 'Perform accompaniment',
            criteria: [
                { pc: '1.4', text: 'Direction is taken from the performers where required and support is given in rehearsal and performance.', knowledge: ['Interpreting music appropriately for performance'], skills: ['Monitor and adjust intonation as required'] }
            ]
        },
        {
            title: 'Provide, adapt and perform appropriate backup',
            criteria: [
                { pc: '2.3', text: 'The music is adapted or modified as required for the content and context of performance.', knowledge: ['A range of instrumental techniques in selected area of specialisation'], skills: ['Demonstrate appropriate improvisation skills where relevant'] }
            ]
        },
        {
            title: 'Provide stimulus and support for performers',
            criteria: [
                { pc: '3.6', text: 'The correct balance is consistently maintained between performers and backing.', knowledge: ['Appropriate chords and scales, forms, textures or other elements of musical organisation'], skills: ['Recognise intervals, chords, scales and chord progressions'] }
            ]
        },
        {
            title: 'Interact with performers',
            criteria: [
                { pc: '4.5', text: 'Take and give cues reliably, promptly, accurately and sensitively.', knowledge: ['Using relevant solo or group performance protocols and customs'], skills: [] }
            ]
        }
    ]},
    { id: 'ECEGEN0041A', title: 'Provide venue information and assistance', descriptor: 'This unit deals with the skills and knowledge required to provide patrons with information on available venue facilities.', elements: [
        {
            title: 'Access and update venue information',
            criteria: [
                { pc: '1.1', text: 'Information on facilities available at the venue is accessed and kept up-to-date in with accordance with organisational systems.', knowledge: ['Sources of information on venues and facilities', 'Information systems used by venues'], skills: ['Interpret venue information'] }
            ]
        },
        {
            title: 'Greet patrons',
            criteria: [
                { pc: '2.1', text: 'Patrons are greeted courteously and in accordance with organisational procedures.', knowledge: ['Customer service standards for greeting patrons'], skills: ['Provide effective customer service'] }
            ]
        },
        {
            title: 'Provide information and assistance to patrons',
            criteria: [
                { pc: '3.1', text: 'Information and assistance needs of different patrons, including those with special needs, are proactively identified.', knowledge: ['Special facilities and services available to people with special needs', 'Procedures for dealing with people with special needs'], skills: ['Lend assistance where required'] },
                { pc: '3.2', text: 'Requests for information and assistance are responded to politely and accurate, clear and concise information is provided.', knowledge: ['Layout of the venue and location of all facilities'], skills: ['Communicate clearly and precisely', 'Provide information accurately'] }
            ]
        }
    ]}
  ];

  const [activeUnitId, setActiveUnitId] = useState(''); // State to track which unit is active
  const [expandedElements, setExpandedElements] = useState({}); // State to manage element collapse
  const [expandedCriteria, setExpandedCriteria] = useState({}); // State to manage criteria collapse

  // Colors for unit navigation buttons
  const colors = ['bg-red-500', 'bg-yellow-500', 'bg-blue-600', 'bg-green-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-teal-500', 'bg-orange-500', 'bg-cyan-500', 'bg-lime-500'];
  const hoverColors = ['hover:bg-red-600', 'hover:bg-yellow-600', 'hover:bg-blue-700', 'hover:bg-green-600', 'hover:bg-purple-600', 'hover:bg-pink-600', 'hover:bg-indigo-600', 'hover:bg-teal-600', 'hover:bg-orange-600', 'hover:bg-cyan-600', 'hover:bg-lime-600'];

  // Toggle visibility of an element's content
  const toggleElement = (elementIndex) => {
    setExpandedElements(prev => ({
      ...prev,
      [elementIndex]: !prev[elementIndex]
    }));
  };

  // Toggle visibility of a criterion's content
  const toggleCriterion = (elementIndex, criterionIndex) => {
    setExpandedCriteria(prev => ({
      ...prev,
      [`${elementIndex}-${criterionIndex}`]: !prev[`${elementIndex}-${criterionIndex}`]
    }));
  };

  const selectedUnit = units.find(u => u.id === activeUnitId);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-20">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">CVQ Music Performance Level 1</h1>
          <p className="mt-1 text-gray-600">Click on a unit below to explore its competencies.</p>
        </div>
      </header>

      {/* Unit Navigation */}
      <nav className="bg-gray-800 p-4 shadow-lg">
        <div id="unit-nav-container" className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {units.map((unit, index) => {
            const colorIndex = index % colors.length; // Use modulo to cycle through colors
            return (
              <button
                key={unit.id}
                onClick={() => setActiveUnitId(unit.id)}
                className={`unit-box ${colors[colorIndex]} ${hoverColors[colorIndex]} text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-200
                  ${activeUnitId === unit.id ? 'active ring-4 ring-current' : ''}`}
                style={activeUnitId === unit.id ? { '--tw-ring-color': colors[colorIndex].replace('bg-', '') } : {}} // Dynamic ring color
              >
                {unit.id}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Content Display Area */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div id="content-container">
          {!selectedUnit ? (
            <div className="text-center p-12 bg-white rounded-lg shadow">
              <h2 className="text-2xl font-semibold text-gray-700">Welcome!</h2>
              <p className="mt-2 text-gray-500">Please select a unit from the navigation bar above to see the details.</p>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900">{selectedUnit.id}: {selectedUnit.title}</h2>
              <p className="mt-2 mb-6 text-gray-600 italic">{selectedUnit.descriptor}</p>
              {selectedUnit.elements.map((element, elIndex) => (
                <div key={elIndex} className="mb-4">
                  <div
                    className="element-header bg-gray-50 p-4 rounded-lg shadow-sm flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors duration-150"
                    onClick={() => toggleElement(elIndex)}
                  >
                    <h3 className="text-lg leading-6 font-semibold text-gray-900">{element.title}</h3>
                    <svg className={`w-6 h-6 transform transition-transform text-gray-500 ${expandedElements[elIndex] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                  {expandedElements[elIndex] && (
                    <div className="pl-4 mt-2">
                      {element.criteria.map((criterion, crIndex) => (
                        <div key={crIndex} className="border-t border-gray-200">
                          <div
                            className="pc-header p-3 hover:bg-gray-100 rounded-md flex justify-between items-center cursor-pointer transition-colors duration-150"
                            onClick={() => toggleCriterion(elIndex, crIndex)}
                          >
                            <span className="font-medium text-gray-800">PC {criterion.pc}: {criterion.text}</span>
                            <svg className={`w-5 h-5 transform transition-transform text-gray-500 ${expandedCriteria[`${elIndex}-${crIndex}`] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                          </div>
                          {expandedCriteria[`${elIndex}-${crIndex}`] && (
                            <div className="pl-8 pr-4 pb-4">
                              {criterion.knowledge.length > 0 && (
                                <div className="mt-2">
                                  <h4 className="font-semibold text-gray-700">Underpinning Knowledge:</h4>
                                  <ul className="list-disc list-inside ml-4 text-gray-600">
                                    {criterion.knowledge.map((k, kIndex) => (
                                      <li key={kIndex}>{k}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              {criterion.skills.length > 0 && (
                                <div className="mt-2">
                                  <h4 className="font-semibold text-gray-700">Underpinning Skills:</h4>
                                  <ul className="list-disc list-inside ml-4 text-gray-600">
                                    {criterion.skills.map((s, sIndex) => (
                                      <li key={sIndex}>{s}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};


// CSEC Music Syllabus Infographic Page (new component based on provided HTML)
const CSEC_MusicInfographicPage = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const examData = {
    paper01: {
      title: 'Paper 01: Listening & Appraising',
      content: `<p class="mb-2"><strong>Total Weight:</strong> 40%</p>
                <p class="mb-2"><strong>Format:</strong> 60 Multiple Choice Items (1hr 30min)</p>
                <ul class="list-disc list-inside mt-2 space-y-1">
                  <li><strong>Musical Perception:</strong> Aural questions on unheard excerpts.</li>
                  <li><strong>Musical Literacy:</strong> Score-reading questions with audio.</li>
                  <li><strong>Musical History:</strong> Knowledge of prescribed periods/styles.</li>
                </ul>`
    },
    paper02: {
      title: 'Paper 02: Practical Assessment',
      content: `<p class="mb-2"><strong>Total Weight:</strong> 34%</p>
                <p class="mb-2"><strong>Format:</strong> External Examination</p>
                <ul class="list-disc list-inside mt-2 space-y-1">
                  <li><strong>Composing (74 Marks):</strong> Two compositions (one original, one arrangement) with score, audio, and viva voce.</li>
                  <li><strong>Performing (28 Marks):</strong> One solo piece, one scale/arpeggio, and viva voce.</li>
                </ul>`
    },
    paper03: {
      title: 'Paper 03: School-Based Assessment',
      content: `<p class="mb-2"><strong>Total Weight:</strong> 26%</p>
                <p class="mb-2"><strong>Format:</strong> Internally Assessed, Externally Moderated</p>
                <ul class="list-disc list-inside mt-2 space-y-1">
                  <li><strong>Listening & Appraising (30 Marks):</strong> One written research assignment.</li>
                  <li><strong>Performing (36 Marks):</strong> One solo, one scale/study, one ensemble piece.</li>
                </ul>`
    }
  };

  const levelData = {
    foundation: "Focus on basic technical skills (e.g., ABRSM Grade 2 equiv.). For recorder, a range of C to F with simple articulation. For voice, accurate pitch over a 9th with clear enunciation. Music has simple rhythms and accompaniment often doubles the melody.",
    intermediate: "Moderate technical skills (e.g., ABRSM Grades 3-4 equiv.). For recorder, an expanded range to G with more complex rhythms and simple ornaments. For voice, a range of a 10th with simple melismas and modulations. Requires more varied dynamics.",
    advanced: "Competent technical skills (e.g., ABRSM Grade 5+ equiv.). For recorder, full normal range with wide variety of articulation. For voice, wide pitch range with vocal agility, clear execution of melismatic passages, and nuanced understanding of musical style."
  };

  const [detailsPanelContent, setDetailsPanelContent] = useState({
    title: 'Click a section to see details',
    content: 'Select a component on the chart to learn more about its assessment format and contribution to your final grade.'
  });

  const [activeTab, setActiveTab] = useState('foundation');

  // Initialize Chart.js
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy existing chart instance
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Paper 01: LIAP (40%)', 'Paper 02: PERF/COMP (34%)', 'Paper 03: SBA (26%)'],
        datasets: [{
          data: [40, 34, 26],
          backgroundColor: ['#00796B', '#FF7043', '#FFB300'],
          borderColor: '#FFFBF5',
          borderWidth: 5,
          hoverOffset: 12,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: true,
          }
        },
        onClick: (evt, elements) => {
          if (elements.length > 0) {
            const index = elements[0].index;
            let key = '';
            if (index === 0) key = 'paper01';
            if (index === 1) key = 'paper02';
            if (index === 2) key = 'paper03';

            // Simulate fade out/in effect for details panel
            const panel = document.getElementById('exam-details-panel');
            if (panel) panel.style.opacity = 0;

            setTimeout(() => {
              setDetailsPanelContent(examData[key]);
              if (panel) panel.style.opacity = 1;
            }, 300);
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  // Style overrides from the original HTML
  const customStyles = `
    .header-icon {
        font-size: 3rem;
        line-height: 1;
    }
    .card {
        transition: all 0.3s ease-in-out;
        border-bottom-width: 4px;
    }
    .card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    }
    .liap-card { border-color: #00796B; }
    .perf-card { border-color: #FF7043; }
    .comp-card { border-color: #FFB300; }

    .tab-button {
        transition: all 0.2s ease;
    }
    .tab-button.active {
        background-color: #00796B;
        color: white;
    }
    .career-tag {
        background-color: #D7CCC8;
        color: #044343;
        transition: all 0.2s ease;
    }
    .career-tag:hover {
        background-color: #00796B;
        color: white;
        transform: scale(1.05);
    }
    .chart-container {
        position: relative;
        height: 300px;
        width: 100%;
        max-width: 300px;
        margin-left: auto;
        margin-right: auto;
    }
    @media (min-width: 1024px) {
        .chart-container {
            height: 350px;
            max-width: 350px;
        }
    }
    #exam-details-panel {
        min-height: 320px;
        transition: opacity 0.5s ease-in-out;
    }
  `;

  return (
    <div className="antialiased" style={{ backgroundColor: '#FFFBF5', color: '#044343', fontFamily: 'Poppins, sans-serif' }}>
      <style>{customStyles}</style> {/* Inject custom styles */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00796B] to-[#FFB300]">CSEC Music at a Glance</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-[#044343] opacity-80">A visual guide to the core skills, assessments, and opportunities in the Caribbean Secondary Education Certificate® Music Syllabus.</p>
        </header>

        <section id="pillars" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Three Pillars of Musical Study</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="card liap-card bg-white p-8 rounded-xl shadow-lg">
              <div className="header-icon mb-4">🎧</div>
              <h3 className="text-2xl font-bold mb-2 text-[#00796B]">Listening & Appraising</h3>
              <p className="text-[#044343] opacity-70">Analyze, discuss, and evaluate music from various genres and historical periods, using appropriate musical language.</p>
            </div>
            <div className="card perf-card bg-white p-8 rounded-xl shadow-lg">
              <div className="header-icon mb-4">🎤</div>
              <h3 className="text-2xl font-bold mb-2 text-[#FF7043]">Performing</h3>
              <p className="text-[#044343] opacity-70">Perform vocal or instrumental music, demonstrating technical competence and sensitivity to musical structure and style.</p>
            </div>
            <div className="card comp-card bg-white p-8 rounded-xl shadow-lg">
              <div className="header-icon mb-4">🎼</div>
              <h3 className="text-2xl font-bold mb-2 text-[#FFB300]">Composing</h3>
              <p className="text-[#044343] opacity-70">Create, arrange, and improvise music to express and communicate musical ideas, thoughts, and feelings.</p>
            </div>
          </div>
        </section>

        <section id="assessment" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Examination Structure & Weighting</h2>
          <div className="bg-white p-8 rounded-xl shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="chart-container">
                <canvas id="examWeightingChart" ref={chartRef}></canvas>
              </div>
              <div id="exam-details-panel" className="bg-[#FFFBF5] p-6 rounded-lg border-2 border-dashed border-gray-300">
                <h3 id="details-title" className="text-2xl font-bold mb-4">{detailsPanelContent.title}</h3>
                <div id="details-content" className="text-lg text-[#044343] opacity-80" dangerouslySetInnerHTML={{ __html: detailsPanelContent.content }}>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sba" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">SBA Spotlight: Paper 03</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#00796B]">
              <h3 className="text-2xl font-bold mb-4">LIAP Project (30 Marks)</h3>
              <p className="mb-4">Choose ONE of the following research projects:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Musical Performance:</strong> Record and analyze a live performance.</li>
                <li><strong>Musical Advertisements:</strong> Record and analyze music from 8 ads.</li>
                <li><strong>Caribbean Performer/Composer:</strong> Investigate and analyze the work of a prominent artist.</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#FF7043]">
              <h3 className="text-2xl font-bold mb-4">Performing Component (36 Marks)</h3>
              <p className="mb-4">A practical demonstration of skill:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>One Solo Performance</strong> (19 Marks)</li>
                <li><strong>One Scale & Arpeggio</strong> or Technical Study (5 Marks)</li>
                <li><strong>One Ensemble Performance</strong> (12 Marks)</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="levels" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Performance Levels</h2>
          <div className="bg-white p-8 rounded-xl shadow-2xl">
            <div className="mb-6 flex justify-center border-b-2 border-gray-200">
              <button
                id="tab-foundation"
                className={`tab-button py-3 px-6 text-lg font-semibold rounded-t-lg ${activeTab === 'foundation' ? 'active' : ''}`}
                onClick={() => setActiveTab('foundation')}
              >
                Foundation
              </button>
              <button
                id="tab-intermediate"
                className={`tab-button py-3 px-6 text-lg font-semibold rounded-t-lg ${activeTab === 'intermediate' ? 'active' : ''}`}
                onClick={() => setActiveTab('intermediate')}
              >
                Intermediate
              </button>
              <button
                id="tab-advanced"
                className={`tab-button py-3 px-6 text-lg font-semibold rounded-t-lg ${activeTab === 'advanced' ? 'active' : ''}`}
                onClick={() => setActiveTab('advanced')}
              >
                Advanced
              </button>
            </div>
            <div id="tab-content" className="text-lg text-[#044343] opacity-80 p-4 min-h-[100px]">
              {levelData[activeTab]}
            </div>
          </div>
        </section>

        <section id="careers">
          <h2 className="text-3xl font-bold text-center mb-10">Career Pathways in Music</h2>
          <div className="flex flex-wrap justify-center items-center gap-4 text-lg max-w-4xl mx-auto">
            <span className="career-tag py-2 px-4 rounded-full font-semibold">Accompanist</span>
            <span className="career-tag py-2 px-4 rounded-full font-semibold">Arranger/Composer</span>
            <span className="career-tag py-2 px-4 rounded-full font-semibold">Conductor</span>
            <span className="career-tag py-2 px-4 rounded-full font-semibold">Cultural Officer</span>
            <span className="career-tag py-2 px-4 rounded-full font-semibold">Sound Engineer</span>
            <span className="career-tag py-2 px-4 rounded-full font-semibold">Music Critic</span>
            <span className="career-tag py-2 px-4 rounded-full font-semibold">Music Journalist</span>
            <span className="career-tag py-2 px-4 rounded-full font-semibold">Music Therapist</span>
            <span className="career-tag py-2 px-4 rounded-full font-semibold">Instrument Technician</span>
            <span className="career-tag py-2 px-4 rounded-full font-semibold">Music Educator</span>
            <span className="career-tag py-2 px-4 rounded-full font-semibold">Disc Jockey</span>
            <span className="career-tag py-2 px-4 rounded-full font-semibold">Performer</span>
            <span className="career-tag py-2 px-4 rounded-full font-semibold">Ethnomusicologist</span>
            <span className="career-tag py-2 px-4 rounded-full font-semibold">Producer</span>
          </div>
        </section>
      </div>
    </div>
  );
};


// Music Tuition Sub-Page: Policy
const MusicTuitionPolicyPage = () => {
  return (
    <div className="py-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4 text-center">
        Music Tuition Policy
      </h2>
      <div className="prose max-w-none text-left mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          At Winston Holford Music, we are committed to providing a structured and effective learning environment. Please review our tuition policy below:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
          <li><strong>Scheduling:</strong> Lessons are scheduled by mutual agreement. Any changes require at least 24 hours' notice.</li>
          <li><strong>Cancellations:</strong> Lessons canceled with less than 24 hours' notice may be charged at the full rate.</li>
          <li><strong>Payment:</strong> Fees are due in advance, typically on a monthly basis. Details will be provided upon enrollment.</li>
          <li><strong>Attendance:</strong> Students are expected to attend all scheduled lessons on time.</li>
          <li><strong>Student Conduct:</strong> We expect respectful behavior from all students during online and in-person sessions.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          For any questions regarding our policy, please contact us.
        </p>
      </div>
    </div>
  );
};

// Music Tuition Sub-Page: CSEC Music (now links to detailed CSEC Infographic page)
const CSEC_MusicPage = () => {
  const [showInfographic, setShowInfographic] = useState(false);

  if (showInfographic) {
    return <CSEC_MusicInfographicPage />;
  }

  return (
    <div className="py-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4">
        CSEC Music
      </h2>
      <div className="prose max-w-none text-left mx-auto mb-6">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Prepare for your CSEC Music examinations with comprehensive and targeted tuition.
          Our program covers all aspects of the syllabus, ensuring you are well-prepared
          for both the theoretical and practical components.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Explore the CSEC Music syllabus structure and requirements in detail using our interactive infographic.
        </p>
      </div>
      <button
        onClick={() => setShowInfographic(true)}
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
      >
        Explore CSEC Music Syllabus
      </button>
    </div>
  );
};

// Music Tuition Sub-Page: CVQ Music (now links to detailed CVQ page)
const CVQ_MusicPage = () => {
  const [showDetails, setShowDetails] = useState(false);

  if (showDetails) {
    return <CVQMusicPerformanceLevel1Page />;
  }

  return (
    <div className="py-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4">
        CVQ Music
      </h2>
      <div className="prose max-w-none text-left mx-auto mb-6">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Achieve your career goals in music with our CVQ Music training.
          Our practical, skills-based approach focuses on industry standards and
          develops competencies essential for professional musicians and music practitioners.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Gain recognized qualifications and hands-on experience that will
          boost your career in the music industry.
        </p>
      </div>
      <button
        onClick={() => setShowDetails(true)}
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
      >
        Explore CVQ Music Performance Level 1
      </button>
    </div>
  );
};

// Music Tuition Sub-Page: Dedicated Classroom Login
const DedicatedClassroomPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'student' && password === 'password') { // Simple mock login
      setLoginMessage('Login successful! Redirecting to classroom...');
      setIsLoggedIn(true);
      // In a real app, you would redirect or load actual classroom content here
    } else {
      setLoginMessage('Invalid username or password.');
      setIsLoggedIn(false);
    }
  };

  return (
    <div className="py-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4">
        Dedicated Classroom
      </h2>
      {!isLoggedIn ? (
        <div className="max-w-md mx-auto bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Please log in to access your online learning sessions.
          </p>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Password"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              Log In
            </button>
          </form>
          {loginMessage && (
            <div
              className={`mt-4 p-3 rounded-md text-sm text-center ${
                isLoggedIn ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}
            >
              {loginMessage}
            </div>
          )}
        </div>
      ) : (
        <div className="text-center p-8 bg-green-50 rounded-xl shadow-md">
          <p className="text-xl text-green-800 font-semibold mb-4">
            Welcome to your online classroom, {username}!
          </p>
          <p className="text-lg text-gray-700">
            You can now access your learning materials and join live sessions.
          </p>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="mt-6 py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};


// Music Tuition Page Component (now acting as a hub for sub-pages)
const MusicTuitionPage = () => {
  const [currentSubPage, setCurrentSubPage] = useState('overview'); // State for tuition sub-pages

  const renderTuitionSubPage = () => {
    switch (currentSubPage) {
      case 'policy':
        return <MusicTuitionPolicyPage />;
      case 'csec':
        return <CSEC_MusicPage />;
      case 'cvq':
        return <CVQ_MusicPage />;
      case 'classroom':
        return <DedicatedClassroomPage />;
      case 'overview':
      default:
        return (
          <div className="py-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-800 mb-6">
              Music Tuition
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Winston Holford Music offers comprehensive and personalized music tuition for all levels and aspirations.
              Explore our various programs and resources below.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">Our Policy</h3>
                <p className="text-gray-600 mb-4">Understand the guidelines for our tuition services.</p>
                <button
                  onClick={() => setCurrentSubPage('policy')}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  View Policy
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">CSEC Music</h3>
                <p className="text-gray-600 mb-4">Specialized preparation for CSEC Music examinations.</p>
                <button
                  onClick={() => setCurrentSubPage('csec')}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Learn More
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">CVQ Music</h3>
                <p className="text-gray-600 mb-4">Practical training for vocational music qualifications.</p>
                <button
                  onClick={() => setCurrentSubPage('cvq')}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Learn More
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 col-span-1 md:col-span-2 lg:col-span-3">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">Dedicated Classroom</h3>
                <p className="text-gray-600 mb-4">Access your online learning sessions and materials.</p>
                <button
                  onClick={() => setCurrentSubPage('classroom')}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Go to Classroom
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="py-4">
      {/* Sub-navigation for Music Tuition */}
      <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mb-8">
        <button
          onClick={() => setCurrentSubPage('overview')}
          className={`py-2 px-4 rounded-lg text-sm transition-colors duration-200 ${
            currentSubPage === 'overview'
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-purple-700 hover:bg-purple-100'
          }`}
        >
          Tuition Overview
        </button>
        <button
          onClick={() => setCurrentSubPage('policy')}
          className={`py-2 px-4 rounded-lg text-sm transition-colors duration-200 ${
            currentSubPage === 'policy'
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-purple-700 hover:bg-purple-100'
          }`}
        >
          Tuition Policy
        </button>
        <button
          onClick={() => setCurrentSubPage('csec')}
          className={`py-2 px-4 rounded-lg text-sm transition-colors duration-200 ${
            currentSubPage === 'csec'
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-purple-700 hover:bg-purple-100'
          }`}
        >
          CSEC Music
        </button>
        <button
          onClick={() => setCurrentSubPage('cvq')}
          className={`py-2 px-4 rounded-lg text-sm transition-colors duration-200 ${
            currentSubPage === 'cvq'
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-purple-700 hover:bg-purple-100'
          }`}
        >
          CVQ Music
        </button>
        <button
          onClick={() => setCurrentSubPage('classroom')}
          className={`py-2 px-4 rounded-lg text-sm transition-colors duration-200 ${
            currentSubPage === 'classroom'
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-purple-700 hover:bg-purple-100'
          }`}
        >
          Dedicated Classroom
        </button>
      </div>

      {renderTuitionSubPage()}
    </div>
  );
};


// Contact Page Component
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setMessage('Please fill in all fields.');
      setIsError(true);
      return;
    }
    // Simulate sending data
    console.log('Form Submitted:', formData);
    setMessage('Thank you for your message! We will get back to you shortly.');
    setIsError(false);
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <div className="py-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-800 mb-6 text-center">
        Contact Us
      </h1>
      <div className="max-w-xl mx-auto bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md">
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
          Have questions or feedback? Feel free to reach out to Winston Holford Music using the
          form below.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
        {message && (
          <div
            className={`mt-4 p-3 rounded-md text-sm text-center ${
              isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
