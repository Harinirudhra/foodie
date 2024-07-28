import React,{useState} from 'react'


const   Content = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [city, setCity] = useState('');
    const [details, setDetails] = useState(null);
    
  
    const handleClick = () => {
      setDetails({
        name,
        phoneNumber,
        city
      });
    };
    return(

<div className="min-h-screen  flex flex-col items-center  inset-0 w-fix h-fix bg-gradient-to-r from-pink-500 to-red-500 transform-skew-y-6-z-10"  >
     
      <main className="w-full flex-grow flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-center items-center p-8 w-full" style={{ backgroundImage: "url('4.webp')"  }}>
          <div className="w-80 h-80 md:w-96 md:h-96 bg-gray-300 rounded-md overflow-hidden shadow-md mb-4 md:mb-0">
           
            <video className="w-full h-full object-cover" controls>
              <source src="3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
           
          </div>
          <div className="max-w-md text-center md:text-left md:ml-8 " >
          <img src="1.png" className="w-20 h-20" alt="Logo" />
            <h1 className="text-4xl text-orange-500 font-bold">Welcome to Foodie</h1>
            <p className="text-lg  text-gray-700 mt-4 ">
              At foodie, we redefine convenience with our seamless food delivery service.
              Whether you're craving the flavors of home or exploring new culinary delights,
              foodie brings it all to your doorstep. From hearty breakfasts to gourmet dinners
              and everything in between, our curated menu caters to every palate and preference.
            </p>
            <button   className="mt-6 px-4 py-2 bg-white text-pink-500   borderfont-semibold rounded hover:bg-orange-500 hover:text-white">Join the Waitlist</button>
          </div>
        </div>
        <section className="w-full bg-rose-300  p-8 text-center shadow-md">
          <h2 className="text-2xl text-orange-500 font-bold">Join the Waitlist</h2>
          <form  className="mt-4 flex flex-col md:flex-row justify-center items-center">
          Name:
          <input
            type="text"
            className='rounded-md'
            value={name}
            onChange={(e) => setName(e.target.value)}
            
          />
          
            Phone Number:
          <input
            type="text"
            className='rounded-md'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
         
          City:
            <input
            type="text"
            className='rounded-md'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
            <button type="submit" onClick={handleClick}  className="p-2 m-2 bg-orange-500 text-white rounded-md">Join the Waitlist</button>
          </form>
          {details && (
            <div className="mt-4 text-center">
              <p className="text-2xl text-orange-500 font-bold">Thank you!</p>
            </div>
          )}
        </section>
      </main>
    
      <footer className="w-full p-4 text-center  bg-black shadow-md">
        <p className='text-white'>&copy; Foodie, 2024</p>
      </footer>
     
    </div>
  );
};

export default Content;

 