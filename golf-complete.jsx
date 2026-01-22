import React, { useState } from 'react';
import { Search, TrendingDown, MapPin, Calendar, DollarSign, Cloud, Users, ChevronRight, Star, Plane } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Pebble Beach',
    location: 'California',
    courses: ['Pebble Beach Golf Links', 'Spyglass Hill', 'Spanish Bay'],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800',
    bestMonths: ['Apr', 'May', 'Sep', 'Oct'],
    pricing: {
      peak: { golf: 595, flight: 320, total: 915 },
      shoulder: { golf: 495, flight: 280, total: 775 },
      offSeason: { golf: 395, flight: 240, total: 635 }
    },
    weather: { spring: 65, summer: 68, fall: 64, winter: 58 },
    description: 'The most iconic oceanfront golf destination in the world, where championship golf meets breathtaking Pacific coastline.',
    highlights: [
      'Home to the famous 7th hole with ocean views',
      'Hosted 6 U.S. Opens and countless PGA Tour events',
      'Three world-class courses within the resort',
      'Stunning 17-Mile Drive scenic route',
      'Luxurious Lodge at Pebble Beach accommodations'
    ],
    courseDetails: {
      'Pebble Beach Golf Links': { par: 72, yardage: '6,828 yards', slope: 145, signature: 'The iconic Par-3 7th hole along the cliffs' },
      'Spyglass Hill': { par: 72, yardage: '6,960 yards', slope: 148, signature: 'Opening holes through towering Monterey Pines' },
      'Spanish Bay': { par: 72, yardage: '6,821 yards', slope: 142, signature: 'Links-style course with bagpiper at sunset' }
    },
    areaInfo: {
      nearby: ['Carmel-by-the-Sea (5 min)', 'Monterey Bay Aquarium (15 min)', 'Big Sur (45 min)'],
      restaurants: ['The Bench at Pebble Beach', 'Sticks at Spanish Bay', 'Roy\'s at Spanish Bay'],
      activities: ['17-Mile Drive', 'Wine tasting in Carmel Valley', 'Whale watching', 'Spa at Pebble Beach']
    },
    reviews: [
      { name: 'Michael R.', rating: 5, text: 'Bucket list checked! Playing Pebble Beach was everything I dreamed of. The 7th hole view is absolutely surreal.', date: 'October 2024' },
      { name: 'Jennifer K.', rating: 5, text: 'Worth every penny. The service was impeccable and the courses are in pristine condition year-round.', date: 'September 2024' },
      { name: 'David L.', rating: 5, text: 'Spyglass Hill is criminally underrated. Challenging layout and just as beautiful as Pebble.', date: 'May 2024' }
    ],
    whyGolfersLove: ['Unmatched ocean views on nearly every hole', 'Rich golf history and PGA Tour pedigree', 'World-class service and amenities', 'Perfect weather during shoulder seasons', 'Charming Carmel and Monterey nearby']
  },
  {
    id: 2,
    name: 'Scottsdale',
    location: 'Arizona',
    courses: ['TPC Scottsdale', 'Troon North', 'We-Ko-Pa'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1592919505780-303950717480?w=800',
    bestMonths: ['Jan', 'Feb', 'Mar', 'Nov', 'Dec'],
    pricing: {
      peak: { golf: 285, flight: 290, total: 575 },
      shoulder: { golf: 195, flight: 260, total: 455 },
      offSeason: { golf: 125, flight: 220, total: 345 }
    },
    weather: { spring: 85, summer: 105, fall: 88, winter: 68 },
    description: 'Desert golf paradise with championship courses, perfect winter weather, and incredible value during off-season.',
    highlights: [
      'Home of the wildest hole in golf - TPC 16th',
      'Over 200 courses in the greater Phoenix area',
      'Perfect weather October through April',
      'Desert landscape with dramatic mountain views',
      'World-class spas and Old Town Scottsdale nightlife'
    ],
    courseDetails: {
      'TPC Scottsdale': { par: 71, yardage: '7,261 yards', slope: 135, signature: 'The famous Stadium 16th hole with grandstands' },
      'Troon North': { par: 72, yardage: '7,070 yards', slope: 147, signature: 'Monument Course carved into boulder hillsides' },
      'We-Ko-Pa': { par: 72, yardage: '7,225 yards', slope: 137, signature: 'Saguaro Course with authentic desert experience' }
    },
    areaInfo: {
      nearby: ['Old Town Scottsdale (10 min)', 'Desert Botanical Garden (20 min)', 'Camelback Mountain (15 min)'],
      restaurants: ['FnB Restaurant', 'The Mission', 'Cafe Monarch', 'Different Pointe of View'],
      activities: ['Hot air balloon rides', 'Spa treatments', 'Spring Training baseball', 'Hiking Camelback']
    },
    reviews: [
      { name: 'Tom B.', rating: 5, text: 'Played TPC Scottsdale and felt like a tour pro. The 16th hole experience is surreal even without the crowds!', date: 'February 2024' },
      { name: 'Sarah M.', rating: 5, text: 'Perfect winter golf escape. 75° and sunny every day. Troon North was the most scenic round I\'ve ever played.', date: 'January 2024' },
      { name: 'Rick P.', rating: 5, text: 'Incredible value in summer if you can handle the heat. Played We-Ko-Pa for $125 - usually $300!', date: 'July 2024' }
    ],
    whyGolfersLove: ['Unbeatable winter weather (70-75°F)', 'Dramatic desert landscape and mountain backdrops', 'Huge savings during summer months (60%+ off)', 'TPC Scottsdale - home of the Waste Management Open', 'Vibrant nightlife and dining scene']
  },
  {
    id: 3,
    name: 'Pinehurst',
    location: 'North Carolina',
    courses: ['Pinehurst No. 2', 'Pinehurst No. 4', 'Pinehurst No. 8'],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800',
    bestMonths: ['Apr', 'May', 'Sep', 'Oct'],
    pricing: {
      peak: { golf: 425, flight: 310, total: 735 },
      shoulder: { golf: 325, flight: 280, total: 605 },
      offSeason: { golf: 225, flight: 250, total: 475 }
    },
    weather: { spring: 72, summer: 86, fall: 70, winter: 52 },
    description: 'America\'s golf mecca with 9 championship courses, rich history, and the legendary Donald Ross design on No. 2.',
    highlights: ['Pinehurst No. 2 - hosted 4 U.S. Opens', 'Nine championship courses in one resort', 'Historic Cradle of American Golf', 'Walkable village with quaint shops', 'Year-round playability'],
    courseDetails: {
      'Pinehurst No. 2': { par: 72, yardage: '7,588 yards', slope: 155, signature: 'Restored Donald Ross masterpiece with native sand areas' },
      'Pinehurst No. 4': { par: 72, yardage: '7,160 yards', slope: 142, signature: 'Tom Fazio design through rolling sandhills' },
      'Pinehurst No. 8': { par: 72, yardage: '7,092 yards', slope: 140, signature: 'Centennial Course with dramatic elevation changes' }
    },
    areaInfo: {
      nearby: ['Pinehurst Village (walking)', 'Southern Pines (10 min)', 'Fort Bragg (15 min)'],
      restaurants: ['The Deuce', 'Ryder Cup Lounge', '1895 Grille', 'The Carolina Dining Room'],
      activities: ['Golf museum', 'Spa at Pinehurst', 'Shopping in the village', 'Historic hotel tours']
    },
    reviews: [
      { name: 'James W.', rating: 5, text: 'Pinehurst No. 2 is pure golf. The restored Ross design is brilliant - those domed greens are devilish!', date: 'October 2024' },
      { name: 'Lisa G.', rating: 5, text: 'Played 36 holes a day for 4 days straight. Every course is fantastic. The resort is golf heaven.', date: 'April 2024' },
      { name: 'Chris D.', rating: 5, text: 'The history here is palpable. Walking the same fairways as Payne Stewart and Ben Hogan is incredible.', date: 'May 2024' }
    ],
    whyGolfersLove: ['Nine world-class courses in one location', 'Rich golf heritage and U.S. Open history', 'Donald Ross\' masterpiece on No. 2', 'Walkable village with Southern charm', 'Perfect spring and fall weather']
  },
  {
    id: 4,
    name: 'Bandon Dunes',
    location: 'Oregon',
    courses: ['Bandon Dunes', 'Pacific Dunes', 'Bandon Trails'],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800',
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep'],
    pricing: {
      peak: { golf: 385, flight: 340, total: 725 },
      shoulder: { golf: 295, flight: 310, total: 605 },
      offSeason: { golf: 195, flight: 280, total: 475 }
    },
    weather: { spring: 58, summer: 65, fall: 62, winter: 48 },
    description: 'Remote coastal paradise with true links golf, dramatic Pacific cliffs, and an authentic Scottish experience.',
    highlights: ['Five links-style courses on the ocean', 'Walking-only with caddies (golf as it was meant to be)', 'Stunning Pacific coastline views', 'Remote location - pure golf immersion', 'Consistently ranked #1 U.S. golf resort'],
    courseDetails: {
      'Bandon Dunes': { par: 72, yardage: '6,732 yards', slope: 138, signature: 'Oceanfront finishing holes with dramatic views' },
      'Pacific Dunes': { par: 71, yardage: '6,633 yards', slope: 135, signature: 'Every hole touches the ocean - most scenic course' },
      'Bandon Trails': { par: 71, yardage: '6,765 yards', slope: 131, signature: 'Inland course through dunes and forest' }
    },
    areaInfo: {
      nearby: ['Bandon town (20 min)', 'Face Rock State Park (25 min)', 'Cape Blanco Lighthouse (30 min)'],
      restaurants: ['The Gallery', 'Pacific Grill', 'Bandon Dunes Pub', 'McKee\'s Pub'],
      activities: ['Caddie experience', 'Punch Bowl putting course', 'Ocean views', 'Evening bonfires']
    },
    reviews: [
      { name: 'Mark T.', rating: 5, text: 'This is golf nirvana. Pacific Dunes is the best course I\'ve ever played. The ocean views are breathtaking.', date: 'August 2024' },
      { name: 'Kevin H.', rating: 5, text: 'Walking these courses with a caddie brought me back to why I fell in love with golf. Pure and authentic.', date: 'July 2024' },
      { name: 'Patricia S.', rating: 5, text: 'Worth the trek. The remote location makes it even more special. We played 72 holes and wanted more!', date: 'September 2024' }
    ],
    whyGolfersLove: ['Authentic links golf experience', 'Five incredible courses, all oceanfront', 'Walking-only with knowledgeable caddies', 'Remote location = total golf immersion', 'Consistently ranked #1 U.S. resort']
  },
  {
    id: 5,
    name: 'Kiawah Island',
    location: 'South Carolina',
    courses: ['Ocean Course', 'Turtle Point', 'Osprey Point'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800',
    bestMonths: ['Mar', 'Apr', 'May', 'Oct'],
    pricing: {
      peak: { golf: 395, flight: 320, total: 715 },
      shoulder: { golf: 295, flight: 290, total: 585 },
      offSeason: { golf: 195, flight: 260, total: 455 }
    },
    weather: { spring: 75, summer: 88, fall: 78, winter: 58 },
    description: 'Coastal Carolina gem featuring the legendary Ocean Course, pristine beaches, and Southern Lowcountry charm.',
    highlights: ['The Ocean Course - toughest course in America', 'Five championship courses on one island', '10 miles of pristine Atlantic beach', 'Hosted 2021 PGA Championship', 'Luxury resort with world-class amenities'],
    courseDetails: {
      'Ocean Course': { par: 72, yardage: '7,876 yards', slope: 155, signature: 'America\'s toughest course with ocean on 10 holes' },
      'Turtle Point': { par: 72, yardage: '7,061 yards', slope: 140, signature: 'Jack Nicklaus design through maritime forest' },
      'Osprey Point': { par: 72, yardage: '6,932 yards', slope: 136, signature: 'Tom Fazio layout with Lowcountry charm' }
    },
    areaInfo: {
      nearby: ['Charleston Historic District (45 min)', 'Freshfields Village (10 min)', 'Bohicket Marina (5 min)'],
      restaurants: ['The Atlantic Room', 'Jasmine Porch', 'Tomasso at Turtle Point', 'The Ocean Room'],
      activities: ['Beach resort', 'Spa sanctuary', 'Nature tours', 'Historic Charleston']
    },
    reviews: [
      { name: 'Andrew F.', rating: 5, text: 'The Ocean Course humbled me but I loved every minute. Wind makes it different every day. Bring extra balls!', date: 'April 2024' },
      { name: 'Michelle R.', rating: 5, text: 'Perfect blend of golf and beach resort. Played all five courses and the family loved the beach amenities.', date: 'March 2024' },
      { name: 'Greg M.', rating: 5, text: 'The Ocean Course is a bucket list must. Watching the PGA here was cool, but playing it was unforgettable.', date: 'October 2024' }
    ],
    whyGolfersLove: ['The legendary Ocean Course challenge', 'Five Pete Dye courses on one island', 'Combination golf resort and beach vacation', 'Close to historic Charleston', 'Perfect spring and fall weather']
  },
  {
    id: 6,
    name: 'Streamsong',
    location: 'Florida',
    courses: ['Streamsong Red', 'Streamsong Blue', 'Streamsong Black'],
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800',
    bestMonths: ['Jan', 'Feb', 'Mar', 'Nov', 'Dec'],
    pricing: {
      peak: { golf: 295, flight: 280, total: 575 },
      shoulder: { golf: 225, flight: 250, total: 475 },
      offSeason: { golf: 165, flight: 220, total: 385 }
    },
    weather: { spring: 82, summer: 92, fall: 85, winter: 72 },
    description: 'Florida\'s hidden gem rising from former phosphate mines, offering dramatic terrain unlike anywhere else in the state.',
    highlights: ['Three world-class courses in central Florida', 'Unique elevation changes (rare in Florida)', 'Former phosphate mine transformed into golf paradise', 'Remote location - peaceful escape', 'Outstanding value compared to coastal Florida'],
    courseDetails: {
      'Streamsong Red': { par: 72, yardage: '7,148 yards', slope: 144, signature: 'Bill Coore design with natural dunes and lakes' },
      'Streamsong Blue': { par: 72, yardage: '7,202 yards', slope: 145, signature: 'Tom Doak\'s dramatic elevation changes' },
      'Streamsong Black': { par: 71, yardage: '7,037 yards', slope: 140, signature: 'Gil Hanse short course with strategic options' }
    },
    areaInfo: {
      nearby: ['Tampa (90 min)', 'Orlando (90 min)', 'Lakeland (30 min)'],
      restaurants: ['Fifty-Nine', 'P2O5', 'The Warehouse', 'The Lodge Restaurant'],
      activities: ['Fly fishing', 'Bass fishing', 'Sporting clays', 'Spa at Streamsong']
    },
    reviews: [
      { name: 'Brian K.', rating: 5, text: 'Streamsong Red and Blue are both masterpieces. Doesn\'t feel like Florida golf at all - dramatic and unique.', date: 'February 2024' },
      { name: 'Susan L.', rating: 5, text: 'Hidden gem! Better than many courses twice the price. The Black course is pure fun - loved the risk/reward.', date: 'January 2024' },
      { name: 'Dan R.', rating: 5, text: 'If you love minimalist golf architecture, this is heaven. Coore/Crenshaw and Doak at their finest.', date: 'December 2024' }
    ],
    whyGolfersLove: ['Unique terrain with dramatic elevation (rare in FL)', 'Three top-100 courses in one location', 'Outstanding value vs. coastal Florida resorts', 'Remote and peaceful setting', 'Perfect winter golf weather']
  }
];

export default function GolfTripOptimizer() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [groupSize, setGroupSize] = useState(4);
  const [view, setView] = useState('discover');

  const getSavings = (dest) => {
    const peak = dest.pricing.peak.total;
    const offSeason = dest.pricing.offSeason.total;
    const savings = peak - offSeason;
    const percentage = Math.round((savings / peak) * 100);
    return { amount: savings, percentage };
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FFFFFF',
      fontFamily: "'Space Mono', monospace",
      color: '#000000'
    }}>
      {/* Header */}
      <div style={{
        padding: '24px',
        borderBottom: '1px solid #E5E5E5',
        background: '#FFFFFF',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '14px',
            fontWeight: 700,
            letterSpacing: '4px',
            color: '#BFFF00',
            cursor: 'pointer'
          }}
          onClick={() => {
            setSelectedDestination(null);
            setView('discover');
          }}>
            GOLF//OPTIMIZER
          </div>
          
          <div style={{
            display: 'flex',
            gap: '24px',
            alignItems: 'center'
          }}>
            <div style={{
              fontSize: '14px',
              color: '#666',
              fontWeight: 700,
              cursor: 'pointer'
            }}>
              LOG IN
            </div>
            
            <button style={{
              padding: '12px 24px',
              background: '#BFFF00',
              border: 'none',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: "'Space Mono', monospace",
              letterSpacing: '1px'
            }}>
              JOIN FOR $5/MO
            </button>
          </div>
        </div>
      </div>

      {/* Only show hero if not viewing detail page */}
      {!selectedDestination && (
        <div style={{
          background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FFF0 100%)',
          padding: '80px 24px 120px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1
          }}>
            <h1 style={{
              fontSize: 'clamp(48px, 8vw, 96px)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '24px',
              letterSpacing: '-2px'
            }}>
              FIND THE
              <br />
              <span style={{ color: '#BFFF00' }}>PERFECT</span> TEE TIME
            </h1>

            <p style={{
              fontSize: '20px',
              maxWidth: '600px',
              marginBottom: '48px',
              color: '#666666',
              lineHeight: 1.6
            }}>
              Optimize your golf trip with real-time pricing, weather data, and flight deals. 
              Save thousands on America's top 100 courses.
            </p>
          </div>
        </div>
      )}

      {/* Navigation Tabs - only show if not viewing detail */}
      {!selectedDestination && (
        <div style={{
          borderBottom: '1px solid #E5E5E5',
          background: '#FFFFFF'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            gap: '48px'
          }}>
            {[
              { id: 'discover', label: 'DISCOVER', icon: Search },
              { id: 'compare', label: 'COMPARE', icon: TrendingDown },
              { id: 'optimize', label: 'OPTIMIZE', icon: Star }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setView(id)}
                style={{
                  padding: '24px 0',
                  background: 'none',
                  border: 'none',
                  fontSize: '14px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  cursor: 'pointer',
                  color: view === id ? '#BFFF00' : '#999',
                  borderBottom: view === id ? '3px solid #BFFF00' : '3px solid transparent',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: "'Space Mono', monospace"
                }}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 24px'
      }}>
        {selectedDestination ? (
          // DESTINATION DETAIL VIEW
          <DestinationDetail 
            destination={selectedDestination}
            onBack={() => {
              setSelectedDestination(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            getSavings={getSavings}
          />
        ) : view === 'discover' ? (
          // DISCOVER GRID VIEW
          <DiscoverView 
            destinations={destinations}
            onViewDetails={(dest) => {
              setSelectedDestination(dest);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            getSavings={getSavings}
          />
        ) : view === 'compare' ? (
          <CompareView destinations={destinations.slice(0, 3)} />
        ) : (
          <OptimizeView destinations={destinations} groupSize={groupSize} getSavings={getSavings} />
        )}
      </div>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
          * { box-sizing: border-box; }
        `}
      </style>
    </div>
  );
}

// Destination Detail Component
function DestinationDetail({ destination, onBack, getSavings }) {
  const savings = getSavings(destination);
  
  return (
    <div>
      <button
        onClick={onBack}
        style={{
          padding: '12px 24px',
          background: '#F9F9F9',
          border: '1px solid #E5E5E5',
          borderRadius: '12px',
          fontSize: '14px',
          fontWeight: 700,
          cursor: 'pointer',
          fontFamily: "'Space Mono', monospace",
          marginBottom: '32px'
        }}
      >
        ← BACK TO ALL DESTINATIONS
      </button>

      {/* Hero */}
      <div style={{
        height: '400px',
        backgroundImage: `url(${destination.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '24px',
        position: 'relative',
        marginBottom: '48px'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)'
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '48px',
          left: '48px',
          color: '#FFF'
        }}>
          <h1 style={{ fontSize: '56px', fontWeight: 700, marginBottom: '12px' }}>
            {destination.name}
          </h1>
          <div style={{ fontSize: '24px', color: '#BFFF00' }}>
            📍 {destination.location}
          </div>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: window.innerWidth > 900 ? '2fr 1fr' : '1fr',
        gap: '48px'
      }}>
        {/* Left Column */}
        <div>
          {/* Overview */}
          <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '16px' }}>Overview</h2>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#666', marginBottom: '48px' }}>
            {destination.description}
          </p>

          {/* Highlights */}
          <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '24px' }}>Highlights</h2>
          <div style={{ display: 'grid', gap: '16px', marginBottom: '48px' }}>
            {destination.highlights.map((highlight, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '16px',
                padding: '16px',
                background: '#F9F9F9',
                borderRadius: '12px'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  background: '#BFFF00',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700
                }}>✓</div>
                <p style={{ fontSize: '16px', paddingTop: '4px' }}>{highlight}</p>
              </div>
            ))}
          </div>

          {/* Courses */}
          <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '24px' }}>The Courses</h2>
          <div style={{ display: 'grid', gap: '24px', marginBottom: '48px' }}>
            {Object.entries(destination.courseDetails).map(([name, details]) => (
              <div key={name} style={{
                padding: '32px',
                background: '#FFFFFF',
                border: '2px solid #E5E5E5',
                borderRadius: '16px'
              }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#BFFF00', marginBottom: '16px' }}>
                  {name}
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '16px',
                  marginBottom: '16px'
                }}>
                  <div>
                    <div style={{ fontSize: '12px', color: '#999' }}>PAR</div>
                    <div style={{ fontSize: '24px', fontWeight: 700 }}>{details.par}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#999' }}>YARDAGE</div>
                    <div style={{ fontSize: '24px', fontWeight: 700 }}>{details.yardage}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#999' }}>SLOPE</div>
                    <div style={{ fontSize: '24px', fontWeight: 700 }}>{details.slope}</div>
                  </div>
                </div>
                <div style={{
                  padding: '16px',
                  background: '#F9F9F9',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontStyle: 'italic'
                }}>
                  <strong>Signature:</strong> {details.signature}
                </div>
              </div>
            ))}
          </div>

          {/* Reviews */}
          <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '24px' }}>What Golfers Are Saying</h2>
          <div style={{ display: 'grid', gap: '24px', marginBottom: '48px' }}>
            {destination.reviews.map((review, i) => (
              <div key={i} style={{
                padding: '32px',
                background: '#F9F9F9',
                borderRadius: '16px'
              }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} style={{ fill: '#BFFF00', color: '#BFFF00' }} />
                  ))}
                </div>
                <p style={{
                  fontSize: '16px',
                  lineHeight: 1.7,
                  marginBottom: '16px',
                  fontStyle: 'italic'
                }}>
                  "{review.text}"
                </p>
                <div style={{ fontSize: '14px', color: '#666' }}>
                  <strong>{review.name}</strong> • {review.date}
                </div>
              </div>
            ))}
          </div>

          {/* Why Golfers Love It */}
          <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '24px' }}>
            Why Golfers Love {destination.name}
          </h2>
          <div style={{
            padding: '32px',
            background: 'linear-gradient(135deg, #BFFF00 0%, #A8E600 100%)',
            borderRadius: '20px'
          }}>
            {destination.whyGolfersLove.map((reason, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '16px',
                marginBottom: i < destination.whyGolfersLove.length - 1 ? '16px' : 0
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  background: '#000',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#BFFF00',
                  fontWeight: 700,
                  flexShrink: 0
                }}>{i + 1}</div>
                <p style={{ fontSize: '18px', fontWeight: 700, paddingTop: '4px' }}>{reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Pricing */}
        <div>
          <div style={{ position: 'sticky', top: '120px' }}>
            <div style={{
              background: '#FFFFFF',
              border: '2px solid #BFFF00',
              borderRadius: '20px',
              padding: '32px',
              boxShadow: '0 20px 60px rgba(191,255,0,0.2)'
            }}>
              <div style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#BFFF00',
                marginBottom: '16px'
              }}>
                💎 MEMBER PRICING
              </div>
              
              <div style={{
                fontSize: '48px',
                fontWeight: 700,
                color: '#BFFF00',
                marginBottom: '8px'
              }}>
                ${destination.pricing.offSeason.total}
              </div>
              
              <div style={{ fontSize: '14px', color: '#666', marginBottom: '24px' }}>
                per person (off-season)
              </div>

              <div style={{
                padding: '16px',
                background: '#BFFF00',
                borderRadius: '12px',
                marginBottom: '24px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '12px', fontWeight: 700 }}>YOU SAVE</div>
                <div style={{ fontSize: '32px', fontWeight: 700 }}>{savings.percentage}%</div>
                <div style={{ fontSize: '14px' }}>vs peak season</div>
              </div>

              <button style={{
                width: '100%',
                padding: '20px',
                background: '#000',
                color: '#BFFF00',
                border: 'none',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: "'Space Mono', monospace"
              }}>
                BOOK NOW →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Discover View Component
function DiscoverView({ destinations, onViewDetails, getSavings }) {
  return (
    <>
      <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '32px' }}>
        Top Destinations
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '32px'
      }}>
        {destinations.map(dest => {
          const savings = getSavings(dest);
          return (
            <div
              key={dest.id}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid #E5E5E5'
              }}
            >
              <div style={{
                height: '200px',
                backgroundImage: `url(${dest.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: '#BFFF00',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 700
                }}>
                  SAVE {savings.percentage}%
                </div>
              </div>

              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>
                  {dest.name}
                </h3>
                <div style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
                  📍 {dest.location}
                </div>

                <div style={{
                  padding: '16px',
                  background: '#F9F9F9',
                  borderRadius: '12px',
                  marginBottom: '16px'
                }}>
                  <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>
                    Member Pricing
                  </div>
                  <div style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    color: '#BFFF00'
                  }}>
                    ${dest.pricing.offSeason.total}
                  </div>
                  <div style={{ fontSize: '11px', color: '#666' }}>
                    per person • members only
                  </div>
                </div>

                <button 
                  onClick={() => onViewDetails(dest)}
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: '#000',
                    color: '#BFFF00',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    fontFamily: "'Space Mono', monospace"
                  }}
                >
                  VIEW DETAILS →
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

// Compare View Component
function CompareView({ destinations }) {
  return (
    <>
      <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '32px' }}>
        Seasonal Price Comparison
      </h2>
      {destinations.map(dest => (
        <div key={dest.id} style={{
          background: '#FFFFFF',
          border: '1px solid #E5E5E5',
          borderRadius: '20px',
          padding: '32px',
          marginBottom: '24px'
        }}>
          <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px' }}>
            {dest.name}
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
          }}>
            {[
              { season: 'Peak', data: dest.pricing.peak },
              { season: 'Shoulder', data: dest.pricing.shoulder },
              { season: 'Off-Season', data: dest.pricing.offSeason }
            ].map(({ season, data }) => (
              <div key={season} style={{
                padding: '24px',
                background: '#F9F9F9',
                borderRadius: '16px'
              }}>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>
                  {season}
                </div>
                <div style={{ fontSize: '36px', fontWeight: 700, color: '#BFFF00' }}>
                  ${data.total}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

// Optimize View Component
function OptimizeView({ destinations, groupSize, getSavings }) {
  return (
    <>
      <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '32px' }}>
        Trip Optimizer
      </h2>
      <div style={{
        background: 'linear-gradient(135deg, #BFFF00 0%, #A8E600 100%)',
        borderRadius: '24px',
        padding: '48px'
      }}>
        <h3 style={{ fontSize: '42px', fontWeight: 700, marginBottom: '32px' }}>
          Maximum Savings Strategy
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px'
        }}>
          {destinations
            .map(d => ({ ...d, savings: getSavings(d) }))
            .sort((a, b) => b.savings.percentage - a.savings.percentage)
            .slice(0, 3)
            .map((dest, i) => (
              <div key={dest.id} style={{
                background: 'rgba(0,0,0,0.05)',
                padding: '24px',
                borderRadius: '16px'
              }}>
                <div style={{ fontSize: '48px', fontWeight: 700 }}>#{i + 1}</div>
                <div style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>
                  {dest.name}
                </div>
                <div style={{ fontSize: '32px', fontWeight: 700 }}>
                  {dest.savings.percentage}% OFF
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}