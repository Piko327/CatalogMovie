export const Dashboard =()=>
{
    return <section id="dashboard">
    <h2>Albums</h2>
    <ul className="card-wrapper">
      {/* <!-- Display a li with information about every post (if any)--> */}
      <li className="card">
        <img src="./images/BackinBlack.jpeg" alt="travis" />
        <p>
          <strong>Singer/Band: </strong><span className="singer">AC/DC</span>
        </p>
        <p>
          <strong>Album name: </strong><span className="album">Back in Black</span>
        </p>
        <p><strong>Sales:</strong><span className="sales">26 million (50 million claimed)</span></p>
        <a className="details-btn" href="">Details</a>
      </li>
      <li className="card">
        <img src="./images/beatles-1.jpg" alt="travis" />
        <p>
          <strong>Singer/Band: </strong><span className="singer">The Beatles</span>
        </p>
        <p>
          <strong>Album name: </strong><span className="album">1</span>
        </p>
        <p><strong>Sales:</strong><span className="sales">26 million (31 million claimed)</span></p>
        <a className="details-btn" href="">Details</a>
      </li>
      <li className="card">
        <img src="./images/pink-floyd-the-wall.jpeg" alt="travis" />
        <p>
          <strong>Singer/Band: </strong><span className="singer">Pink Floyd</span>
        </p>
        <p>
          <strong>Album name: </strong><span className="album">The Wall</span>
        </p>
        <p><strong>Sales:</strong><span className="sales">18 million (30 million claimed)</span></p>
        <a className="details-btn" href="">Details</a>
      </li>
    </ul>

    {/* <!-- Display an h2 if there are no posts --> */}
    <h2>There are no albums added yet.</h2>
  </section>
}