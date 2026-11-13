const Videos = () => {

  return (
    <div className="container mt-5">

      {/* Section 1 */}
      <h2 className="text-center text-success mb-4">Farming Tutorials</h2>
      <section className="row">
        {/* Child 1 goes here (col-md-4) */}
        <div className="col-md-4 mb-4">
          <video
            className="w-100 rounded-1 shadow"
            style={{ height: "220px", objectFit: "cover" }}
            controls
          >
            <source src="/videos/robot.mp4" type="video/mp4" />
          </video>

          <h5 className="mt-2 text-center">Farm Robots</h5>
          <p className="text-center text-muted">
            Learn how robots are transforming modern farming.
          </p>
        </div>

        {/* Child 2 goes here (col-md-4) */}
        <div className="col-md-4 mb-4">
          2
        </div>

        {/* Child 3 goes here (col-md-4) */}
        <div className="col-md-4 mb-4">
          3
        </div>
      </section>
      {/* end of section 1 */}

      <hr className="my-5" />

      {/* Section 2 */}
      {/* NB: You can copy paste section 1 and paste it here */}
    </div>
  );
}

export default Videos;