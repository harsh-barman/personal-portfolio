import React from 'react';

const ScrollCardStack = () => {
  // Sample card data
  const cardData = [
    {
      id: 1,
      title: "First Card",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique, unde possimus quia at magnam sed cupiditate? Reprehenderit, harum!",
      image: "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100"
    },
    {
      id: 2,
      title: "Second Card",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique, unde possimus quia at magnam sed cupiditate? Reprehenderit, harum!",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100"
    },
    {
      id: 3,
      title: "Third Card",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique, unde possimus quia at magnam sed cupiditate? Reprehenderit, harum!",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100"
    },
    {
      id: 4,
      title: "Fourth Card", 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique, unde possimus quia at magnam sed cupiditate? Reprehenderit, harum!",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100"
    },
    {
      id: 5,
      title: "Fifth Card",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique, unde possimus quia at magnam sed cupiditate? Reprehenderit, harum!",
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100"
    }
  ];

  return (
    <div className="min-h-screen" >
      {/* Top spacer */}
      <div style={{ height: '20vh' }} />
      
      {/* Cards container */}
      <div className="w-full max-w-8xl mx-auto">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className="sticky mb-4"
            style={{ 
              top: `${200 + (index * 20)}px`,
              zIndex: index + 1
            }}
          >
            <div className="bg-white rounded-2xl flex overflow-hidden shadow-2xl mx-4">
              <div className="w-2/5 flex-shrink-0 flex md:w-2/5">
                <img
                  className="w-full h-full object-cover aspect-square md:aspect-square"
                  src={card.image}
                  alt=""
                />
              </div>
              <div className="p-6 md:p-10 flex flex-col">
                <h1 className="text-3xl md:text-6xl font-semibold text-gray-800 m-0 p-0 mb-4">
                  {card.title}
                </h1>
                <p className="text-lg md:text-2xl leading-relaxed text-gray-800">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom spacer */}
      <div style={{ height: '20vh' }} />
      
      <style jsx>{`
        @media (max-width: 768px) {
          .sticky > div {
            flex-direction: column;
          }
          .sticky > div > div:first-child {
            width: 100%;
          }
          .sticky img {
            aspect-ratio: 16 / 9;
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollCardStack;