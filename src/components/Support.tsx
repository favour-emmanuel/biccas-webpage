import { Icon } from "@iconify/react";

const Support = () => {
  return (
    <div className="support__sectionContainer">
      <div>
        <h1 className="support__text">
          How we support our partner all over the world
        </h1>
        <p className="text-appGray font-normal text-sm sm:text-base max-w-[33rem]  pt-5 pb-8">
          SaaS become a common delivery model for many business application,
          including office software, messaging software, payroll processing
          software, DBMS software, management software
        </p>
        <div className="flex gap-14">
          <div>
            <span className="flex">
              <Icon icon="ic:sharp-star" className="support__starIcon" />
              <Icon icon="ic:sharp-star" className="support__starIcon" />
              <Icon icon="ic:sharp-star" className="support__starIcon" />
              <Icon icon="ic:sharp-star" className="support__starIcon" />
              <Icon icon="ic:sharp-star" className="support__starIcon" />
            </span>
            <h4 className="font-medium">
              <span className="font-bold">4.9</span> / 5 rating
            </h4>
            <h2 className="text-appGray font-bold md:text-base text-sm">
              databricks
            </h2>
          </div>
          <div>
            <span className="flex">
              <Icon icon="ic:sharp-star" className="support__starIcon" />
              <Icon icon="ic:sharp-star" className="support__starIcon" />
              <Icon icon="ic:sharp-star" className="support__starIcon" />
              <Icon icon="ic:sharp-star" className="support__starIcon" />
              <Icon icon="ic:twotone-star-half" className="support__starIcon" />
            </span>
            <h4 className="font-medium">
              <span className="font-bold">4.9</span> / 5 rating
            </h4>
            <h2 className="text-appGray font-bold md:text-base text-sm">
              databricks
            </h2>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex flex-col lg:px-0 lg:mt-0 mt-12">
        {/* activity icon */}
        <div className="flex gap-6">
          <div className="box__Icon">
            <Icon icon="mynaui:activity" className="support__icon" />
          </div>
          <dl>
            <dt className="font-bold md:text-xl text-lg">Publishing</dt>
            <dd className="text-appGray max-w-[28rem] pt-3 pb-6 sm:text-base text-sm">
              Plan, collaborate, and publishing your contetn that drivees
              meaningful engagement and growth for your brand
            </dd>
          </dl>
        </div>
        {/* pie chart icon */}
        <div className="flex gap-6">
          <div className="box__Icon">
            <Icon icon="lucide:pie-chart" className="support__icon" />
          </div>
          <dl>
            <dt className="font-bold md:text-xl text-lg">Analytics</dt>
            <dd className="text-appGray max-w-[28rem] pt-3 pb-6 sm:text-base text-sm ">
              Analyze your performance and create goegeous report
            </dd>
          </dl>
        </div>
        {/* analytics icon */}
        <div className="flex gap-6">
          <div className="box__Icon">
            <Icon icon="carbon:mac-command" className="support__icon" />
          </div>
          <dl>
            <dt className="font-bold md:text-xl text-lg">Engagement</dt>
            <dd className="text-appGray max-w-[28rem] pt-3 pb-5 sm:text-base text-sm">
              Quiuckly navigate you anda engage with your adience
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Support;
