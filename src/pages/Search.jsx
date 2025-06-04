import './Search.css';



function Search() {

  

  return (


    <div className='main'>
      <div className="search-container">
        <div className="search-header">
          <h2> Search </h2>
        </div>
        <div className="search-input-container">
          <input 
            type="text" 
            placeholder="Search users, posts, or hashtags..."
            className="search-input"
          />
        </div>
      </div>
      <Posts />

      </div>

  );
}


function Posts() {
  return (
    <>
    <div className="SearchPost">

      <div>
        <img className='SearchPosts' src='/assets/105902-1920x1200-desktop-hd-peaky-blinders-wallpaper-photo.jpg' alt='Image 1' />
        <img className='SearchPosts' src='/assets/12760-1920x1279-desktop-hd-peaky-blinders-wallpaper-photo.jpg' alt='Image 2' />
        <img className='SearchPosts' src='/assets/12751-3840x2160-desktop-4k-peaky-blinders-wallpaper-photo.jpg' alt='Image 3' />
      </div>

      <div>
        <img className='SearchPosts' src='/assets/12705-2197x1463-desktop-hd-peaky-blinders-wallpaper-image.jpg' alt='Image 4' />
        <img className='SearchPosts' src='/assets/stranger.jpg' />
        <img className='SearchPosts' src='/assets/183124-1920x1080-desktop-full-hd-breaking-bad-background-photo.jpg' alt='Image 6' />
      </div>

      <div>
        <img className='SearchPosts' src='/assets/12632-1920x1080-desktop-full-hd-peaky-blinders-wallpaper-photo.jpg' alt='Image 7' />
        <img className='SearchPosts' src='/assets/pubg.jpg' alt='Image 8' />
        <img className='SearchPosts' src='/assets/pubg2.jpg' alt='Image 9' />
      </div>

      <div>
        <img className='SearchPosts' src='/assets/pubg3.jpg' alt='Image 10' />
        <img className='SearchPosts' src='/assets/pubg4.jpg' alt='Image 11' />
        <img className='SearchPosts' src='/assets/183322-2560x1600-desktop-hd-breaking-bad-wallpaper-photo.jpg' alt='Image 12' />
      </div>

      <div>
        <img className='SearchPosts' src='/assets/183185-3840x2160-desktop-4k-breaking-bad-wallpaper-photo.jpg' alt='Image 13' />
        <img className='SearchPosts' src='/assets/stranger4.jpg' alt='Image 14' />
        <img className='SearchPosts' src='/assets/stranger3.jpg' alt='Image 15' />
      </div>
      <div>
        <img className='SearchPosts' src='/assets/stranger.jpg' alt='Image 4' />
        <img className='SearchPosts' src='/assets/22916-1920x1080-desktop-1080p-breaking-bad-background-image.jpg' />
        <img className='SearchPosts' src='/assets/183124-1920x1080-desktop-full-hd-breaking-bad-background-photo.jpg' alt='Image 6' />
      </div>
      <div>
        <img className='SearchPosts' src='/assets/stranger5.jpg' alt='Image 7' />
        <img className='SearchPosts' src='/assets/stranger6.jpg' alt='Image 8' />
        <img className='SearchPosts' src='/assets/pubg2.jpg' alt='Image 9' />
      </div>

    </div>


   </>

  );
}


export default Search;


