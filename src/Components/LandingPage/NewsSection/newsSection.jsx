import React from "react";
import NewsCardUnit from "../../Common/Cards/NewsCardUnit";
import news1 from "../../../Assets/news1.png";
import news2 from "../../../Assets/news2.png";
import news3 from "../../../Assets/news3.png";
import Button from "../../Common/ReUsableButton/Button";

function NewsSection() {
  return (
    <div className="mx-8 mb-5">
      {/* Header Section */}
      <div className="flex items-center justify-between w-full px-5 mt-8 mb-3">
        <div>
          <p className="text-[#003459]">What's New?</p>
          <h2 className="md:text-xl text-sm font-bold text-start text-[#003459]">
            Take a Look at Some of Our Pets
          </h2>
        </div>
        <div>
          {/* Right-aligned Button */}
          <Button variant="outlined" Title="View More" icon="true" />
        </div>
      </div>

      {/* News Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <NewsCardUnit
          image={news1}
          Description="The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus."
          Title="What is a Pomeranian? How to Identify Pomeranian Dogs"
          Tag="Pet knowledge"
        />
        <NewsCardUnit
          image={news2}
          Description="The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus."
          Title="What is a Pomeranian? How to Identify Pomeranian Dogs"
          Tag="Pet knowledge"
        />
        <NewsCardUnit
          image={news3}
          Description="The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus."
          Title="What is a Pomeranian? How to Identify Pomeranian Dogs"
          Tag="Pet knowledge"
        />
      </div>
    </div>
  );
}

export default NewsSection;
