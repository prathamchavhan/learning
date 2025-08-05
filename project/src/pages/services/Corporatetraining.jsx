// src/pages/services/Cloudbi.jsx
import React, { useEffect } from "react";
import "./service.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Cloudbi = () => 
  {

    useEffect(() => {
    const lefts = document.querySelectorAll('.slide-left');
    const rights = document.querySelectorAll('.slide-right');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('slide-left')) {
              entry.target.classList.add('animate-left');
            }
            if (entry.target.classList.contains('slide-right')) {
              entry.target.classList.add('animate-right');
            }
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.3 }
    );

    [...lefts, ...rights].forEach(el => observer.observe(el));
  }, []);
  return (
    <div className="cloudbi-page">
      {/* Hero Section */}
      <div className="container py-5">
      <div className="row align-items-center" style={{ paddingTop: '0px', paddingLeft: '0px' }}>
  <div className="col-md-5 mb-4 mb-md-0 me-4">
    <img
      src="/images/corporate/corporate training main.png"
      alt="Cloud BI"
      className="img-fluid rounded shadow"
      style={{
        height: "400px",
        width: "100%",
        objectFit: "cover",
        marginTop: '0px',
        marginLeft: '0px'
      }}
    />
  </div>

          <div className="col-md-6">
            <div
              className="p-4 px-4 text-white bg-dark"
              style={{
                border: '2px solid #00ffff',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '15px',
                boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.2)'
              }}
            >
              <h3 className="text-center fw-bold underline-hover" style={{
                background: 'linear-gradient(90deg, #29F1E5 0%, #00BCEB 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                cursor: 'pointer'
              }}>
                
       Corporate Training and Development
              </h3>
              <p className="mb-0 mt-3">
              Our customizable training programs cater to all levels of expertise, and our ongoing training opportunities ensure your team stays up-to-date with the latest BI trends and best practices.
               Empower your team with the skills and knowledge they need to unlock the full potential of your data and drive business growth.



              </p>
            </div>
          </div>
        </div>
      </div>






      {/* What is BI */}
<section className="container my-5">
  <div
    className="row text-white bg-dark border border-white rounded-4"
    style={{
      borderWidth: 'px',
      borderStyle: 'solid',
      boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.3)',
    }}
  >
    <div className="col-md-6 p-4 px-4 border-end d-flex flex-column justify-content-center">
      <h3
        className="fw-semibold mb-3 underline-hover"
        style={{
          background: 'linear-gradient(90deg, #29F1E5 0%, #00BCEB 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          cursor: 'pointer',
        }}
      >
        What we provide?
      </h3>
      <p style={{ fontSize: '17px' }}>
       Our company specializes in providing industry-leading BI corporate training services to help organizations develop the skills and knowledge they need to harness the power of data.
        We offer customized training programs tailored to the specific needs of your industry, covering everything from data analysis and visualization to dashboard design and business analytics.
         Our experienced trainers provide hands-on training that equips your team with the skills they need to extract insights from your data and make informed decisions. With our BI corporate training services,
          your organization can stay ahead of the curve in today's data-driven business landscape.
      </p>
    </div>
    <div className="col-md-6 text-center p-3 mt-5">
      <video
        src="/video/corporate training.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="rounded"
        style={{ maxWidth: '80%', width: '80%' }}
      />
    </div>
  </div>
</section>




{/* how we work */}
<section
  className="py-3 px-3"
  style={{ backgroundColor: 'transparent' }}
>
  <h2
    className="fw-bold mb-2"
    style={{
      background: 'linear-gradient(90deg, #29F1E5 0%, #00BCEB 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block',
      marginLeft: '5rem' // You can adjust (e.g., '1.5rem', '2rem')
    }}
  >
    How we work
  </h2>
</section>





{/* Data Mining Section */}
<div
  className="py-4 px-4 text-white border border-white bg-dark"
  style={{
    border: '2px solid #ffffffff',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderRadius: '10px',
    boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.2)',
    maxWidth: '90%',       // Adjust width here (or use '500px' for fixed)
    margin: '0 auto'       // Center it horizontally
  }}
>
  <div className="container d-flex align-items-center gap-4 ">
    {/* Left Side - Image */}
    <div className="slide-left">
    <div style={{ width: '300px', flexShrink: 0 }}>
      <img
        src="/images/corporate/corporate.png"
        alt="Data Mining"
        style={{ width: '300px', height: '300px', objectFit: 'contain' }}
        className="img-fluid"
      />
    </div>
