import { useState } from 'react';
import './Home.css';

function Home() {
  const generateRandomCount = (max) => {
    return Math.floor(Math.random() * (max + 1));
  };

  const randomLikes = generateRandomCount(5000);
  const comments = generateRandomCount(500);
  const shares = generateRandomCount(100);

  return (

    <div>
      
      
      <Post 
        profilePhoto="/assets/stranger2.jpg"
        username="coding_guy_1"
        date="1 d"
        image="/assets/A1.jpg" 
        initialLikes={randomLikes} 
        title="Exploring new coding techniques"
        comments={comments}
        shares={shares}
      />
      <Post 
        profilePhoto="/assets/stranger4.jpg"
        username="dev_learner_2"
        date="2 d"
        image="/assets/A2.jpg" 
        initialLikes={randomLikes} 
        title="My latest project progress"
        comments={comments}
        shares={shares}
      />
      <Post 
        profilePhoto="/assets/stranger5.jpg"
        username="algo_master_3"
        date="3 d"
        image="/assets/A3.jpg" 
        initialLikes={randomLikes} 
        title="Algorithms are fascinating!"
        comments={comments}
        shares={shares}
      />
      <Post 
        profilePhoto="/assets/stranger6.jpg"
        username="webdev_pro_4"
        date="4 d"
        image="/assets/A4.jpg" 
        initialLikes={randomLikes} 
        title="Tips for better web development"
        comments={comments}
        shares={shares}
      />
      <Post 
        profilePhoto="/assets/12654-2048x1152-desktop-hd-peaky-blinders-background-photo.jpg"
        username="lang_explorer_5"
        date="1 w"
        image="/assets/A5.jpg" 
        initialLikes={randomLikes} 
        title="Learning new programming languages"
        comments={comments}
        shares={shares}
      />
      <Post 
        profilePhoto="/assets/po5.jpeg"
        username="debug_expert_6"
        date="2 w"
        image="/assets/A6.jpg" 
        initialLikes={randomLikes} 
        title="Debugging challenges and solutions"
        comments={comments}
        shares={shares}
      />
      <Post 
        profilePhoto="/assets/pubg.jpg"
        username="data_struct_7"
        date="3 w"
        image="/assets/A7.jpg" 
        initialLikes={randomLikes} 
        title="Understanding data structures"
        comments={comments}
        shares={shares}
      />
      <Post 
        profilePhoto="/assets/pubg2.jpg"
        username="fullstack_8"
        date="1 m"
        image="/assets/A8.jpg" 
        initialLikes={randomLikes} 
        title="Frontend vs Backend development"
        comments={comments}
        shares={shares}
      />
      <Post 
        profilePhoto="/assets/pubg3.jpg"
        username="tool_master_9"
        date="2 m"
        image="/assets/A9.jpg" 
        initialLikes={randomLikes} 
        title="My favorite coding tools"
        comments={comments}
        shares={shares}
      />
      <Post 
        profilePhoto="/assets/pubg4.jpg"
        username="coding_fun_10"
        date="3 m"
        image="/assets/A10.jpg" 
        initialLikes={randomLikes} 
        title="Coding challenges and fun"
        comments={comments}
        shares={shares}
      />
      
      


    </div>

  );
}


function Post({profilePhoto , username , date , image , initialLikes , title , comments , shares}){


  const [follow , setfollow] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false); 

  function toggle(){
    setfollow(!follow);
  }


  function handleLike(){
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  }


  const formatCount = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
  };

  return (
    <>
    <div className="post-container"> 

      <div className='uppar'>
        <img src={profilePhoto} className='photoprof' alt="profile photo" />  
        <h3>{username}</h3>
        <h3 > <b>{date}</b></h3>
        <button onClick={toggle}>{follow ? "Following" : "Follow"} </button> 
      </div>
      <div className="post-image-container"> 
        <img src={image}alt="image" />
      </div>
      <div className="post-actions"> 
        <div className="icon-group">
          <i className={`fas fa-heart ${isLiked ? 'liked' : ''}`} onClick={handleLike}></i>
          <span>{formatCount(likes)}</span>
        </div>
        <div className="icon-group">
          <i className="fas fa-comment"></i>
          <span>{comments}</span>
        </div>
        <div className="icon-group">
          <i className="fas fa-share"></i>
          <span>{shares}</span>
        </div>
      </div>
      <div className='title'>
          <h4>{username}</h4><p>{title}</p>
      </div>

    </div>
    </>
  )
}

export default Home; 