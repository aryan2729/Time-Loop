import './Account.css';



function Account() {


  function underDevelopment(){

    
      alert("Under Development");
 
    
  }
  return (


      <>

      <div className='Account-main'>
      
      <AccountUpparPart />


      <div className="highlights-container">

        <HighlightItem img="/assets/coding1.jpg" label="Coding Setup" />
        <HighlightItem img="/assets/coding2.jpg" label="Projects" />
        <HighlightItem img="/assets/coding3.jpg" label="Algorithms" />
        <HighlightItem img="/assets/coding4.jpg" label="Web Dev" />

      </div>
      
      
      <div className="profile-tabs">
        <button className="tab-button active" >
          <i className="fas fa-th"></i>
          <span>POSTS</span>
        </button>
        <button className="tab-button" onClick={underDevelopment}>
           <i className="fas fa-film"></i>
           <span>REELS</span>
        </button>
        <button className="tab-button" onClick={underDevelopment}>
          <i className="fas fa-bookmark"></i>
          <span>SAVED</span>
        </button>
         <button className="tab-button" onClick={underDevelopment}>
          <i className="fas fa-user-tag"></i>
          <span>TAGGED</span>
        </button>
      </div>

      <AccountLowerPart />
      
      
      </div>

      </>

   
  )
}

function AccountUpparPart(){

  return <>

    <div className='upparmain'>

      <div className='profilediv' >
          <img className='profile' src="assets/profileee.jpg" alt="Profile photo" />
      </div>
      <div className='threediv'>

        <div className='firstdiv' >
          <div className='name'>
            <h3>onlyy.aryan</h3>
          </div>
          <button className='editbutton' >Edit Profile</button>
          <button className='viewbutton'>View archive</button>
         
        </div>
        <div className='seconddev'>
            <h4 >18 posts</h4> 
            <h4 >6 followers </h4>
            <h4 >9 following </h4>
        </div>
        <div className='thirddev'>

          <h4><b>Aryan</b></h4>
          <h4>Google SDE</h4>

        </div>

      </div>

    </div>
  
  </>
}

function HighlightItem({ img, label }) {
  return (
    <div className="highlight-item">
      <div className="highlight-img-container">
        <img src={img} alt={label} className="highlight-img" />
      </div>
      <div className="highlight-label">{label}</div>
    </div>
  );
}

function AccountLowerPart(){

  return <>

    <div className='accountposts'> 

     <div>
        <img className='SearchPosts' src='/assets/po1.png' alt='Post 1' />
        <img className='SearchPosts' src='/assets/po2.jpeg' alt='Post 2' />
        <img className='SearchPosts' src='/assets/po3.jpeg' alt='Post 3' />
      </div>
     <div>
        <img className='SearchPosts' src='/assets/po4.jpg' alt='Post 4' />
        <img className='SearchPosts' src='/assets/po5.jpeg' alt='Post 5' />
        <img className='SearchPosts' src='/assets/po6.jpeg' alt='Post 6' />
      </div>
     <div>
        <img className='SearchPosts' src='/assets/po7.jpeg' alt='Post 7' />
        <img className='SearchPosts' src='/assets/po8.jpeg' alt='Post 8' />
        <img className='SearchPosts' src='/assets/po9.jpeg' alt='Post 9' />
      </div>
      <div>
        <img className='SearchPosts' src='/assets/po10.jpg.webp' alt='Post 10' />
        <img className='SearchPosts' src='/assets/po11.jpg' alt='Post 11' />
        <img className='SearchPosts' src='/assets/po12.jpg' alt='Post 12' />
      </div>
      <div>
        <img className='SearchPosts' src='/assets/po13.jpg' alt='Post 13' />
        <img className='SearchPosts' src='/assets/po14.jpg' alt='Post 14' />
        <img className='SearchPosts' src='/assets/po15.jpg' alt='Post 15' />
      </div>
      <div>
        <img className='SearchPosts' src='/assets/po16.jpeg' alt='Post 16' />
        <img className='SearchPosts' src='/assets/po17.jpg' alt='Post 17' />
        <img className='SearchPosts' src='/assets/po18.jpeg' alt='Post 18' />
      </div>
      



    </div>

  </>
}




export default Account; 