</div>
    {/* Right Side - Text */}
     <div className="slide-right">
    <div>
     <h2
  className="fw-bold mb-2"
  style={{
    background: 'linear-gradient(90deg, #29F1E5 0%, #00BCEB 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '2rem',
    display: 'inline-block',
  }}
>
  Understand Your Corporate House
</h2>

      <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
       Ensuring training fits your organization’s structure, culture, goals, and workforce needs to support business objectives.
      </p>
    </div>   
  </div>
  </div>




  {/* Identify Your Challenges*/}
   {/* Identify Your Challenges*/}
<div className="container d-flex align-items-center gap-4 py-5">
  {/* Left Side - Text */}
  <div className="slide-left">
    <h2
      className="fw-bold mb-2"
      style={{
        background: 'linear-gradient(90deg, #29F1E5 0%, #00BCEB 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '2rem',
        display: 'inline-block',
      }}
    >
    Identify Your Challenges
    </h2>

    <p className="mb-0 text-white" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
     Pinpointing training challenges involves identifying performance gaps, workflow inefficiencies, and behavioral issues that reduce productivity or compliance. 
    </p>
  </div>
  {/* Right Side - Image */}
  <div className="slide-right" style={{ flexShrink: 0 }}>
    <img
      src="/images/corporate/identify.png"
      alt="identify"
      style={{ width: '300px', height: '300px', objectFit: 'contain' }}
      className="img-fluid"
    />
  </div>
</div>





{/* Brainstorm About Your Requirements */}

<div className="container d-flex align-items-center gap-4">
    {/* Left Side - Image */}
     <div className="slide-left">
    <div style={{ width: '300px', flexShrink: 0 }}>
      <img
        src="/images/corporate/brainstrom.png"
        alt="brain strom"
        style={{ width: '300px', height: '300px', objectFit: 'contain' }}
        className="img-fluid"
      />
    </div>
</div>
{/* Right Side - Text */}
     <div className="slide-right">
     <h2
  className="fw-bold mb-2"
  style={{
    background: 'linear-gradient(90deg, #29F1E5 0%, #00BCEB 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '2rem',
    display: 'inline-block',
  }}
>
 Brainstorm About Your Requirements

</h2>

      <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
      Defining training requirements means stakeholders specify needed competencies, skills, and logistics like format, duration, and materials.
      </p>
    </div>
  </div>




  {/*Focus on Your Priorities */}


   <div className="container d-flex align-items-center gap-4">
  {/* Left Side - Text */}
  <div className="slide-left">
    <h2
      className="fw-bold mb-2"
      style={{
        background: 'linear-gradient(90deg, #29F1E5 0%, #00BCEB 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '2rem',
        display: 'inline-block',
      }}
    >
      Focus on Your Priorities
    </h2>

    <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
    Prioritize training with the greatest impact on success by aligning with strategy and focusing resources on key skills and departments.
    </p>
  </div>

  {/* Right Side - Image */}
   <div className="slide-right" style={{ flexShrink: 0 }}>
  <div style={{ width: '300px', flexShrink: 0 }}>
    <img
      src="/images/corporate/focus.png"
      alt="Data Mining"
      style={{ width: '300px', height: '300px', objectFit: 'contain' }}
      className="img-fluid"
    />
  </div>
</div>
</div>



{/*Launch the Training Program*/}

<div className="slide-left">
  <div className="container d-flex align-items-center gap-4">
    
    {/* Left Side - Image */}
    <div style={{ width: '300px', flexShrink: 0 }}>
      <img
        src="/images/corporate/launch.png"
        alt="launch"
        style={{ width: '300px', height: '300px', objectFit: 'contain' }}
        className="img-fluid"
      />
    </div>

    {/* Right Side - Text */}
    <div className="slide-right">
      <h2
        className="fw-bold mb-2"
        style={{
          background: 'linear-gradient(90deg, #29F1E5 0%, #00BCEB 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '2rem',
          display: 'inline-block',
        }}
      >
       Launch the Training Program
      </h2>

      <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
      A successful launch involves coordinating facilitators, setting clear goals, ensuring accessibility, and adapting delivery to engage learners effectively.
      </p>
    </div>
  </div>




