import React from 'react';
import Tabs from '../../components/tabs/index';
import FAQ from '../../components/faq/index';
import "./style.less";

const Page4: React.FC = () => {
  return (
    <div id="faq" className="page page4">
      <h2>FAQs</h2>
      <Tabs initialTab="Test1" tabList={["For Students", "For Companies"]}>
      <FAQ 
        panelTitles={[
          "What time should I get there?", 
          "How do I attend?", 
          "Who can attend?", 
          "What is the dress code?",
          "What kind of companies will be coming?"
        ]} 
        panelContents={[
          "The ballroom doors will open at 10:00 AM for admission. You can arrive early to line up outside before doors open. \
           We require all attendees to have registered before entering, which you can do ahead of time <a href='https://acmurl.com/spacereg'>here</a>. \
           We will send out tickets to those who registered right before the event.", 

          "You can register at <a href='https://acmurl.com/spacereg'>https://acmurl.com/spacereg</a> — more information regarding day-of logistics will be announced closer \
          to the event. The event will be held in Price Center’s West Ballroom.", 

          "All UCSD students (undergraduate and graduate students). If you're an alumni and you're interested in attending, \
           please use your alumni ucsd.edu email address to register. You can get one if you don't have one already \
           <a href='https://www.alumni.ucsd.edu/s/1170/rd18/wide.aspx?sid=1170&gid=1&pgid=8556'>here.</a>", 

          "No dress code for this event - Keep it Simple. More information — <a href='https://www.forbes.com/sites/rodneywilliams/2017/03/30/the-new-startup-attire-just-be-you/#7c27bc5764b2'>Keep it Simple by Forbes</a>",

          "SPACE is exclusively hosting startups. We’re planning on hosting a vast variety of companies from different industries, \
          and a full lineup will be posted in February."
        ]}
      />
      <FAQ 
        panelTitles={[
          "When and Where is SPACE?", 
          "How do I join?", 
          "What is the deadline to join?", 
          "Parking / Food / Event Logistics", 
          "What Qualifies a Company to be a Startup?", 
          "What Types of Students Will Attend?", 
          "What companies will attend?"
        ]} 
        panelContents={[
          "SPACE will be held from 10am to 6pm on March 9th, 2020. Please arrive around 8:30am to facilitate set-up and check-in. \
           SPACE will be in the Price Center West Ballroom in the center of UC San Diego. Parking assistance and information will \
           be provided closer to the event (February).",

          "Please send an email to Adam Lee (a3lee@ucsd.edu), the Sponsorship Director for SPACE. After an initial phone call to \
           judge startup fit, we’ll send payment information regarding registration.", 

          "While there isn’t a tight deadline, we’d like to confirm all companies by early to mid February to allow for time to \
           book parking and event logistics accordingly.", 

          "Closer to the event, ~Mid to Late February, registered companies will be sent information to assist in parking and \
           event logistics. All meals will be provided (Breakfast / Lunch / Snacks).",

          "SPACE defines a company that is currently in an early growth stage of it’s company that is currently still operating. \
          If you aren’t sure you’re a startup, but are interested in the event / getting more involved with ACM at UC San Diego, \
          please email Adam Lee at <a href='mailto:a3lee@ucsd.edu'>a3lee@ucsd.edu</a>. Startups typically have not exited, \
          are not publicly traded, and are under 500 employees.",

          "SPACE is geared toward software engineers, designers, and data scientists. \
          For convenience, we also provide digital resumes of applicants, indexed by skills and desired roles.",

          "More information will be posted as the event nears (Mid February). For any \
          additional questions or inquiries, please reach out to Adam Lee at <a href='mailto:a3lee@ucsd.edu'>a3lee@ucsd.edu</a>"

        ]}
      />
      </Tabs>
    </div>
  );
}

export default Page4;
