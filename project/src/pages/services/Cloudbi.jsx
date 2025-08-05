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
      src="/images/busniess.png"
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
                cloud-based BI?
              </h3>
              <p className="mb-0 mt-3">
                Our Cloud-based BI services provide a secure & scalable solution for managing and analyzing large volumes of data. With powerful analytics, reporting, and visualization features, our solution enables businesses to make smarter decisions from anywhere, anytime on any device.
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
        What is BI?
      </h3>
      <p style={{ fontSize: '17px' }}>
        Cloud-based BI services are a powerful way to manage and analyze large
        volumes of data in the cloud. These services offer a range of tools and
        features for reporting, analytics, and data visualization, all
        accessible through a web-based interface. With cloud-based BI services,
        businesses can access their data from anywhere, collaborate more easily
        with team members, and make faster and more informed decisions based on
        real-time insights. Plus, the scalability and flexibility of
        cloud-based BI services make them a cost-effective solution for
        businesses of all sizes.
      </p>
    </div>
    <div className="col-md-6 text-center p-3">
      <video
        src="/video/bi.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="rounded"
        style={{ maxWidth: '100%', width: '100%' }}
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
        src="/images/Enhancer.png"
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
  Data Mining
</h2>

      <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
        Extracting raw data means gathering unprocessed information 
        <p>from multiple sources
        before cleaning and analysis.</p>
      </p>
    </div>   
  </div>
  </div>




  {/* Analytical Processing -sites*/}
   {/* Analytical Processing Section */}
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
      Analytical Processing
    </h2>

    <p className="mb-0 text-white" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
      Data structuring turns raw inputs into organized formats like tables or JSON,
      making analysis and decision-making easier.
    </p>
  </div>
  {/* Right Side - Image */}
  <div className="slide-right" style={{ flexShrink: 0 }}>
    <img
      src="/images/analytics.png"
      alt="Data Mining"
      style={{ width: '300px', height: '300px', objectFit: 'contain' }}
      className="img-fluid"
    />
  </div>
</div>





{/*quering */}

<div className="container d-flex align-items-center gap-4">
    {/* Left Side - Image */}
     <div className="slide-left">
    <div style={{ width: '300px', flexShrink: 0 }}>
      <img
        src="/images/quering.png"
        alt="Data Mining"
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
  Querying
</h2>

      <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
       Retrieving data subsets means filtering rows or columns based on criteria to streamline analysis, boost performance, and protect sensitive data.
      </p>
    </div>
  </div>




  {/*Reporting-site */}


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
      Reporting
    </h2>

    <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
     Data structuring turns raw inputs into organized formats like tables or JSON, making analysis and decision-making easier
      
    </p>
  </div>

  {/* Right Side - Image */}
   <div className="slide-right" style={{ flexShrink: 0 }}>
  <div style={{ width: '300px', flexShrink: 0 }}>
    <img
      src="/images/Reporting.png"
      alt="Data Mining"
      style={{ width: '300px', height: '300px', objectFit: 'contain' }}
      className="img-fluid"
    />
  </div>
</div>
</div>



{/*improved decesion making*/}

<div className="slide-left">
  <div className="container d-flex align-items-center gap-4">
    
    {/* Left Side - Image */}
    <div style={{ width: '300px', flexShrink: 0 }}>
      <img
        src="/images/Decisionmaking.png"
        alt="Data Mining"
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
        Improved Decision Making
      </h2>

      <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
        Informed business decisions rely on data and analysis<br />
        to reduce risk and choose the best opportunities.
      </p>
    </div>
  </div>
</div>
</div>




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