{/*Evaluate Its Reports */}
  
<div className="container d-flex align-items-center gap-4">
  {/* Left Side - Text */}
  <div className="slide-left">
    <h2
      className="fw-bold mb-2"
      style={{
        background: 'linear-gradient(90deg, #29F1E5 0%, #00BCEB 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '2rem',
        display: 'inline-block',
      }}
    >
      Evaluate Its Reports
    </h2>

    <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
  Evaluating training measures success by analyzing participation, scores, behavior, and feedback against goals to assess effectiveness and ROI.
    </p>
  </div>

  {/* Right Side - Image */}
   <div className="slide-right" style={{ flexShrink: 0 }}>
  <div style={{ width: '300px', flexShrink: 0 }}>
    <img
      src="/images/corporate/evaluate.png"
      alt="Data Mining"
      style={{ width: '300px', height: '300px', objectFit: 'contain' }}
      className="img-fluid"
    />
  </div>
</div>
</div>

</div>
</div>





{/*tools & intergration */}


   <section style={{ textAlign: 'center', marginTop: '80px' }}>
  <h2
    className="fw-bold mb-3"
    style={{
      background: 'linear-gradient(90deg, #29F1E5 0%, #00BCEB 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block'
    }}
  >
    Tools & Integration
  </h2>

  <div
    className="py-4 px-4 text-white border border-white bg-dark"
    style={{
      border: '2px solid #fff',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderRadius: '10px',
      boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.2)',
      maxWidth: '90%',
      margin: '10px auto',
       marginBottom: '100px'
    }}
  >

<div className="d-flex justify-content-center align-items-center gap-5">
  <img src="/tools/mongodb.png" alt="1" style={{ width: '100px', height: 'auto' }} />
  <img src="/tools/oracle.png" alt="2" style={{ width: '100px', height: 'auto' }} />
  <img src="/tools/qlik.png" alt="3" style={{ width: '100px', height: 'auto' }} />
  <img src="/tools/ibm.png" alt="4" style={{ width: '100px', height: 'auto' }} />
  <img src="/tools/tableau.png" alt="5" style={{ width: '100px', height: 'auto' }} />
</div>
<div className="d-flex justify-content-center align-items-center gap-5">
  <img src="/tools/hadoop.png" alt="1" style={{ width: '100px', height: 'auto' }} />
  <img src="/tools/thought.png" alt="2" style={{ width: '150px', height: 'auto' }} />
  <img src="/tools/microstrategy.png" alt="3" style={{ width: '100px', height: 'auto' }} />
  <img src="/tools/sqlserver.png" alt="4" style={{ width: '100px', height: 'auto' }} />
  <img src="/tools/Azure.png" alt="4" style={{ width: '100px', height: 'auto' }} />
  <img src="/tools/snowflake.png" alt="5" style={{ width: '100px', height: 'auto' }} />
</div>
  <div className="d-flex justify-content-center align-items-center gap-5">
  <img src="/tools/looker.png" alt="1" style={{ width: '100px', height: 'auto' }} />
  <img src="/tools/mysql.png" alt="2" style={{ width: '150px', height: 'auto' }} />
  <img src="/tools/informative.png" alt="3" style={{ width: '100px', height: 'auto' }} />
  <img src="/tools/powerbi.png" alt="4" style={{ width: '100px', height: 'auto' }} />
  <img src="/tools/powerapp.png" alt="4" style={{ width: '100px', height: 'auto' }} />
  <img src="/tools/bigquery.png" alt="5" style={{ width: '100px', height: 'auto' }} />
</div>
<div className="d-flex justify-content-center align-items-center gap-5">
  <img src="/tools/amazon.png" alt="1" style={{ width: '100px', height: 'auto' }} />
  <img src="/tools/datastudio.png" alt="2" style={{ width: '100px', height: 'auto' }} />
  <img src="/tools/powerautomate.png" alt="3" style={{ width: '100px', height: 'auto' }} />
  <img src="/tools/microsoft.png" alt="4" style={{ width: '100px', height: 'auto' }} />
  <img src="/tools/postgresql.png" alt="5" style={{ width: '100px', height: 'auto' }} />
</div>
  
</div>
</section>
  </div>

  );
};

export default Cloudbi;
