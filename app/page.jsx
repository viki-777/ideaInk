import Footer from "@/components/Footer";
import Search from "@/components/Search";
import { Button } from "@/components/ui/button";
import { BrainCircuitIcon, Filter, Heart} from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    
    <div>

    
    <div className="pt-40 md:h-screen md:w-screen">
      <div className="md:px-0 px-5">
           
          <h1 className="md:text-5xl text-4xl text-primary capitalize font-semibold text-center mb-3">Business Name </h1> 
          <p className="md:text-5xl text-4xl text-primary capitalize font-semibold text-center mb-3"> Generator</p>

           
          <p className="text-zinc-500 text-center text-xl">Generate the perfect  Business name by our ai-powered business name generator tool!</p>

          <Search />
      </div>
      <div className="md:flex justify-between gap-10 md:px-56 px-5 mt-28">
        <div className="md:mb-0 mb-10">
          <BrainCircuitIcon className="text-primary mb-3" size={42} />
          <h4 className="text-black text-xl font-semibold">Generate Idea</h4>
          <p className="text-black">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quis sequi sapiente reprehenderit laboriosam aperiam modi perspiciatis consequatur. Est, velit?
          </p>
        </div>
        <div className="md:mb-0 mb-10">
          <Filter className="text-primary mb-3" size={42} />
          <h4 className="text-black text-xl font-semibold">Filter Result</h4>
          <p className="text-black">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quis sequi sapiente reprehenderit laboriosam aperiam modi perspiciatis consequatur. Est, velit?
          </p>
        </div>
        <div className="md:mb-0 mb-10">
          <Heart className="text-primary mb-3" size={42} />
          <h4 className="text-black text-xl font-semibold">Save Name</h4>
          <p className="text-black">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quis sequi sapiente reprehenderit laboriosam aperiam modi perspiciatis consequatur. Est, velit?
          </p>
        </div>
      </div>

    </div>
    <Footer />
    </div>
  );
}
