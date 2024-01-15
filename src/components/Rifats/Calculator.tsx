import land from '../../assets/MacBook Pro 16_ - 1 (1).svg'
import round from '../../assets/Ellipse 2.svg'
const Calculator = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-8xl font-bold text-gray-800 pt-20">
          Platform to <span className="text-blue-500">find work</span> and also to find{" "}
          <span className="text-yellow-300">great talent.</span>
        </h1>

       <div className='relative'>
       <img src={land} alt="landing" className='w-full h-full mt-10 object-cover '/>
       <h1 className='text-5xl font-bold text-white absolute top-[300px] left-[40px] z-10'>Get <br /> Started </h1>
       <img src={round} className='w-[100px] h-[100px] absolute top-[267px] left-[270px] bg-black rounded-full outline-none' />
          
      
       </div>
      </div>
    </div>
  );
};

export default Calculator;
