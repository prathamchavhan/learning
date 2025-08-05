// src/pages/services/Cloudbi.jsx
import React, { useEffect } from "react";
import "./service.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Application= () => 
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
      src="/images/Applicatio/application.png"
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
               Application Development
              </h3>
              <p className="mb-0 mt-3">
              Our company provides top-notch application development services to clients looking to enhance their digital presence.
               We offer customized solutions tailored to the specific needs and goals of each client, including web, mobile, and desktop 
               application development. Our team of experienced developers uses the latest tools and technologies to develop high-performance, 
               scalable, and user-friendly applications that meet your requirements. 



              </p>
            </div>
          </div>
        </div>
      </div>



      {/* What we provide */}


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
        What we provide
      </h3>
      <p style={{ fontSize: '17px' }}>
       The application development process involves several stages, including requirements gathering,
        planning and design, development, testing and quality assurance, and deployment and maintenance. 
        Our team works closely with clients to understand their needs and goals, and we use the latest tools and 
        technologies to build high-quality, user-friendly applications. We also provide ongoing support and maintenance 
        services to ensure that the application runs smoothly and stays up-to-date with the latest technology trends.
      </p>
    </div>
    <div className="col-md-6 text-center p-3 mt-5">
      <video
        src="/video/application.mp4"
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
        src="/images/Applicatio/requriement.png"
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
 Requirements gathering
</h2>

      <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
        Identifying the needs and goals of the client and gathering requirements for the application.
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
     Planning and design
    </h2>

    <p className="mb-0 text-white" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
     Creating a detailed plan for the application, including the architecture, user interface, and functionality.
    </p>
  </div>
  {/* Right Side - Image */}
  <div className="slide-right" style={{ flexShrink: 0 }}>
    <img
      src="/images/Applicatio/planning.png"
      alt="planning"
      style={{ width: '300px', height: '300px', objectFit: 'contain' }}
      className="img-fluid"
    />
  </div>
</div>





{/*Development */}

<div className="container d-flex align-items-center gap-4">
    {/* Left Side - Image */}
     <div className="slide-left">
    <div style={{ width: '300px', flexShrink: 0 }}>
      <img
        src="/images/Applicatio/devlopment.png"
        alt="Devlopment"
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
  Development
</h2>

      <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
      Building the application using the latest tools and technologies.
      </p>
    </div>
  </div>




  {/*Testing and quality assurance*/}


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
      Testing and quality assurance
    </h2>

    <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
     Thoroughly testing the application to ensure that it meets the client's requirements and is free of bugs and errors.
    </p>
  </div>

  {/* Right Side - Image */}
   <div className="slide-right" style={{ flexShrink: 0 }}>
  <div style={{ width: '300px', flexShrink: 0 }}>
    <img
      src="/images/Applicatio/testing.png"
      alt="testing"
      style={{ width: '300px', height: '300px', objectFit: 'contain' }}
      className="img-fluid"
    />
  </div>
</div>
</div>



{/*Deployment and  maintenance*/}

<div className="slide-left">
  <div className="container d-flex align-items-center gap-4">
    
    {/* Left Side - Image */}
    <div style={{ width: '300px', flexShrink: 0 }}>
      <img
        src="/images/Applicatio/deployment.png"
        alt="Deployment"
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
       Deployment and  maintenance
      </h2>

      <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
       Deploying the application and providing ongoing support and maintenance services
        to ensure that it runs smoothly and stays up-to-date with the latest technology trends.
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

export default Application;
