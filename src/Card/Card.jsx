import profilePic from '../assets/profilePic.jpg'

function Card(){
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">BYKUMYRDAL</h2>
            <p className="card-text">BYKUMYRDAL is a small village in the Sognefjord, Norway. It is known for its beautiful location and stunning views of the surrounding mountains and fjords. The village is a popular destination for tourists looking to experience the natural beauty of Norway.</p>
        </div>
    );
}

export default Card;