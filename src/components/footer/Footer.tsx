import Container from "../container/Container";

const Footer = () => {
  return (
    <>
      <div className="bg-[#272727] pt-[60px] pb-[115px]">
        <Container>
          <div className="flex flex-col gap-2">
            <div className="h-[2px] w-full bg-[#fff]"></div>
            <div className="flex items-start ">
              <div className="flex flex-col gap-2 items-start flex-1">
                <h2 className="text-white font-bolt my-5 text-5xl">
                  DM-<span className="text-[#56b280]">Cookpal</span>
                </h2>
                <p className="w-full  max-w-[250px] text-white text-base font-normal leading-snug">
                  Your natural candle made for your home and for your wellness.
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-5 flex-1">
                <ul className="grid grid-cols-3 gap-5">
                  <div className="flex flex-col items-start gap-5">
                    <li className="text-[#56b280] text-base border-b border-transparent transition-transform hover:border-[#56b280] font-medium">
                      Discovery
                    </li>
                    <li className="text-[#e1e1e1] text-base font-medium border-b border-transparent transition-transform hover:border-[#e1e1e1]  leading-7">
                      New season
                    </li>
                    <li className="text-[#e1e1e1] text-base font-medium border-b border-transparent transition-transform hover:border-[#e1e1e1]  leading-7">
                      Most searched
                    </li>
                    <li className="text-[#e1e1e1] text-base font-medium border-b border-transparent transition-transform hover:border-[#e1e1e1]  leading-7">
                      Most selled
                    </li>
                  </div>

                  <div className="flex flex-col items-start gap-5">
                    <li className="text-[#56b280] text-base border-b border-transparent transition-transform hover:border-[#56b280] font-medium">
                      About
                    </li>
                    <li className="text-[#e1e1e1] text-base font-medium border-b border-transparent transition-transform hover:border-[#e1e1e1] leading-7">
                      Help
                    </li>
                    <li className="text-[#e1e1e1] text-base font-medium border-b border-transparent transition-transform hover:border-[#e1e1e1] leading-7">
                      Shipping
                    </li>
                    <li className="text-[#e1e1e1] text-base font-medium border-b border-transparent transition-transform hover:border-[#e1e1e1] leading-7">
                      Affiliate
                    </li>
                  </div>

                  <div className="flex flex-col items-start gap-5">
                    <li className="text-[#56b280] text-base border-b border-transparent transition-transform hover:border-[#56b280] font-medium">
                      Info
                    </li>
                    <li className="text-[#e1e1e1] text-base font-medium border-b border-transparent transition-transform hover:border-[#e1e1e1] leading-7">
                      Contact us
                    </li>
                    <li className="text-[#e1e1e1] text-base font-medium border-b border-transparent transition-transform hover:border-[#e1e1e1] leading-7">
                      Privacy Policies
                    </li>
                    <li className="text-[#e1e1e1] text-base font-medium border-b border-transparent transition-transform hover:border-[#e1e1e1] leading-7">
                      Terms & Conditions
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="">
        <Container>
          <div className="flex justify-between items-center py-6">
            <div className="w-[445px] h-6 text-[#5e6e89] text-base font-normal font-['Poppins'] leading-7">
              Copyright © 2024. All Rights Reserved.
            </div>
            <div>Designed with ❤️ by uxbly</div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
