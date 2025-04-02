
import React from 'react';

const OriginStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-comic text-5xl text-marvel-black inline-block relative">
            ORIGIN STORY
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-marvel-red"></div>
          </h2>
        </div>

        {/* Comic Strip Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Panel 1 */}
          <div className="comic-panel animate-pop bg-marvel-blue/10 delay-100">
            <div className="mb-4 font-comic text-xl text-marvel-black uppercase">Chapter 1</div>
            <h3 className="font-marvel text-2xl mb-4 text-marvel-black">The Beginning</h3>
            <p className="mb-4">
              Our hero discovered the digital realm at a young age, captivated by the power of 
              technology to transform ideas into reality.
            </p>
            <div className="speech-bubble mt-4">
              <p className="font-comic">
                "I knew from the first line of code that this was my calling!"
              </p>
            </div>
          </div>

          {/* Panel 2 */}
          <div className="comic-panel animate-pop bg-marvel-red/10 delay-200">
            <div className="mb-4 font-comic text-xl text-marvel-black uppercase">Chapter 2</div>
            <h3 className="font-marvel text-2xl mb-4 text-marvel-black">The Training</h3>
            <p className="mb-4">
              Through rigorous training and countless hours mastering the fundamentals, 
              our hero developed the skills needed to face any coding challenge.
            </p>
            <div className="speech-bubble mt-4">
              <p className="font-comic">
                "Each bug fixed made me stronger!"
              </p>
            </div>
          </div>

          {/* Panel 3 */}
          <div className="comic-panel animate-pop bg-marvel-gold/10 delay-300">
            <div className="mb-4 font-comic text-xl text-marvel-black uppercase">Chapter 3</div>
            <h3 className="font-marvel text-2xl mb-4 text-marvel-black">The Hero Emerges</h3>
            <p className="mb-4">
              Now, equipped with an arsenal of programming languages and frameworks, 
              The Code Avenger stands ready to take on any development challenge.
            </p>
            <div className="speech-bubble mt-4">
              <p className="font-comic">
                "With great code comes great responsibility!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginStory;
