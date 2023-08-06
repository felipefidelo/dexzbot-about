import React from "react";
import {Container} from "react-bootstrap";


function Home2() {
    return (

        <section>
<Container  className="full-height center-contents">
            <Container className="shade">
                <div className="questions">
                  <span className="rectangle">
                    What is the company culture like?
                  </span></div>
                <div className="questions2">
                  <span className="rectangle">
                    What are the true work hours?
                  </span></div>
                <Container className="home-content">

                <h1 className="main-name-sect">
                    <strong>
                        <span className="text-wrapper"> Job postings </span>
                            can be quite vague,
                         and it's hard to figure out if a workplace
                    aligns with your requirements and values.
                    </strong></h1>


                        <h1 className="sometimes-you-re">
                            <span className="text-wrapper">Sometimes, you’re left </span>
                            <span className="span">more questions</span>
                            <span className="text-wrapper"> than answers!</span>
                        </h1>



                </Container>

                <div className="questions4">
                  <span className="rectangle">
                    What amenities does this office have?
                  </span></div>
                <div className="questions5">
                  <span className="rectangle">
                    What is the career growth trajectory?
                  </span></div>
                <div className="questions3">
                  <span className="rectangle">
                   Does the office have female co-workers?
                  </span></div>
            </Container>
</Container>

        </section>


    );
}

export default Home2;
