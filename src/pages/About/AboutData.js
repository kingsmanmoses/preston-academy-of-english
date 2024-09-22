import "./aboutData.css";
import profile from "../../assets/img/commentProfile.jpg";

const teamData = [
  {
    img: profile,
    teamTitle: "Principal",
    teamName: "Abdullah Nakhuda",
  },
  {
    img: profile,
    teamTitle: "Enrolment Officer",
    teamName: "Daniel Whittle ",
  },
  {
    img: profile,
    teamTitle: "Academic Manager",
    teamName: "Andrew Hogg",
  },
  {
    img: profile,
    teamTitle: "Welfare and Safegaurding",
    teamName: "Ayesha Nakhuda",
  },
];

export const AboutData = [
  {
    about: "About Us",
    answer: (
      <div className="aboutData-cont">
        <p>
          Preston Academy of English was established in 2012 with the aim of
          providing quality English language courses. We are located in the
          heart of Preston city centre near to the famous Preston market and
          close to the main shopping area and restaurants. Preston Academy of
          English is very close to the bus station and a short distance from the
          train station which means travel to places of interest is very easy
          and convenient.
        </p>
        <div className="data-detailCont">
          <h2>Our Mission</h2>
          <p>
            Our mission is to maintain a consistently high standard of teaching
            and learning, through flexible and relevant courses, in a welcoming,
            supportive and inclusive learning environment. Being a family-owned
            business, the atmosphere is friendly and vibrant, yet extremely
            professional, where students feel safe, secure, engaged, and
            comfortable.
          </p>
        </div>
        <div className="data-detailListCont">
          <h2>Courses</h2>
          <p>Preston Academy of English delivers the following courses:</p>
          <ul>
            <li>General English- pre-A1, A1, A2, B1, B2, C1, C2</li>
            <li>
              IELTS preparation courses (foundation, intermediate, advanced) for
              university entrance or work/general purposes
            </li>
            <li>LanguageCert examination preparation classes</li>
            <li>English conversation classes</li>
          </ul>
        </div>
        <div className="data-detailCont">
          <h2>Accreditation</h2>
          <p>
            In addition to being accredited by the British Council, PAE is an
            authorized LanguageCert Exam Centre.
          </p>
        </div>
        <div className="data-detailCont">
          <h2>Facilities</h2>
          <p>
            Preston Academy of English maintains 4 networked classrooms. Our
            experienced, qualified teachers benefit from, well-stocked resources
            with up-to-date books, online resources and CDs. Facilities for
            students include a computer aided learning room; tea, coffee as well
            as internet access.
          </p>
        </div>
      </div>
    ),
  },
  {
    about: "Careers At Preston Academy",
    answer: (
      <div className="aboutData-cont">
        <div className="data-detailCont">
          <h2>Work For Us</h2>
          <p>Job Opportunities at Preston Academy of English</p>
          <p>Teaching Vacancies</p>
          <div className="data-detailListCont">
            <p>
              <span style={{ fontWeight: "bold" }}>
                Self Employed TEFL Teachers
              </span>{" "}
              we are always looking for qualified and dedicated teachers for
              short-term cover work which may lead on to a more long-term
              position on our intensive courses (20 hours + per week)
              Requirements
            </p>
            <p>
              Our <span style={{ fontWeight: "bold" }}>minimum</span>{" "}
              requirements for teaching work are:
            </p>
            <ul>
              <li>Trinity Cert TESOL, CELTA or equivalent</li>
              <li>Bachelor degree level qualification</li>
              <li>
                Two years’ full-time post qualification teaching experience
              </li>
            </ul>
            <p>
              Applications from candidates with the Trinity diploma/DELTA or MA
              TESOL qualification are particularly welcome.
            </p>
          </div>
          <div className="data-detailCont">
            <h2>How To Apply</h2>
            <p>
              Please send us a request for an application form with a CV and
              cover letter to
              <a
                href="/"
                style={{ color: "#ea1d24", textDecoration: "underline" }}
              >
                {" "}
                info@prestonacademyofenglish.com{" "}
              </a>
            </p>
            <p>Please address the email FAO the Principal. Thanks</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    about: "Academy Closing Dates",
    answer: (
      <div className="aboutData-cont">
        <p>
          Please note that our Academy will be closed on the following dates.
        </p>
        {/* //! For the table */}
        <div className="general-tableCont">
          <h1>UK Bank Holidays</h1>
          <table className="general-table">
            <tbody>
              <tr>
                <td> Spring bank holiday</td>
                <td> 26/05/2024</td>
                <td>Monday</td>
              </tr>
              <tr>
                <td> Summer bank holiday</td>
                <td> 26/08/2024</td>
                <td>Monday</td>
              </tr>
              <tr>
                <td className="notice-red">
                  Our Academy will be closed for Christmas and New Year from
                  Monday 23rd December 2024 and reopen on Monday 6th January
                  2025..
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    about: "Inspection & Accreditation",
    answer: (
      <div className="aboutData-cont">
        <ul>
          <li>
            Preston Academy of English is accredited by the British Council for
            teaching English in the UK. The report for British council can be
            found{" "}
            <a href="https://www.englishuk.com/en/course-finder/course-finder-results?id=4120">
              {" "}
              here.
            </a>
          </li>
          <li>
            Preston Academy of English is an EnglishUK member and an exam
            partner for{" "}
            <a href="https://www.languagecert.org/en/exam-types/test-centre-exams/europe/united-kingdom/preston-academy-of-english-1117679">
              LanguageCert.
            </a>{" "}
          </li>
        </ul>
      </div>
    ),
  },
  {
    about: "Meet The Team",
    answer: (
      <div className="aboutData-cont">
        <p>
          We have a strong core of teachers, who have experience teaching all
          levels and a wide range of nationalities. They provide personalized
          classes and work hard to ensure that you enjoy your experience at
          Preston Academy of English whilst improving all areas of your language
          skills.
        </p>
        {teamData.map((team, index) => {
          return (
            <div key={index} className="team-cont">
              <img src={team.img} alt="" />
              <div className="team-details">
                <p>{team.teamTitle}</p>
                <p>{team.teamName}</p>
              </div>
            </div>
          );
        })}
      </div>
    ),
  },
  {
    about: "Our Facilities",
    answer: (
      <div className="aboutData-cont">
        <div className="data-detailCont">
          <h2>School Facilities</h2>
          <ul>
            <li>
              Preston Academy of English has 4 classrooms complete with
              whiteboards and computer with audio and visual facilities.
            </li>
            <li>Free wi-fi.</li>
          </ul>
        </div>
        <div className="data-detailCont">
          <h2>Student Learning Centre</h2>
          <p>
            Preston Academy of English has a Student Learning Centre. The room
            is used for classes and testing for initial assessments as well as
            progress tests. Facilities include the following:
          </p>
          <ul>
            <li>Networked computers with high-speed Internet access.</li>
            <li>A range of ESL software covering all skill areas.</li>
            <li>Headphones for learning pronunciation.</li>
          </ul>
          <p>Benefits of the SLC include:</p>
          <ul>
            <li>
              Improve your reading comprehension with CD ROMs and online
              resources
            </li>
            <li>
              Expand your vocabulary with websites and course CD ROMs and online
              resources
            </li>
            <li>
              Discover additional grammar points using a grammar program for
              your level
            </li>
            <li>Enhance your writing by using online writing guides</li>
            <li>Practice listening and pronunciation</li>
            <li>Record and play back your voice</li>
            <li>
              Try online ESL exercises, quizzes, dictionaries and encyclopedias
            </li>
            <li>Explore ESL websites (under guidance from your teacher)</li>
          </ul>
        </div>
        <div className="data-detailCont">
          <h2>Student Lodge</h2>
          <p>
            Includes sofas, chairs, hot drinks machine and a kettle to make your
            own drinks. The student lounge has a nice street view where students
            can relax and make new friends.
          </p>
        </div>
      </div>
    ),
  },
  {
    about: "Mission Statement",
    answer: (
      <div className="aboutData-cont">
        <p>
          At Preston Academy of English, our mission is to empower individuals
          with the language they need to achieve their objectives. We aim to
          create an inclusive and dynamic learning environment that inspires a
          lifelong love for the English language and an appreciation of British
          culture.
        </p>
        <div className="data-detailCont">
          <h2>Our Core Values:</h2>
          <ul className="num-cont">
            <li className="num-list">
              <span style={{ fontWeight: "bold" }}>
                Excellence in Education:
              </span>{" "}
              We are committed to providing high-quality English language
              instruction. We aim to provide excellence in both teaching,
              content of our courses to make sure our learners acquire the
              language skills needed for academic, professional, and personal
              success.
            </li>
            <li className="num-list">
              <span style={{ fontWeight: "bold" }}>
                Cultural Understanding:
              </span>{" "}
              Language is a way to understand and appreciate different cultures.
              We aim to show our students a world view, showing respect,
              empathy, and an open mind.
            </li>
            <li className="num-list">
              <span style={{ fontWeight: "bold" }}>Inclusively:</span> PAE is a
              place where diversity is celebrated. We embrace learners from all
              walks of life, creating an inclusive and supportive community that
              values the unique contributions of everyone.
            </li>
            <li className="num-list">
              <span style={{ fontWeight: "bold" }}>Innovation:</span> In a
              rapidly changing world, we are dedicated to staying at the
              technological front of language education. Through original
              teaching methods, new technology, and new and fresh course
              content, we want our students to have the skills needed for 21st
              century.
            </li>
            <li className="num-list">
              <span style={{ fontWeight: "bold" }}>Student-Centred:</span> We
              understand that each learner is unique, we adopt a student-centred
              beginning that helps their individual needs. Our goal is to
              support the strengths of each student, providing a personal
              learning journey that helps their language learning.
            </li>
          </ul>
        </div>
        <div className="data-detailCont">
          <h2>Our Vision</h2>
          <p>
            To be recognized as a leading institution in English language
            education, known for our commitment to our learners’ needs and
            success.
          </p>
        </div>
      </div>
    ),
  },
  {
    about: "Terms & Conditions",
    answer: (
      <div className="aboutData-cont">
        <div className="data-detailCont">
          <h2>Definitions</h2>
          <p>
            In these terms: Fees means Accommodation Fees, the Accommodation
            Booking fees (non-refundable), Course Fees, Course Registration fees
            (non-refundable), Airport Transfer Fees and all other fees charged
            in respect of a course or accommodation. <br /> <br /> Accommodation
            Fees means all fees for accommodation arranged or provided by PAE,
            excluding the accommodation booking fee. PAE means Preston Academy
            of English, 93 Lancaster Road, Preston, PR1 2QJ. <br /> <br />{" "}
            Course Fees means fees for tuition. <br /> <br /> Deposit means a
            deposit of 4 weeks of the total course fees or a financial guarantee
            from the sponsor (only refundable in cases of visa refusal notified
            to PAE 14 days before course start date). <br /> <br />
            You means You the individual student, or You the Agent, or You the
            Company or You the Organization. <br /> <br /> Agent means a person
            who makes a booking of a course for the benefit of one or more third
            party students <br /> <br /> Your Students means those students who
            you book a course for You the Agent, or You the Company or You the
            Organization. <br /> <br /> Start Date means the start date of your
            course or accommodation.
          </p>
        </div>
        <div className="data-detailCont">
          <h2>Contract</h2>
          <p>
            This agreement is between PAE and You. By submitting Your
            registration form(s) or completed students group data sheet You
            shall be deemed to have accepted these conditions to the exclusion
            of any other terms and conditions. <br /> <br /> PAE shall provide a
            course or courses teaching English as a foreign language or other
            course(s) to You or Your Students according to the terms of this
            agreement. <br /> <br /> PAE reserves the rights to change details
            of its courses, including facilities and course dates, due to
            circumstances beyond PAEs control or where the number of students
            enrolled on a course is insufficient or if a course is
            oversubscribed or overbooked.
          </p>
        </div>
        <div className="data-detailCont">
          <h2> Minimum age, proficiency level, and suitability of courses</h2>
          <p>
            The minimum age of students is 18 on or before the start date of the
            course. PAE courses may not be suitable for those with specific
            learning needs. It is Your responsibility to discuss your needs with
            PAE prior to booking a course. PAE can provide one-to-one tuition
            where agreed in advance. PAE does not make or provide any
            representation, warranty or guarantee as to the suitability of any
            course for the learning needs of You or Your Students.
          </p>
        </div>
        <div className="data-detailCont">
          <h2>Course Timetable</h2>
          <p>
            Courses start every Monday. When Monday is a Public Holiday, the
            course will start on Tuesday. You will be charged for the Public
            Holiday if your course starts on the Public Holiday or if a Public
            Holiday occurs during Your course booking. <br /> <br />
            The minimum full-time course duration is 2 weeks.
          </p>
        </div>
        <div className="data-detailCont">
          <h2>Academy Holidays</h2>
          <p>
            PAE is closed on all UK public holidays. There is no reduction for
            course tuition fees on these days. PAE is closed over the Christmas
            and New Year period (see website for dates). Tuition fees are not
            payable for this period.
          </p>
        </div>
        <div className="data-detailCont">
          <h2>Students Holidays</h2>
          <p>
            Preston Academy of English is committed to the aim of upholding the
            values of being a learning community. All our students are expected
            to attend <b>100%</b> of their course. If a student is absent or
            late for a class, you need to inform the school a day before or
            before 9.00am on the day. You can call the school on{" "}
            <b> 01772 821039</b> or email{" "}
            <a
              href="mailto:info@prestonacademyofenglish.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: "red", textDecoration: "underline" }}
            >
              info@prestonacademyofenglish.com{" "}
            </a>{" "}
            . The school cannot issue a certificate of attendance at the end of
            the course if a students final attendance is lower than 80%. The
            student may not be allowed to progress to the next level. Students
            who have one-to-one lessons needs to give 24 hours notice of
            cancellation. Students will be charged for non-attendance of one to
            one classes if 24 hours notice is not given. Appropriate action will
            be taken when attendance is below 80% such as informing the sponsors
            of the student about their poor attendance. <br /> <br />
            All attendance letters, progress reports and final certificates are
            issued subject to students meeting the minimum 80% attendance level.{" "}
            <br /> <br />
            Preston Academy of English understands that long-term students may
            wish to take a short break from their course. Tuition fees will not
            be charged for authorized holidays agreed before the start of your
            course. However, if your teachers feel that you are missing a large
            amount of the course content, you may be asked to repeat your
            current level or be tested again on your return from holiday. <br />{" "}
            <br />
            If you wish to request a holiday after starting your course with
            PAE, please remember course fees during the holiday period will not
            be refunded, but the course end date may be extended by the period
            of the authorized holiday. Course end dates will not be extended in
            the case of an unauthorized absence. <br /> <br />
            Students must ask for time off from their course(s) by completing a
            â€˜Student Holiday Request Form, at least 2 weeks before the
            anticipated absence. This form is available from reception, and must
            be returned to the reception. <br /> <br />
            If your final attendance (after any requested holidays have been
            taken) is more than 80%, we will accept your request, and the time
            off will be marked as holiday. PAE will not accept your request if
            your attendance is less than 80%. Any days taken off without the
            knowledge or permission of PAE will be marked as absent. <br />{" "}
            <br />
            Do not book your flights or make holiday arrangements until you
            receive an email or letter from PAE confirming that your holiday has
            been approved. <br /> <br />
            To comply with PAE regulations, you are allowed a holiday period in
            accordance with your course duration. A maximum of 2 weeks may be
            taken at one time, and you must give 2 weeks notice when booking
            your holidays. <br /> <br />
            If you take an unauthorised holiday, this will be noted on your
            attendance record. Where students have been granted visas on the
            basis of their studies at PAE, the Home Office will be immediately
            notified of the unauthorized absence. <br /> <br />
            Students receiving course funding from the Saudi Arabian Cultural
            Bureau (SACB) must inform the SACB as well as PAE if they intend to
            travel outside the United Kingdom after commencing a course of
            study. PAE will notify the SACB of any unauthorized student absences
            or requests for course extensions, and the student will be directly
            responsible for any refunds demanded by the SACB. The SACB will also
            be informed if a student withdraws, or is suspended from a course.{" "}
            <br /> <br />
          </p>
        </div>
        <div className="data-detailCont">
          <h2>Insurance</h2>
          <p>
            You are strongly advised to arrange full insurance cover for health,
            belongings and cancellation of studies.
          </p>
        </div>
        <div className="data-detailCont">
          <h2>Deposits and payment of fees</h2>
          <p>
            All bookings will be conditional until PAE has received a completed
            application form from You, and full payment in cleared funds. <br />{" "}
            <br />
            Payment of all Fees must be made at least 14 days before the course
            start date, or on booking if booking within 28 days of the course
            start date. <br /> <br />
            Upon receipt of a completed application form and Deposit in cleared
            funds, PAE will issue You with a Preliminary Confirmation Letter
            stating the details of our course(s) and the balance of the fees
            due. <br /> <br />
            Upon receipt of all Fees in cleared funds, PAE will issue a Final
            Confirmation Letter confirming details of your course(s). PAE
            reserves the right to levy an administration charge of Â£50 each
            time course details are changed following a request by You.
          </p>
        </div>
        <div className="data-detailCont">
          <h2>Refunds</h2>
          <p>
            Refunds will not be made in respect of Course Registration fees or
            express mail fees. <br /> <br />
            PAE does not give any cash refunds. All refunds will be by way of
            bank transfer. PAE will not be liable for any bank charges or
            currency fluctuations. <br /> <br />
            An administration charge of Â£200 will also be levied on all
            refunds. And the same for any further visa application refusals.{" "}
            <br /> <br />
            Refunds are paid 28 days after the expiry of any notice period.{" "}
            <br /> <br />
            For card payment refunds, the payment will be refunded through the
            card processing company to the original card. This may extend the
            processing time for receiving the refund up to 7 days.
          </p>
        </div>
        <div className="data-detailCont">
          <h2>Visas</h2>
          <p>
            PAE will only issue a Visa letter to You or Your Students once a
            Deposit or full payment has been received. <br /> <br />
            If You are refused a visa, PAE must receive a copy of the original
            notification given by the Home Office/ Embassy explaining why your
            visa has been rejected at least 14 days prior to the Start Date. PAE
            will refund your full Fees less Â£200 administration charge per visa
            refusal. If You are an Agent and one or more of Your Students are
            denied visas or refused entry, PAE will refund that part of the Fees
            relating to the relevant students. <br /> <br />
            Where we receive this evidence, the refund will be paid to you
            within four weeks of your providing us with bank details and signed
            authorization that the refund should be paid to that account. If
            written evidence of a refusal is received less than 14 days prior to
            arrival then the refund will be paid less the administrative fee and
            the Deposit payment.
          </p>
        </div>
        <div className="data-detailCont">
          <h2>Changing course dates before You start</h2>
          <p>
            {" "}
            You must provide a minimum of 14 days' notice if you postpone the
            start of your course (or accommodation). If such notice is not
            given, the normal fees may be charged. If you postpone more than
            once, a change fee of £50 will be charged.
          </p>
        </div>

        <div className="data-detailCont">
          <h2>Changing course dates after You start</h2>
          <p>
            If You or one of Your Students wishes to cancel or postpone a course
            after the start of the course you must give PAE 14 days notice.{" "}
            <br /> <br />
            You will be given a credit to pay for the Course Fees at a later
            date. The credit will be for an amount equal to the Course Fees in
            respect of any part of the relevant course remaining after the later
            of-
          </p>

          <div className="data-detailListCont">
            <ul>
              <li>when You or Your Student leaves the course or</li>
              <li>
                when the 14 days notice period expires.The credit will remain
                valid for courses taking place within 12 months after the date
                of issue of the credit. The credit is not transferable to any
                other person.
              </li>
            </ul>
          </div>
        </div>
        <div className="data-detailCont">
          <h2>Changing classes and timetables</h2>
          <p>
            Students cannot reduce their weekly study hours or change from a
            full time course to a part-time course or one-to-one class. PAE
            reserves the right to alter the timetable and/or transfer students
            from one class to another, from one time of study to another, and to
            merge small classes, reschedule or cancel classes and courses.
          </p>
        </div>

        <div className="data-detailCont">
          <h2>Cancellation of courses before You start</h2>
          <p>
            You must inform PAE in writing if You wish to cancel your booking,
            or a booking for one of Your Students. There will be no refund of
            course fees if a student breaches visa conditions. <br /> <br />
            If You cancel a booking between 14- 28 days before the Start Date,
            PAE will refund the Fees, minus the Deposit and Â£200 admin fee.{" "}
            <br /> <br />
            If You cancel a booking between 0- 13 days before the Start Date PAE
            will refund the 50% of course Fees, minus the Deposit and Â£200
            admin fee. <br /> <br />
            Students booked on one-to-one lessons need to provide 24 hours
            notice of cancellation for the lesson to be re-arranged. No refund
            or re-arrangement will be provided for â€˜no-shows or when less than
            24 hours notice is given.
          </p>
        </div>

        <div className="data-detailCont">
          <h2>Cancellation of courses after You start</h2>
          <p>
            Courses lasting up to 4 weeks cannot be cancelled after the course
            start date. You will not be entitled to any refund of course fees.{" "}
            <br /> <br />
            Courses lasting between 5- 11 weeks require 21 days written notice
            of cancellation. You will be credited for an amount equal to 75% of
            the Course Fees remaining after the 21 days notice period expires.
            An administration charge of Â£200 will also be levied. <br /> <br />
            Courses lasting 12 or more weeks require 42 days written notice of
            cancellation. You will be credited for an amount equal to 75% of the
            Course Fees remaining after the 42 days notice period expires. An
            administration charge of Â£200 will also be levied.
          </p>
        </div>

        <div className="data-detailCont">
          <h2>Accommodation</h2>
          <p>
            Preston Academy of English welcomes students from all over the
            world. Whilst studying with us, students can choose to stay in
            student self-catering accommodation in order to fully experience
            student life and culture in the UK. <br /> <br />
            Preston Academy of English provides an accommodation booking service
            as part of a course + student self-catering accommodation package.{" "}
            <br /> <br />
            We can suggest using agents and providers. Preston Academy of
            English has not checked these agents and providers and is not
            recommending them; PAE is only providing a list of local contacts
            and established agents. PAE does not know the levels of quality
            being provided and is not responsible for the student using any of
            the organizations. PAE is not connected with these agents;
            therefore, please check with the agents directly for reassurance of
            quality and standards.
          </p>
        </div>

        <div className="data-detailCont">
          <h2> Limitation and exclusion of liability</h2>
          <p>
            PAE or its staff shall not be liable to You or Your Students under
            this contract for any indirect loss, costs, expenses, damage, injury
            or inconvenience howsoever caused, arising from-
          </p>
          <div className="data-detailListCont">
            <ul>
              <li>This contract.</li>
              <li>Any failure by PAE to provide all or part of any course.</li>
              <li>The tuition or courses provided by PAE.</li>
              <li>
                The use by You or Your Students of any accommodation provided or
                arranged by PAE, and whether caused by negligence, breach of
                contract or otherwise.
              </li>
            </ul>
          </div>
          <p>
            PAE shall not be liable to You for any direct or indirect loss of
            profit or other costs, expenses, damages, injury or inconvenience
            arising from any contract or arrangement between You and Your
            Students, or claim against You by one or more of Your Students
            arising from any of the events listed in the clause above. <br />{" "}
            <br />
            Where PAE is unable to deliver all or any part of a course, PAEâ€™s
            liability shall be limited to the Course Fees for the course not
            provided. In all other cases, the maximum aggregate liability of PAE
            to You or any of Your Students in respect of this contract, whether
            for any breach of its obligations under this contract, negligence or
            otherwise, shall be limited to the total Fees payable by You. <br />{" "}
            <br />
            Nothing in this contract or in any other contract shall exclude or
            in any way limit PAEâ€™s liability for fraud or for death or
            personal injury caused by its negligence, or any other liability to
            the extent that such liability may not be excluded or limited as a
            matter of law.
          </p>
        </div>

        <div className="data-detailCont">
          <h2>Conduct and Behavior</h2>
          <p>
            Students must comply with PAEs code of conduct and all other PAE
            policies and procedures. If students breach PAEâ€™s code of conduct
            or other policies or procedures, or display any other unacceptable
            behavior, including but not limited to harassment of teachers or
            other students, possession or consumption of illegal drugs or
            alcohol, smoking in restricted areas, malicious damage to PAEâ€™
            property or the accommodation, jeopardizing other students safety,
            or breaking the law, they may be dismissed from their course at the
            discretion of PAE without any refund of Fees. Students who arrive
            more than ten minutes late to any class without having notified PAE
            in advance will not be allowed to join the class. <br /> <br />
            Students are expected to inform PAE when they are unable to attend
            classes. Missed classes are only rearranged at PAEâ€™s discretion,
            and where offered, must be taken within an agreed time scale (the
            original course duration). Persistent absenteeism may result in the
            student being dismissed from the course without any refund of Fees.
          </p>
        </div>

        <div className="data-detailCont">
          <h2>Medical Information</h2>
          <p>
            You must inform PAE of any special medical conditions affecting You
            or Your Students. <br /> <br />
            PAE reserves the right to expel from any course any student with a
            serious medical condition or a condition which requires regular
            staff supervision, and which was not notified to PAE prior to the
            Start Date, without any refund of Fees.
          </p>
        </div>

        <div className="data-detailCont">
          <h2>Responsibilities of Agents</h2>
          <p>If You are an Organizer, You shall-</p>
          <div className="data-detailListCont">
            <ul>
              <li>
                Provide information on courses to Your Students or prospective
                students and assist such students to make appropriate choices as
                to their courses with PAE.
              </li>
              <li>
                Assist Your Students in completing application forms and
                providing other required documents.
              </li>
              <li>
                Provide all information and support that Your Students need in
                order to obtain the official papers that are required by Your
                Students to be able to partake in a course with PAE.
              </li>
              <li>
                Forward to PAE copies of the application form and associated
                documents from Your Students.
              </li>
              <li>
                Provide to PAE, where requested, details of Your Students
                qualifications and UK equivalents and assist PAE in making
                decisions regarding relevant programmes of study.
              </li>
              <li>Assist Your Students with pre-departure requirements.</li>
              <li>
                Advise Your Students to obtain comprehensive travel and health
                insurance cover.
              </li>
              <li>
                Ensure that Your Students comply with the policies and
                procedures of PAE in force.
              </li>
            </ul>
          </div>
          <p>If You are an Organizer, You shall not-</p>
          <div className="data-detailListCont">
            <ul>
              <li>
                have authority, nor hold Yourself out, or permit any person to
                hold themselves out, as being authorized to bind PAE in any way,
                nor do any act which might reasonably create the impression that
                You are so authorized.
              </li>
              <li>
                Make or enter into any contracts or commitments or incur any
                liability for or on behalf of PAE, including for the provision
                of courses or the price for them, and shall not negotiate any
                terms for the provision of a course with Your Students.
              </li>
            </ul>
          </div>
        </div>

        <div className="data-detailCont">
          <h2>Queries and Complaints</h2>
          <p>
            You must bring queries or complaints to the attention of the
            relevant reception staff, Principal or Welfare Manager of PAE
            immediately so that PAE can deal with your query or complaint. PAE
            will not deal with retrospective queries or complaints.
          </p>
        </div>

        <div className="data-detailCont">
          <h2>Force Majeure</h2>
          <p>
            PAE shall not be responsible or liable for its failure to perform
            any of its obligations, or for any disruption to courses if such
            failure or disruption is beyond the control of PAE, whether caused
            by acts of God, fire, flood, wars, embargo, strikes, labour
            disputes, explosions, riots, of laws, rules, regulations,
            restrictions or orders of any governmental authority, or any other
            cause beyond the control of PAE. <br /> <br />
            Where, as a result of any event listed above, PAE takes steps to
            arrange extra or emergency accommodation, transfers or repatriation
            or incurs other expenses, You shall be responsible for all costs
            incurred by PAE.
          </p>
        </div>

        <div className="data-detailCont">
          <h2>Governing Law</h2>
          <p>
            This contract and any disputes arising from it shall be governed by
            the law of England and Wales, and the Courts of England and Wales
            shall have exclusive jurisdiction to settle any dispute which may
            arise in connection with the contract.
          </p>
        </div>

        <div className="data-detailCont">
          <h2> Severance</h2>
          <p>
            If any court or competent authority finds that any provision of this
            agreement (or part of any provision) is invalid, illegal or
            unenforceable, that provision or part-provision shall, to the extent
            required, be deemed to be deleted, and the validity and
            enforceability of the other provisions of this agreement shall not
            be affected. If any invalid, unenforceable or illegal provision of
            this agreement would be valid, enforceable and legal if some part of
            it were deleted, the provision shall apply with the minimum
            modification necessary to make it legal, valid and enforceable.{" "}
            <br /> <br />
            Courses lasting between 5- 11 weeks require 21 days written notice
            of cancellation. You will be credited for an amount equal to 75% of
            the Course Fees remaining after the 21 days notice period expires.
            An administration charge of Â£200 will also be levied. <br /> <br />
            Courses lasting 12 or more weeks require 42 days written notice of
            cancellation. You will be credited for an amount equal to 75% of the
            Course Fees remaining after the 42 days notice period expires. An
            administration charge of £200 will also be levied.
          </p>
        </div>
      </div>
    ),
  },
];
