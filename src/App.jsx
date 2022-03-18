import React, { Component } from "react";

class App extends Component {
  state = {
    user: <u>This user has chirped:</u>,
    value: "",
    chirps: [],
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  addChirp = (event) => {
    event.preventDefault();
    const newChirp = this.state.chirps.slice();
    newChirp.unshift(this.state.value);
    this.setState({ value: "", chirps: newChirp });
  };

  render() {
    return (
      <>
        <section className="header">
          <div className="jumbotron jumbotron-fluid header shadow-lg py-4">
            <div className="container text-center align-middle">
              <h1 className="display-8">
                  <img src="https://previews.123rf.com/images/nezezon/nezezon1801/nezezon180100034/93872726-p%C3%A1jaro-gorjeando-en-la-rama-del-%C3%A1rbol-de-primavera-sobre-un-fondo-azul.jpg" width={250} height={250} alt="" />
                <strong>CHIRPER</strong>
              </h1>
              <p className="lead justify-center">
                <u>LET'S CHIRP</u>
              </p>
            </div>
          </div>
          <br />
        </section>
        <section className="newChirp">
          <div className="container">
            <section className="row justify-content-center">
              <article className="col-md-10">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">CHIRP NOW:</h5>
                    <form className="form-group">
                      <textarea
                        className="shadow-lg form-control mb-2"
                        calibri-label="With textarea"
                        value={this.state.value}
                        onChange={this.handleChange}
                      />
                      <button
                        className="btn btn-secondary btn-md btn-outline-light btn-shadow-lg"
                        onClick={this.addChirp}
                      >
                        Chirp It
                      </button>
                    </form>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </section>
        <hr />
        <section className="timeline">
          <main className="container">
            <section className="row justify-content-center">
              <>
                {this.state.chirps.map((chirp) => {
                  return (
                    <div className="col-lg-12">
                      <div className="card mb-3">
                        <div className="card-body shadow-lg">
                          <h5 className="card-title">{this.state.user}</h5>
                          <p className="card-text">{chirp}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
              <div className="col-lg-12">
                <div className="card mb-3">
                  <div className="card-body shadow-lg">
                    <h5 className="card-title">{this.state.user}</h5>
                    <p className="card-text">The Lakers suck!</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="card mb-3">
                  <div className="card-body shadow-lg">
                    <h5 className="card-title">{this.state.user}</h5>
                    <p className="card-text">Its rainy outside today</p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </section>
      </>
    );
  }
}

export default App;
