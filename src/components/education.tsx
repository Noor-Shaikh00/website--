import "../style/education.css";
function Education (){
    return(
        <main className="edu-main">
            <div className="edu-text">
                <h1>Education</h1>
                <p>Trusted By Professional Quality And Servicers Our Clients From Industries Trust Us To Deliver Top-Notch Quality And Results.Here&apos;s What They To Say About Our Work.</p>
            </div>
            <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">University Of Karachi</h1>
                    <span>Student</span>
                </div>
                <div className="computer">
                <h1>Bachelor In Computer Science </h1>
                <p>I Am Pursing A Bachelor&apos;s Degree In Computer Science At The Prestigious University Of Karachi Starting In 2024.This Program Will Provide A Solid Foundation In Programmingsquo;Software Developmentsquo;And Data Analysis.</p>
                </div>
            </div>

            {/* box 2 */}
            <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">University Of Karachi</h1>
                    <span>Student</span>
                </div>
                <div className="computer">
                <h1>Certified Of Web Training </h1>
                <p>At The Governor IT Initiativesquo;Students Explore AIsquo;Metaversesquo;And Blockchain Technologies In An Accesible  Manner.This Program Is An Excellent Opportunity For Those Interest In These Innovative Fields.</p>
                </div>
            </div>
             {/* box 3 */}
             <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">University Of Karachi</h1>
                    <span>Completed</span>
                </div>
                <div className="computer">
                <h1>Web Development </h1>
                <p>At Smitsquo;Students Gain Knowledge In Web Developmentsquo;Digital Marketingsquo;And Freelancing From Exceptional Teachers.They Offer Valuable Mentorship,Eqipping Students With Practical Skills Essential For Career Success.</p>
                </div>
            </div>
        </main>
    )
}
export default Education