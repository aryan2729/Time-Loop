import { use, useState, useRef, useEffect } from 'react';
import './Reels.css';

function Reels() {
  
  const generateRandomCount = (max) => {
    return Math.floor(Math.random() * (max + 1));
  };

  const randomLikes = generateRandomCount(100000); 
  const randomComments = generateRandomCount(500); 
  const randomShares = generateRandomCount(300); 

  return (
    <div className="reels-container">
        <ReelVideo
          videoSource="/assets/breakingBad2.mp4" 
          ProfilePhoto="https://i.pravatar.cc/150?img=1"
          Username="Breaking Bad"
          Description="Context:El Camino is a direct sequel to the critically acclaimed TV series Breaking Bad." 
          initialLikes={randomLikes}
          commentCount={randomComments}
          shareCount={randomShares}
          isLiked={false} 
        />
        <ReelVideo
          videoSource="/assets/breakingBad1.mp4"
          ProfilePhoto="https://i.pravatar.cc/150?img=2"
          Username="Nature Explorer"
          Description="Beautiful sunset at the beach with waves crashing against the shore."
          initialLikes={randomLikes}
          commentCount={randomComments}
          shareCount={randomShares}
          isLiked={false}
        />
        <ReelVideo
          videoSource="/assets/breakingbad3.mp4"
          ProfilePhoto="https://i.pravatar.cc/150?img=3"
          Username="Food Lover"
          Description="Making the perfect homemade pizza with fresh ingredients!"
          initialLikes={randomLikes}
          commentCount={randomComments}
          shareCount={randomShares}
          isLiked={false}
        />
        <ReelVideo
          videoSource="/assets/breakingbad4.mp4"
          ProfilePhoto="https://i.pravatar.cc/150?img=4"
          Username="Travel Diary"
          Description="Exploring the hidden gems of Paris - the city of love and lights."
          initialLikes={randomLikes}
          commentCount={randomComments}
          shareCount={randomShares}
          isLiked={false}
        />
        <ReelVideo
          videoSource="/assets/breakingbad5.mp4"
          ProfilePhoto="https://i.pravatar.cc/150?img=5"
          Username="Fitness Coach"
          Description="Quick 5-minute workout routine you can do anywhere!"
          initialLikes={randomLikes}
          commentCount={randomComments}
          shareCount={randomShares}
          isLiked={false}
        />
        <ReelVideo
          videoSource="/assets/breakingbad6.mp4"
          ProfilePhoto="https://i.pravatar.cc/150?img=6"
          Username="Tech Reviews"
          Description="Latest smartphone review - is it worth the upgrade?"
          initialLikes={randomLikes}
          commentCount={randomComments}
          shareCount={randomShares}
          isLiked={false}
        />
        <ReelVideo
          videoSource="/assets/breakingbad7.mp4"
          ProfilePhoto="https://i.pravatar.cc/150?img=7"
          Username="Music Producer"
          Description="Behind the scenes of my latest music production!"
          initialLikes={randomLikes}
          commentCount={randomComments}
          shareCount={randomShares}
          isLiked={false}
        />
    </div>
  );
}

function ReelVideo({ videoSource, ProfilePhoto, Username, Description, initialLikes, commentCount, shareCount, isLiked: initiallyLiked }){
  
  const [isFollowing, setIsFollowing] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(initiallyLiked);
  const [showComments, setShowComments] = useState(false);
  
  const [comments, setComments] = useState([
    { id: 1, user: "User1", text: "Great video!", likes: 10 },
    { id: 2, user: "User2", text: "Amazing content!", likes: 5 }
  ]);
  
  const [newComment, setNewComment] = useState("");
  const videoRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current.play();
            videoRef.current.muted = false;
          } else {
            videoRef.current.pause();
            videoRef.current.muted = true;
          }
        });
      },
      { threshold: 0.7 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  function FollowFunction(){
    setIsFollowing(!isFollowing);
  }

  function handleLike(){
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, {
        id: comments.length + 1,
        user: "You",
        text: newComment,
        likes: 0
      }]);
      setNewComment("");
    }
  };

  const formatCount = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
  };

  return (
    <div className="reel-video-container">
      <video 
        ref={videoRef}
        src={videoSource} 
        className="reel-video" 
        loop 
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      <div className="reel-content-overlay">
        <div className="reel-left-content">
          <div className="reel-user-info">
            <img src={ProfilePhoto} alt="Profile" className="reel-profile-photo"/>
            <div className="username"> <b>{Username}</b> </div>
            <button onClick={FollowFunction} className="reel-follow-button">{isFollowing ? "Following" : "Follow"}</button>
          </div>
          <p className="reel-description">{Description}</p>
        </div>

        <div className="reel-right-content">
          <div className="reel-icon-group">
            <i className={`fas fa-heart ${isLiked ? 'liked' : ''}`} onClick={handleLike}></i>
            <span>{formatCount(likes)}</span>
          </div>
          <div className="reel-icon-group" onClick={() => setShowComments(true)}>
            <i className="fas fa-comment"></i>
            <span>{commentCount}</span>
          </div>
          <div className="reel-icon-group">
            <i className="fas fa-share"></i>
            <span>{shareCount}</span>
          </div>
        </div>
      </div>


      {showComments && (
        <div className="comments-modal">
          <div className="comments-header">
            <h3>Comments</h3>
            <i className="fas fa-times" onClick={() => setShowComments(false)}></i>
          </div>
          <div className="comments-list">
            {comments.map(comment => (
              <div key={comment.id} className="comment-item">
                <img src={ProfilePhoto} alt="User" className="comment-user-photo"/>
                <div className="comment-content">
                  <div className="comment-user">{comment.user}</div>
                  <div className="comment-text">{comment.text}</div>
                  <div className="comment-actions">
                    <span>Like</span>
                    <span>Reply</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="comment-input-container">
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="comment-input"
            />
            <button onClick={handleAddComment} className="comment-submit">Post</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Reels; 