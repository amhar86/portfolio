import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";

const Home = () => {
  return (
  <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        
        <div className="text-center xl:text-left">
          <span className="text-xl">Computer Engineering Student</span>
          <h1 className="h1 =mb-6">
            Hey, I'm <br /> <span className="text-accent">Amhar Rishan</span>
          </h1>
          <p>I am a Third-Year Computer Engineering student at McMaster University with hands-on experience in embedded systems and FPGA development. I have worked on many projects and am highly motivated to learn and apply new skills to tackle challenging problems.</p>
        
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <div className="mb-8 xl:mb-0 mt-6">
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
            </div>
          </div>

        </div>
        
        
      </div>

    </div>
  </section>
)
};

export default Home; 